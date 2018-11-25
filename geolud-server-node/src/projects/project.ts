export interface Project {
    id: string;
    title: string;
    description: string;
    period: Interval;
    customer: Customer;
    links: Link[];
}

export interface Customer {
    name: string;
    url: string;
}

export interface Link  {
    title: string;
    url: string;
}

export interface Interval {
    from : Date;
    to: Date;
}