import * as cfenv from 'cfenv';
import { Config, MailOptions } from './config.types';

import * as parseMongoUrl from './../../../node_modules/mongodb/lib/url_parser';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { Project } from '../../projects/project.entity';

const LOCAL_DEV_MONGO_URL = 'mongodb+srv://geolud:geolud@localhost:27017/geolud-db?retryWrites=true';

export const CONFIG: Config = { db: getDbOptions(), mail: getMailOptions() };

function getDbOptions(): MongoConnectionOptions {
  const url = getMongoConnectionUrl();
  let options;
  parseMongoUrl(url, {}, (error, result) => {
    options = result;
  });
  return {
    type: 'mongodb',
    host: options.servers[0].host,
    port: options.servers[0].port,
    username: options.auth.user,
    password: options.auth.password,
    database: options.dbName,
    authSource: 'admin',
    entities: [Project],
    synchronize: true,
    useNewUrlParser: true,
  };
}

function getMongoConnectionUrl(): string {
  const dbConfig = cfenv.getAppEnv().getServiceCreds('geolud-db');
  const url = dbConfig && dbConfig.uri ? dbConfig.uri : LOCAL_DEV_MONGO_URL;
  return url.replace('+srv', '');
}

function getMailOptions(): MailOptions {
  let mailOptions = cfenv.getAppEnv().getServiceCreds('geolud-mailservice');
  if (!mailOptions) {
    mailOptions = {
      host: 'localhost',
      port: '587',
      username: '',
      password: '',
      to: 'icke@localhost',
    };
  }
  return mailOptions;
}
