import sql from 'mssql';

import dotenv from 'dotenv';
dotenv.config();


const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

let pool;

export async function getDbConnection() {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}

export { sql };
