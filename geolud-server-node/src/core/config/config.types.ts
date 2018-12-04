import {MongoConnectionOptions} from 'typeorm/driver/mongodb/MongoConnectionOptions';


export interface MailOptions {
    host: string;
    port: string;
    username: string;
    password: string;
    to: string;
}

export interface Config {
    db: MongoConnectionOptions;
    mail: MailOptions;
}