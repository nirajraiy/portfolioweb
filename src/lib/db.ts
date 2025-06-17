// src/lib/db.ts
import mysql from 'mysql2/promise';

let connection: mysql.Connection | null = null;

export const createConnection = async () => {
  if (!connection) {
    try {
      connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
      });
      console.log('✅ MySQL connected');
    } catch (err) {
      console.error('❌ MySQL connection failed:', err);
      throw err;
    }
  }
  return connection;
};
