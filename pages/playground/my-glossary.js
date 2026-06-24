import { motion } from "framer-motion";

import Page from "../../components/Page";

const ENTRIES = [
  {
    term: "Analytical thinking",
    definition:
      "Analytical thinking is the ability to tackle complicated issues by evaluating information you’ve gathered and organized. Analytical thinkers can detect patterns between datasets that often lead to creative solutions.",
  },
  {
    term: "Bootstrapping",
    definition:
      'Bootstrapping is a term for moving ahead without external help. It is based on the 19th century metaphor for a impossible task: "to pull yourself up by your bootstraps." Despite being based on an analogy for the impossible, bootstrapping is considered a useful technique in several areas.',
  },
  {
    term: "Feedback loop",
    definition:
      "A system that allows the results of your actions to be measured. It is often viewed as a repeated process of strategy change followed by measurement of results that ultimately leads to a fully optimized strategy.",
  },
  {
    term: "Human Centered Design",
    definition:
      "Human-centered design is a creative approach to problem solving. It’s a process that starts with the people you’re designing for and ends with new solutions that are tailor made to suit their needs. Human-centered design is all about building a deep empathy with the people you’re designing for; generating tons of ideas; building a bunch of prototypes; sharing what you’ve made with the people you’re designing for; and eventually putting your innovative new solution out in the world.",
  },
  {
    term: "Modularity",
    definition:
      "Modular design is a design approach that creates things out of independent parts with standard interfaces. This allows designs to be customized, upgraded, repaired and for parts to be. A well known example of modular design are LEGO plastic construction toys and Ikea the Scandinavian-founded, worldwide furniture store.",
  },
  {
    term: "Nudge Theory",
    definition:
      "The idea that subtle suggestions, choices and positive reinforcement often achieve more influence than commands, rules and punishment. It has implications for government, education, marketing, leadership and any other domain that relies on social influence.",
  },
  {
    term: "Socratic method",
    definition:
      "The Socratic method (also known as method of Elenchus, elenctic method, or Socratic debate) is a form of cooperative argumentative dialogue between individuals, based on asking and answering questions to stimulate critical thinking and to draw out ideas and underlying presuppositions.",
  },
  {
    term: "System Thinking",
    definition:
      "Systems thinking is a holistic approach to analysis that focuses on the way that a system's constituent parts interrelate and how systems work over time and within the context of larger systems. The systems thinking approach contrasts with traditional analysis, which studies systems by breaking them down into their separate elements.",
  },
  {
    term: "Path of least resistance",
    definition:
      "Path of least resistance is the easiest path to a goal. This sounds like an obvious choice but can be problematic when your goal is narrow such that you miss the bigger picture by doing things the easy way. The following are illustrative examples of the path of least resistance.",
  },
  {
    term: "Pokayoke",
    definition:
      "Is a Japanese design term that can be translated mistake proofing. Japanese business culture has a minor obsession with preventing human error through design. Pokayoke applies to both the design of production techniques and end products for consumers (e.g. Microwave doors typically can't be open when the microwave is operating).",
  },
  {
    term: "Principle Of Least Astonishment",
    definition:
      "Is a rule of thumb that states that user interfaces are best when they aren't surprising. That is to say, that when a user first sees your design they aren't surprised by how it works. This lowers the learning curve for users and tends to generate positive emotions. When users need to invest in learning a design, they may feel that they are bending to technology as opposed to technology bending to them.",
  },
];

const hoverAnimation = {
  backgroundColor: "var(--card-color-hover)",
  transition: { duration: 0.23 },
};

const Glossary = () => (
  <Page
    title="Glossary"
    description="This is my personal resource that lists the methods, practices and ways of working I follow in design."
    image="https://www.boriskirov.me/meta-tag-glossary.png"
  >
    <h1 className="heading2Xl">Glossary</h1>
    <p>
      This is my personal resource that lists the methods, practices and ways of
      working I follow in design.
    </p>
    <div className="contentWrapper">
      <section>
        {ENTRIES.map(({ term, definition }) => (
          <motion.details
            key={term}
            className="dic-card"
            whileHover={hoverAnimation}
          >
            <summary aria-haspopup="true" className="headingM">
              {term}
            </summary>
            <span>{definition}</span>
          </motion.details>
        ))}
      </section>
    </div>
  </Page>
);

export default Glossary;
