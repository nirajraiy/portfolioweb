export interface AppLink {
  android?: string;
  ios?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  role?: string;
  status: "live" | "development";
  featured?: boolean;
  badge?: string;
  suite?: "qwaiting";
  audience?: string;
  tech: string[];
  highlights?: string[];
  icon?: string;
  screenshots?: string[];
  orientation?: "portrait" | "landscape";
  appLink?: AppLink;
}
