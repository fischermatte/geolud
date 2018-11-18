import { Customer } from './customer';
import { Link } from './link';


export interface Project {
    id: string;
    title?: string;
    description?: string;
    period?: string;
    customer?: Customer;
    links?: Array<Link>;
}
