import boris from "../../public/boris.json";

const FooterList = [
  {
    id: "agent-mode",
    name: "Agent mode",
    url: "/?mode=chat",
    icon: "/chat.svg",
    targetBlank: false,
  },
  {
    name: "Resume 2026",
    url: "/BorisKirov_Resume.pdf",
    icon: "/resume.svg",
    download: true,
  },
  {
    name: "JSON me",
    url: "/boris.json",
    icon: "/json.svg",
    targetBlank: true,
  },
  {
    name: "GitHub",
    url: boris.githubUrl,
    icon: "/github.svg",
    targetBlank: true,
  },
  {
    name: "Figma",
    url: "https://www.figma.com/@boriskirov",
    icon: "/figma.svg",
    targetBlank: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/boris-kirov-b6b110a4/",
    icon: "/linkedin.svg",
    targetBlank: true,
  },
];

export default FooterList;
