import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const DataSourceConfig: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'uturismaya',
    password: 'TUR1SM4Y4$2024',
    database: 'turismayadb',
    entities: [__dirname + '/../models/*.model{.ts,.js}'],   
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
}

export const appDS = new DataSource(DataSourceConfig);