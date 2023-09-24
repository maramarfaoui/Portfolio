export const METADATA = {
  author: "Maram Arfaoui",
  title: "Portfolio | Maram Arfaoui",
  description:
    "Maram Arfaoui is a Software Engineering Student from Tunisia, interested in crafting beautiful and functional applications.",
  siteUrl: "",
  twitterHandle: "",
  keywords: [
    "Maram Arfaoui",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "/icon-192x192.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Software Engineering Student",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "",
    url: "",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/arfaoui-maram",
  },
  {
    name: "github",
    url: "https:/github.com/maramarfaoui",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/maramarfaoui/",
  },
  {
    name: "",
    url: "",
  },
];

export const SKILLS = {
  languagesAndTools: [
      "metamask",
    "ether",
    "html",
    "css",
    "javascript",
    "typescript",
    "cc",
    "intelij",
    "sass",
    "nodejs",
    "python",
      "git"


  ],
  librariesAndFrameworks: [
    "react",
      "dotnet",
      "spring",
      "angular",
      "symfony"

  ],
  databases: [
      "mysql",
    "mongodb"],
  other: ["git",
    ],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "Solar Chain",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Crowdfunding platform to finance the installation of solar panels 🛏",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["metamask", "react", "tailwindcss"],
  },
  {
    name: "COCO Market",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "An online sales platform (Store management and after-sales service) ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/maramarfaoui/COCOMarket",
    tech: [],
  },
  {
    name: "Astree",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "An online banking platform that empowers customers to manage their accounts. 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/maramarfaoui/Astree",
    tech: [],
  },
  {
    name: "BAZ'ART",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Virtual art gallery management website (User and event management)🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/maramarfaoui/BAZ-ART",
    tech: [],
  },
];

export const WORK = [
  {
    id: 1,
    company: "MyDevUp",
    title: "Blockchain Intern",
    location: "Tunis - Tunisia",
    range: "July 2023 - September 2023",
    responsibilities: [
      "Creating and developing a Web3-based platform, utilizing Solidity and React.",
      "Crowdfunding platform to finance the installation of solar panels.",
      "The initiative leverages crowdfunding principles to raise funds for the installation of solar panels.",
    ],
    url: "",
    video: "/work/mydevup.mp4",
  },
  {
    id: 2,
    company: "L'oryx Bio",
    title: "Full Stack Web Development Intern",
    location: "Tunisia",
    range: "June 2022 - August 2022",
    responsibilities: [
      "Creating an e-commerce website for cosmetic products using Spring Boot and Angular technologies.",
      "Management of order and shipment operations and integrating the ChatGPT messaging system .",
      "Integration of product search and filter functionalities,along with implementing a secure online payment system.",
    ],
    url: "",
    video: "/work/oryx.mp4",
  },

];

export const GTAG = "G-5HCTL2TJ5W";
