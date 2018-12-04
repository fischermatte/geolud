import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

export const API = {
  PROJECTS: 'api/projects',
  CONTACT: 'api/contact',
};

export interface ContactRequest {
  name?: string;
  email: string;
  message: string;
}

export class Customer {
  @Column()
  name: string;
  @Column()
  url: string;
}

export class AssetLink {
  @Column()
  title: string;
  @Column()
  url: string;
}

export class Interval {
  @Column()
  from: Date;
  @Column()
  to: Date;
}

@Entity()
export class Project {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column(type => Interval)
  period: Interval;

  @Column(type => Customer)
  customer: Customer;

  @Column(type => AssetLink)
  assetLinks?: AssetLink[];
}
