export interface Role {
  title: string;
  type: string;
  start_date: string;
  end_date: string | null;
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
