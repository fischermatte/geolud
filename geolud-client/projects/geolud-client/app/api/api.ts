export interface ContactRequest {
  name?: string;
  email: string;
  message: string;
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
