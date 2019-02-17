export interface Project {
  id: string;
  title?: string;
  description?: string;
  period?: Interval;
  customer: Customer;
  links?: Array<AssetLink>;
}

export interface Interval {
  from: string;
  to: string;
}

export interface AssetLink {
  title: string;
  url: string;
}

export interface Customer {
  name: string;
  url: string;
}
