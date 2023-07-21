import { useTranslation } from "react-i18next";

import {
    kasa,
    ncarducci,
    Booki,
    sbluel,
    logomvg,
    webgencia,
    css,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    tailwind,
    threejs,
    eslint,
    vitejs,
    awsIcon,
    github,
    jira,
    api,
    bookiproject,
    sophieproject,
    ninaproject,
    kasaproject,
    mvgproject
  } from "../assets";

const skills = [
  {
    id: 'html',
    title: 'HTML 5',
    icon: html,
  },
  {
    id: 'css',
    title: 'CSS 3',
    icon: css,
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: javascript,
  },
  {
    id: 'react',
    title: 'React',
    icon: reactjs,
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    icon: mongodb,
  },
  {
    id: 'aws',
    title: 'AWS',
    icon: awsIcon,
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figma,
  },
  {
    id: 'git',
    title: 'Git',
    icon: git,
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: github,
  },
  {
    id: 'tailwind',
    title: 'TailwindCSS',
    icon:tailwind,
  },
  {
    id: 'vite',
    title: 'ViteJS',
    icon: vitejs,
  },
  {
    id: 'threejs',
    title: 'ThreeJS',
    icon: threejs,
  },
  {
    id: 'node',
    title: 'NodeJS',
    icon: nodejs,
  },
  {
    id: 'jira',
    title: 'Jira',
    icon: jira,
  },
  {
    id: 'api',
    title: 'API',
    icon: api,
  },
  {
    id: 'eslint',
    title: 'ESLint',
    icon: eslint,
  },
];

const projects = [
  {
    name: "Booki",
    description:
      "Page d'accueil d'une agence de voyage (Booki), en HTML & CSS. Avec respect du rendu visuel du projet en versions mobile, tablette et desktop ",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "OCRProjects",
        color: "text-openpurple",
      },
    ],
    image: bookiproject,
    source_code_link: "https://mermoz59.github.io/dev-web-p2/",
  },
  {
    name: "Sophie Bluel",
    description:
      "Développement d'une page web dynamique avec JavaScript. Ajout d'un système d'authentification, de boutons pour trier les médias et d'une modale.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "text-yellow-400",
      },
      {
        name: "OCRProjects",
        color: "text-openpurple",
      },
    ],
    image: sophieproject,
    source_code_link: "https://mermoz59.github.io/dev-web-p3/",
  },
  {
    name: "Nina Carducci",
    description:
      "Débugguer et optimiser du site web du client à l'aide de WebPack 5, en améliorant le réferencement local. Avec livraison du rapport détaillé des modifications.",
    tags: [
      {
        name: "Optimisation",
        color: "green-text-gradient",
      },
      {
        name: "SEO",
        color: "pink-text-gradient",
      },
      {
        name: "OCRProjects",
        color: "text-openpurple",
      },
    ],
    image: ninaproject,
    source_code_link: "https://mermoz59.github.io/dev-web-p5/",
  },
  {
    name: "Kasa",
    description:
      "Développement d'une application web de location immobilière avec React from 0. Création de l'arborescence du l'application avec des composants dynamique.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "OCRProjects",
        color: "text-openpurple",
      },
    ],
    image: kasaproject,
    source_code_link: "https://mermoz59.github.io/dev-web-p6",
  },
  {
    name: "Mon Vieux Grimoire",
    description:
      "Développement du back-end d'un site de notation de livres avec la mise en place de la structure du code et l'ajout de plusieurs fonctionnalitées.",
    tags: [
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Back",
        color: "pink-text-gradient",
      },
      {
        name: "OCRProjects",
        color: "text-openpurple",
      },
    ],
    image: mvgproject,
    source_code_link: "https://github.com/mermoz59",
  },
];


const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  }
]

  export { skills, projects, languages };

