import postgres from 'postgres';
import { DatabaseConfigurations } from './env';

const connectionString = DatabaseConfigurations.DATABASE_URL;


const sql = postgres(connectionString, {
    host: DatabaseConfigurations.HOST_NAME,
    port: Number.parseInt(DatabaseConfigurations.PORT),
    database: DatabaseConfigurations.DATABASE_NAME,
    username: DatabaseConfigurations.USERNAME,
    password: DatabaseConfigurations.DB_PASSWORD,
});

export default sql;
