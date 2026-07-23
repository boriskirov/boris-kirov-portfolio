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
    name: boris.resume.label,
    url: boris.resume.url,
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
    url: boris.github,
    icon: "/github.svg",
    targetBlank: true,
  },
  {
    name: "Figma",
    url: boris.social.figma,
    icon: "/figma.svg",
    targetBlank: true,
  },
  {
    name: "LinkedIn",
    url: boris.linkedin,
    icon: "/linkedin.svg",
    targetBlank: true,
  },
];

export default FooterList;
