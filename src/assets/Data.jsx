import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { TbBrandReactNative, TbBrandVscode } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPostman } from "react-icons/si";

export const projectsData = [
  {
    title: "SpendSync",
    description:
      "A finance tracker to monitor your income, expenses, and balance over time.",
    techStack: [
      "React",
      "Bootstrap",
      "Node.js",
      "MongoDB",
      "Express",
      "REST APIs",
    ],
    image: "/projects/spendSync.png",
    github: "https://github.com/Vidushi87/SpendSync",
    demo: "#",
    status: "coming soon",
  },
  {
    title: "Find Your Recipe",
    description:
      "A recipe app to discover new dishes based on ingredients, dietary preferences, and more.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
    image: "/projects/findYourRecipe.png",
    github: "https://github.com/Vidushi87/FindYourRecipe",
    demo: "https://find-your-recipe-nine.vercel.app/",
    status: "published",
  },
  {
    title: "Tool-Kit",
    description:
      "A collection of small utility apps designed to help in everyday tasks.",
    techStack: ["React", "Bootstrap", "JavaScript", "REST APIs"],
    image: "/projects/toolKit.png",
    github: "https://github.com/Vidushi87/toolkit",
    demo: "https://toolkit-vert.vercel.app/",
    status: "published",
  },
  {
    title: "MovieFlix",
    description:
      "A movie discovery platform to find trending movies and TV shows from your favorite genres.",
    techStack: [
      "React Native",
      "Tailwind CSS",
      "Expo",
      "JavaScript",
      "REST APIs",
    ],
    image: "/projects/movieFlix.jpeg",
    github: "https://github.com/Vidushi87/MovieFlix",
    demo: "#",
    status: "coming soon",
  },
];

export const footerData = {
  designedBy: "Vidushi Pandey",
  copyright: "Copyright © 2025 VP",
  socialLinks: [
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/Vidushi87",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vidushi-pandey-78b718196/",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      url: "https://x.com/khushi_vidushi",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: "https://www.instagram.com/_packetofhappiness_?igsh=Z21mMDljcG5qOXU5",
    },
  ],
};

export const aboutData = {
  intro: {
    firstName: "Vidushi",
    secondName: "Pandey",
    role: "Software Developer",
    descriptionPt1: `I'm Vidushi Pandey, a software developer who loves crafting smooth, intuitive user experiences. Over the past few years, I've worked on everything from enterprise dashboards to side projects — mostly in React.js, Node.js, and JavaScript.`,
    descriptionPt2: `  I believe the web should feel personal, which is why I'm always thinking about the user — and sometimes overthinking button placements.`,
    descriptionPt3: ` When I'm not coding, you’ll find me trying to perfect my freestyle in the pool 🏊‍♀️, learning new dance moves 💃, flipping through a self-growth book 📖, or curled up with a comfort sitcom like`,
    descriptionPt4: `F.R.I.E.N.D.S.`,
  },
  littleThings: [
    "📚 Reading self-growth books",
    "🧘‍♀️ Mindful routines",
    "🏊‍♀️ Swimming sessions",
    "💃 Dancing after hours",
    "🎧 Chill playlists while coding",
    "🍜 Exploring new food joints",
    "🎬 Sitcom marathons (F.R.I.E.N.D.S & B99)",
  ],
};

export const techStackData = [
  { icon: <FaReact />, label: "React.js" },
  { icon: <DiJavascript1 />, label: "JavaScript" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3 />, label: "CSS" },
  { icon: <FaBootstrap />, label: "Bootstrap" },
  { icon: <FaDatabase />, label: "SQL" },
  { icon: <DiMongodb />, label: "MongoDB" },
  { icon: <TbBrandReactNative />, label: "React Native" },
  { icon: <RiTailwindCssFill />, label: "TailwindCSS" },
];

export const toolsData = [
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <TbBrandVscode />, label: "VS Code" },
  { icon: <SiPostman />, label: "Postman" },
];
