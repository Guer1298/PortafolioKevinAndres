export type NavItem = {
  label: string;
  href: string;
};

export type HeroData = {
  highlight: any;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export type ValueCardItem = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type TechCategory = {
  description: string;
  category: string;
  items: string[];
};

export type CapabilityBlock = {
  title: string;
  points: string[];
};

export type ContactLink = {
  label: string;
  href: string;
};