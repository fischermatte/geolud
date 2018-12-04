import * as cfenv from 'cfenv';
import * as parseMongoUrl from '../node_modules/mongodb/lib/url_parser';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { Logger } from '@nestjs/common';
import { Project } from './api/api';

const mailServiceCreds = cfenv.getAppEnv().getServiceCreds('geolud-mailservice');
const dbServiceCreds = cfenv.getAppEnv().getServiceCreds('geolud-mailservice');

class AppConfigService {
  public createAppConfig(): AppConfig {
    const isProd = !!mailServiceCreds && !!dbServiceCreds;
    if (isProd) {
      return this.prod();
    } else {
      return this.dev();
    }
  }

  private prod() {
    return { mongoConnectionOptions: this.parseMongoConnectionOptions(dbServiceCreds.uri), mailConfig: mailServiceCreds };
  }

  private dev() {
    const devMongoConnectionUrl = 'mongodb+srv://geolud:geolud@localhost:27017/geolud-mongoConnectionOptions?retryWrites=true';
    return {
      mailConfig: {
        host: 'localhost',
        port: 587,
        username: '',
        password: '',
        to: 'icke@localhost',
      },
      mongoConnectionOptions: this.parseMongoConnectionOptions(devMongoConnectionUrl),
    };
  }

  private parseMongoConnectionOptions(url: string): MongoConnectionOptions {
    url = url.replace('+srv', '');

    let config;
    parseMongoUrl(url, {}, (error, result) => {
      config = result;
    });
    const options: MongoConnectionOptions = {
      type: 'mongodb',
      host: config.servers[0].host,
      port: config.servers[0].port,
      username: config.auth.user,
      password: config.auth.password,
      database: config.dbName,
      authSource: 'admin',
      entities: [Project],
      synchronize: true,
      useNewUrlParser: true,
    };

    Logger.log(`mongodb location is at host: ${options.host}`);
    return options;
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
