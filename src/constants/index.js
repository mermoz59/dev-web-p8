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

const experiences = [
    {
      title: "Développeur HTML & CSS",
      company_name: "Booki",
      icon: Booki,
      iconBg: "#fff",
      date: "Janvier. 2023",
      points: [
        "Prise en main de l'environnement de développement.",
        "Developpement de la page d'accueil d'une agence de voyage avec HTML et CSS.",
        "Respect du rendu visuel du projet en versions mobile, tablette et desktop.",
        "Code valide auprès du W3C, respectant les règles Web sémantique.",
      ],
    },
    {
      title: "Développeur JavaScript",
      company_name: "Sophie Bluel",
      icon: sbluel,
      iconBg: "#E6DEDD",
      date: "Février. 2023",
      points: [
        "Développement d'une page web dynamique avec JavaScript.",
        "Mise en place d'une page d'authentification pour l'administrateur du site.",
        "Ajout de boutons pour trier les médias et implémentation d'une modale permettant d'en uploader des nouveaux.",
        "Récupération des données via des appels à l'API.",
      ],
    },
    {
      title: "Développeur Web",
      company_name: "Nina Carducci",
      icon: ncarducci,
      iconBg: "#fff",
      date: "Mars. 2023",
      points: [
        "Débugguer et optimiser du site web du client à l'aide de WebPack 5.",
        "Ajout des données afin d'ameliorer le réferencement local.",
        "Rédaction d'un rapport d'intervention détaillant un avant/après des performances en se basant sur des audit Lighthouse, la liste des modifications et une liste des cas d'usage du site.",
      ],
    },
    {
      title: "Développeur React",
      company_name: "Kasa",
      icon: kasa,
      iconBg: "#fff",
      date: "Avril. 2023",
      points: [
        "Développement d'une application web de location immobilière avec React.",
        "Création de l'arborescence du site et des différentes pages avec react-router.",
        "Ajout de composant React réutilisable et dynamique avec pour certains une gestion des data.",
        "Présentation du projet au CTO en justifiant et défendant les décisions techniques.",
      ],
    },
    {
        title: "Développeur React",
        company_name: "Mon Vieux Grimoire",
        icon: logomvg,
        iconBg: "#F9F3EE",
        date: "Mai. 2023",
        points: [
          "Développement du back-end d'un site de notation de livres.",
          "Mise en place de la structure du code (contrôleurs, routeurs, etc.).",
          "Sécurisation de la base de données et optimisation des images.",
          "Création d'un système d'authentification à mail unique.",
        ],
      },
      {
        title: "Développeur Web",
        company_name: "Webgencia",
        icon: webgencia,
        iconBg: "#fff",
        date: "Juin. 2023",
        points: [
          "Planification du développement du site du client Qwenta.",
          "Veille technologiques afin de déterminer les outils les plus adaptés aux besoin du client.",
          "Présentation de l'outil de gestion de projet avec le déroulé précis du projet.",
          "Travail en collaboration avec le client avec la mise en place d'un plan de communication.",
        ],
      },
];

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

  export { experiences, skills, projects };

