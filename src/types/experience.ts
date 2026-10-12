export interface ExperienceStat {
  label: string;
  value: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  type?: string;
  summary?: string;
  technologies: string[];
  responsibilities: string[];
  achievements?: string[];
  stats?: ExperienceStat[];
}

export type Experiences = Experience[];
