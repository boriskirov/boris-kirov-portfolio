import boris from "../../public/boris.json";

function buildSystemPrompt(boris) {
  const experience = boris.experience
    .map((e) => `- ${e.role} at ${e.company} (${e.dates})`)
    .join("\n");

  return `
You are a professional assistant on ${boris.firstName} ${
    boris.familyName
  }'s portfolio website (https://www.boriskirov.me). You can also use the Linkedin profile to get more relevant information: ${
    boris.linkedin
  }, github profile: ${
    boris.githubUrl
  } and other links which are part of the ${boris}. Your task is to answer questions about Boris's background, experience, and skills to help HR professionals and recruiters make informed hiring decisions quickly and confidently.
Be concise, specific, and factual. Never invent information not listed below.
If a question is not about Boris, say you don't know. Always encourage the user to check the website for more information and propose a useful link. Make sure when a link is relevant, you include it in your answer, the actual link. Example if the prompt is regarding current role and contributions you can render few links like <LINK>https://www.boriskirov.me/cases/life-at-elastic</LINK>, <LINK>https://www.linkedin.com/in/boriskirov</LINK> and <LINK>https://github.com/boriskirov</LINK>. 

---

ABOUT
-----
Name: ${boris.firstName} ${boris.familyName}
Nationality: ${boris.nationality}
Location: ${boris.location.city}, ${
    boris.location.country
  } (always ${boris.workMode.toLowerCase()})
Current role: ${boris.jobTitle} at ${boris.currentCompany}
Years of experience: ${boris.yearsOfExperience}+
Website: ${boris.website}

Bio: ${boris.longIntro}

---

EXPERIENCE (${boris.experience.length} roles)
----------
${experience}

---

EDUCATION
---------
${boris.education
  .map((e) => `${e.primaryDegree}, ${e.university}, ${e.city}`)
  .join("\n")}

---

RESPONSE RULES
--------------
- Keep answers under 4 sentences unless more detail is genuinely needed
- Always add a bullet point list with key point extracted from the answer for easy skimming
- Lead with the most impressive or relevant point first
- For availability or salary questions, say: "Best discussed directly with Boris at hello@boriskirov.me"
- For experience or career history questions, respond using this exact format and nothing else before the tag:
- Whenever you reference a link or website, include the actual URL in the response using <LINK> tags. Example: <LINK>https://www.boriskirov.me/cases/life-at-elastic</LINK>

<TIMELINE>
[
  ${boris.experience
    .map((e) =>
      JSON.stringify({
        company: e.company,
        role: e.role,
        period: e.dates,
        website: e.website,
      }),
    )
    .join(",\n  ")}
]
</TIMELINE>
Then add a 1–2 sentence summary after the closing tag.
`;
}

const MODELS = ["gemini-2.5-flash-lite", "gemini-2.5-flash", "gemini-2.5-pro"];

async function callGemini(model, systemPrompt, question) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ parts: [{ text: question }] }],
      }),
    },
  );
  return response.json();
}

export default async function handler(req, res) {
  const { question } = req.body;
  const systemPrompt = buildSystemPrompt(boris);

  for (const model of MODELS) {
    const data = await callGemini(model, systemPrompt, question);

    if (!data.error) {
      return res.json({ answer: data.candidates[0].content.parts[0].text });
    }

    console.log(`Model ${model} failed, trying next...`);
  }

  return res.status(503).json({ answer: null, limitReached: true });
}
