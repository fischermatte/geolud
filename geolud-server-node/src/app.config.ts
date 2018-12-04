import * as cfenv from 'cfenv';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { Project } from './api/api';

const mailServiceCreds = cfenv.getAppEnv().getServiceCreds('geolud-mailservice');
const dbServiceCreds = cfenv.getAppEnv().getServiceCreds('geolud-db');

class AppConfigService {
  public createAppConfig(): AppConfig {
    const isProd = !!mailServiceCreds && !!dbServiceCreds;
    if (isProd) {
      return this.prod();
    } else {
      return this.dev();
    }
  }

  private prod(): AppConfig {
    return {
      mongoConnectionOptions: {
        type: 'mongodb',
        host: dbServiceCreds.host,
        port: dbServiceCreds.port,
        username: dbServiceCreds.username,
        password: dbServiceCreds.password,
        database: dbServiceCreds.database,
        ssl: dbServiceCreds.ssl,
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

  private dev(): AppConfig {
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
}

export interface MailConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  to: string;
}

interface AppConfig {
  mongoConnectionOptions: MongoConnectionOptions;
  mailConfig: MailConfig;
}

export const AppConfig = new AppConfigService().createAppConfig();

export const MailConfigProvider = { provide: 'MailConfig', useValue: AppConfig.mailConfig };
