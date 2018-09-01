export interface Project {
    id: string;
    title?: string;
    description?: string;
    period?: string;
    customer?: Customer;
    links?: Array<Link>;
}

export interface Link {
  title?: string;
  url?: string;
}

export interface Customer {
  name: string;
  url?: string;
}
