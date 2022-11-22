import dotenv from "dotenv";
import pg from "pg";

function importData() {
    const client = new pg.Client({
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    }):
}