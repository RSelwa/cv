import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { UserData } from "@/types";

export const RESUME_DATA: UserData = {
  name: "Raphael SELWA",
  initials: "RS",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  about:
    "Ingénieur Développeur Web axé sur la construction de produits avec une attention particulière aux détails",
  summary:
    "En tant que développeur web, j’ai travaillé sur des projets variés, allant de la création de sites web, d’applications mobiles, de bots, de scrapper, de back-office, de front-end, de back-end, de tests unitaires et fonctionnels, de maintenance et d’amélioration de l’application web. J’ai également travaillé sur des projets de SEO, de réparation de sites Wordpress, d’optimisation de formulaires Typeform et Calendly, d’amélioration de contenu et de design de sites web. ",
  avatarUrl: "https://avatars.githubusercontent.com/u/55576838?v=4",
  personalWebsiteUrl: "https://raphael-selwa-curriculum-vitae.vercel.app/",
  contact: {
    email: "selwa.raphael@gmail.com",
    tel: "+33782368403",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RSelwa",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raphael-selwa-prevost/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "ESGI - école supérieure de génie informatique",
      degree: "Master en ingénérie web - Alternance chez FLIM",
      start: "2022",
      end: "2024",
    },
    {
      school: "Sorbonne université",
      degree:
        "Licence Professionnelle - Applications Web et Mobiles - Alternance chez Moss SAS",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "FLIM",
      link: "https://flim.ai/",
      badges: ["Alternance"],
      title: "Développeur front-end",
      logo: ParabolLogo,
      start: "2021",
      end: new Date().getFullYear(),
      description:
        "Implémentation de nouvelles fonctionnalités, travaille sur l'amélioration du code, migration de scss vers Tailwind CSS. Technologies utilisées : React, TypeScript, Firebase.",
    },
    {
      company: "Freelance",
      link: "/",
      badges: [],
      title: "Développeur freelance",
      logo: JojoMobileLogo,
      start: "2023",
      end: new Date().getFullYear(),
      customBullet: "👉",
      description: [
        "Optimisation SEO",
        "Réparation de sites Wordpress",
        "Optimisation formulaires Typeform et Calendly",
        "Amélioration contenu et design de sites web",
      ],
    },
    {
      company: "Moss SAS",
      link: "/",
      badges: ["Alternance"],
      title: "Développeur web",
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description:
        "Creation et automatisation de tests unitaires et fonctionnels, développement de nouvelles fonctionnalités, maintenance et amélioration de l'application web. Technologies: Selenium, Java, Angular",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Firebase",
    "Python",
  ],
  // Bot scrapper flim
  // BO FLim
  // Front end Flim
  // Les secrets de l'immobilier typeform Calendly
  // Immocompare
  // application doctolib
  // site F1
  // Site météo
  // Ancien portfolio Three JS
  // Application Picollo
  // Cartes wankil
  //? Jeu pour un streamer
  projects: [
    {
      title: "FLIM 👀",
      year: `2022 - ${new Date().getFullYear()}`,
      techStack: ["TypeScript", "Next.js", "React", "Firebase"],
      description: ["Front-end", "Bot scrapper", "Back-office", "Stripe"],
      link: {
        label: "flim.ai",
        href: "https://flim.ai/",
      },
    },
    {
      title: "Les secrets de l'immobillier 🏢",
      year: "2024",
      techStack: ["Freelance", "Wordpress", "Calendly", "Typeform"],
      description: [
        "Création de pages",
        "Amélioration formulaires de rendez-vous",
        "Optimisation SEO",
      ],
    },
    {
      title: "Immocompare 🏢",
      techStack: ["Freelance", "Wordpress"],
      description:
        "Réparation de sites Wordpress et optimisation de la mise en cache",
    },
    {
      title: "Clone Doctolib 🩺",
      year: "2023",
      techStack: [
        "Projet Master",
        "React",
        "API Platform",
        "TypeScript",
        "PHP",
        "Google API",
      ],
      description:
        "Création d'une application web pour la prise de rendez-vous médicaux, selon la localisation des patients et des médecins",
    },
    {
      title: "Clone Site F1 🏎️",
      techStack: ["Side Project", "React", "API Formula 1", "TypeScript"],
      link: {
        href: "https://formula-1-rselwa.vercel.app/",
        label: "Voir le site",
      },
      year: "2021",
      description:
        "Site permettant de suivre la saison actuelle de Formule 1, avec les résultats des courses, les classements, les horaires des courses, les informations sur les pilotes et les écuries",
    },
    {
      title: "Weather app 🌤️",
      techStack: ["Side Project", "React", "Open Weather", "TypeScript"],
      link: {
        href: "https://weather-app-rselwa.vercel.app/",
        label: "Voir le site",
      },
      year: "2021",
      description: "Site permettant de voir la météo selon la ville souhaité",
    },
    {
      title: "Portfolio (old) 📜",
      techStack: ["Side Project", "React", "Three JS", "TypeScript"],
      link: {
        href: "https://selwa-portfolio.vercel.app/",
        label: "Voir le site",
      },
      year: "2021",
      description: "Ancien portfolio réalisé avec Three JS",
    },
    {
      title: "Application mobile 📱",
      techStack: ["Side Project", "React Native", "TypeScript"],
      year: "2021",
      description:
        "Ancienne application mobile comme Picollo réalisée avec React Native",
    },
    {
      title: "Jeu carte 3D 🃏",
      techStack: ["Side Project", "Creative coding", "React", "TypeScript"],
      year: "2022",
      link: {
        href: "https://wankul-origins.vercel.app/cards",
        label: "Voir le site",
      },
      description:
        "Jeu de carte 3D avec effets holographiques pour un streamer connu (voir sur pc)",
    },
  ],
};
