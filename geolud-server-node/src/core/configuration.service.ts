import * as cfenv from 'cfenv';

import * as parseMongoUrl from '../../node_modules/mongodb/lib/url_parser';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { Project } from '../projects/project.entity';

const LOCAL_DEV_MONGO_URL = 'mongodb+srv://geolud:geolud@localhost:27017/geolud-dbConfig?retryWrites=true';

export class ConfigurationService {

    public init(): AppConfig {
      return { dbConfig: this.getDbConfig(), mailProperties: this.getMailConfig() };
    }

    private  getDbConfig(): MongoConnectionOptions {
        const url = this.getMongoConnectionUrl();
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

    private getMongoConnectionUrl(): string {
        const dbConfig = cfenv.getAppEnv().getServiceCreds('geolud-dbConfig');
        const url = dbConfig && dbConfig.uri ? dbConfig.uri : LOCAL_DEV_MONGO_URL;
        return url.replace('+srv', '');
    }

    private getMailConfig(): MailConfig {
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
    mailProperties: MailConfig;
}