export type ContactLink = {
  url: string;
  label: string;
  icon?: string;
};

export interface Role {
  title: string;
  type: string;
  date: {
    start: string;
    end: string | null;
  };
  duration: string;
  location?: string;
  description: string;
  skills: string[];
}

export interface Job {
  company: string;
  location: string;
  logo?: string;
  visible?: boolean;
  roles: Role[];
}

export type FavIcon = {
  href: string;
  rel: string;
  sizes: string;
  type?: string;
};

export type Experience = {
  company: string;
  location?: string;
  logo?: string;
  visible?: boolean;
  roles: Role[];
};

export type Recommendation = {
  name: string;
  avatar: string;
  title: string;
  date: string;
  relationship: string;
  body: string;
};
