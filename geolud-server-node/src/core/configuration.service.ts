import * as cfenv from 'cfenv';

import * as parseMongoUrl from '../../node_modules/mongodb/lib/url_parser';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { Project } from '../projects/project.entity';

const LOCAL_DEV_MONGO_URL = 'mongodb+srv://geolud:geolud@localhost:27017/geolud-dbConfig?retryWrites=true';

export class ConfigurationService {

    public init(): AppConfig {
      return { dbConfig: this.getDbConfig(), mailConfig: this.getMailConfig() };
    }

    private  getDbConfig(): MongoConnectionOptions {
        const url = this.getMongoConnectionUrl();
        let config;
        parseMongoUrl(url, {}, (error, result) => {
            config = result;
        });
        return {
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
    }

    private getMailConfig(): MailConfig {
        let config = cfenv.getAppEnv().getServiceCreds('geolud-mailservice');
        if (!config) {
            config = {
                host: 'localhost',
                port: '587',
                username: '',
                password: '',
                to: 'icke@localhost',
            };
        }
        return config;
    }

    private getMongoConnectionUrl(): string {
        const dbConfig = cfenv.getAppEnv().getServiceCreds('geolud-dbConfig');
        const url = dbConfig && dbConfig.uri ? dbConfig.uri : LOCAL_DEV_MONGO_URL;
        return url.replace('+srv', '');
    }
}

interface MailConfig {
    host: string;
    port: string;
    username: string;
    password: string;
    to: string;
}

interface AppConfig {
    dbConfig: MongoConnectionOptions;
    mailConfig: MailConfig;
}