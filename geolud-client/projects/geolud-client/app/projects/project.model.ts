import { AssetLink, Customer, Interval } from '../api/api';

export interface Project {
  id: string;
  title?: string;
  description?: string;
  period?: Interval;
  customer: Customer;
  links?: Array<AssetLink>;
}
