export type SocialLink = {
  name: string;
  url: string;
  icon: any; // Remplacer "any" par le type réel de l'icône si possible
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: any; // Remplacer "any" par le type réel du logo si possible
  start: string;
  end: string | number;
  description: string | string[];
  customBullet?: string;
};

export type Project = {
  title: string;
  techStack: string[];
  description: string | string[];
  customBullet?: string;
  logo: any; // Remplacer "any" par le type réel du logo si possible
  year?: string;
  link?: {
    label: string;
    href: string;
  };
};

export type Contact = {
  email: string;
  tel: string;
  social: SocialLink[];
};

export type UserData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: Contact;
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: Project[];
};
