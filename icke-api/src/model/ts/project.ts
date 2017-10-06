import {Customer} from "./customer";

export interface Project {
    id: string;
    title: string;
    period: string;
    customer: Customer;
    description: string;
}