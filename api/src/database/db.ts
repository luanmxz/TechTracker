// CONNECTION VIA POSTGRES

/*import 'dotenv/config'
import postgres from 'postgres';

const { DATABASE_URL, HOST_NAME, PORT, DATABASE_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

if (!DATABASE_URL || !HOST_NAME || !PORT || !DATABASE_NAME || !DB_USERNAME || !DB_PASSWORD) {
    throw new Error("Alguma variável de ambiente não está definida.");
}

const connectionString = DATABASE_URL;

const sql = postgres(connectionString, {
    host: HOST_NAME,
    port: parseInt(PORT, 10),
    database: DATABASE_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
});

export default sql;
*/
