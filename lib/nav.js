// A primary item is either a direct link (href) or a group (children)
export const NAV = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: "/home.svg",
    description: "Home icon",
    target: "_self",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: "/dashboard.svg",
    description: "Dashboard icon",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    icon: "/about.svg",
    description: "About me icon",
  },
  {
    id: "playground",
    label: "Playground",
    href: "/playground",
    icon: "/playground.svg",
    description: "Playground icon",
    children: [
      {
        label: "Strings",
        href: "https://github.com/boriskirov/text-string",
        target: "_blank",
      },
      {
        label: "Mirotone",
        href: "https://www.mirotone.xyz",
        target: "_blank",
      },
      {
        label: "Handoff notes",
        href: "https://www.figma.com/community/plugin/943057200269205449/handoff-notes",
        target: "_blank",
      },
      { label: "Cheatsheets", href: "/playground/cheatsheets" },
      { label: "My Glossary", href: "/playground/my-glossary" },
      { label: "My Stack", href: "/playground/my-stack" },
      {
        label: "Fluidigrid",
        href: "https://github.com/boriskirov/Fluidigrid",
        target: "_blank",
      },
      {
        label: "Fluiditype",
        href: "https://github.com/boriskirov/fluiditype",
        target: "_blank",
      },
      {
        label: "Emoji Builder",
        href: "https://www.sketchappsources.com/resource/download-3786.html",
        target: "_blank",
      },
    ],
  },
  {
    id: "writings",
    label: "Writing",
    href: "/writings",
    icon: "/writings.svg",
    description: "Writings icon",
    children: [
      {
        label: "Streams - The future of data management",
        href: "/cases/streams-future-of-data-management",
      },
      {
        label: "Life at Elastic",
        href: "/cases/life-at-elastic",
      },
      {
        label: "Low friction, low cost blogging system",
        href: "/cases/frictionless-newsletter-system",
      },
      {
        label: "Life at Miro",
        href: "/cases/life-at-miro",
      },
      {
        label: "Internal tools and methods for gaining empathy",
        href: "/cases/tools-methods-for-gaining-empathy",
      },
      {
        label: "The history of the web browser",
        href: "/posts/history-browser",
      },
      {
        label: "The Great Wall of Development",
        href: "/cases/great-wall-of-development",
      },
      {
        label: "Implementing system thinking",
        href: "/cases/nda",
      },
      {
        label: "Working with Tripscout",
        href: "/cases/tripscout",
      },
      {
        label: "Display-P3 color uplift",
        href: "/codes/display-p3",
      },
      {
        label: "24 things I learned as a Product Designer",
        href: "/posts/24-I-learned-as-a-product-designer",
      },
      {
        label: "Defining a design system",
        href: "/posts/defining-design-system",
      },
      {
        label: "Improving impatience",
        href: "/posts/improving-impatience",
      },
    ],
  },
  {
    id: "talks",
    label: "Talks",
    href: "/talks",
    icon: "/talks.svg",
    description: "Talks icon",
    children: [
      {
        label: "Design like a developer",
        href: "https://www.figma.com/community/file/1129497070884323883",
        target: "_blank",
      },
      {
        label: "Designing for Developers",
        href: "https://devxconf.org/",
        target: "_blank",
      },
      {
        label: "Observe your JavaScript apps with Elastic and Open Telemtry",
        href: "https://jstalks.net/",
        target: "_blank",
      },
    ],
  }, // direct link (no secondary)
];
