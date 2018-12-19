import * as cfenv from 'cfenv';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { Project } from './projects/project.model';

const mailServiceCreds = cfenv.getAppEnv().getServiceCreds('geolud-mailservice');
const dbServiceCreds = cfenv.getAppEnv().getServiceCreds('geolud-db');

export interface MailConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  to: string;
}

export interface AppConfig {
  mongoConnectionOptions: MongoConnectionOptions;
  mailConfig: MailConfig;
}

function prod(): AppConfig {
  return {
    mongoConnectionOptions: {
      type: 'mongodb',
      host: dbServiceCreds.host,
      port: +dbServiceCreds.port,
      username: dbServiceCreds.username,
      password: dbServiceCreds.password,
      database: dbServiceCreds.database,
      ssl: dbServiceCreds.ssl === 'true',
      replicaSet: dbServiceCreds.replicaSet,
      authSource: dbServiceCreds.authSource,
      entities: [Project],
      synchronize: true,
      useNewUrlParser: true,
    },
    mailConfig: {
      host: mailServiceCreds.host,
      port: mailServiceCreds.port,
      username: mailServiceCreds.username,
      password: mailServiceCreds.password,
      to: mailServiceCreds.to,
    },
  };
}

function dev(): AppConfig {
  return {
    mongoConnectionOptions: {
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'geolud',
      password: 'geolud',
      database: 'geolud-db',
      authSource: 'admin',
      entities: [Project],
      synchronize: true,
      useNewUrlParser: true,
    },
    mailConfig: {
      host: 'localhost',
      port: 587,
      username: '',
      password: '',
      to: 'icke@localhost',
    },
  };
}

const isProd = !!mailServiceCreds && !!dbServiceCreds;

export const AppConfig = isProd ? prod() : dev();

export const MailConfigProvider = { provide: 'MailConfig', useValue: AppConfig.mailConfig };
