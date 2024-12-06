import pkg from "pg";
import dotenv from "dotenv";

const { Pool } = pkg;
dotenv.config();
export const pool = new Pool({
    allowExitOnIdle: true,
});

try {
    await pool.query("SELECT NOW()");
    console.log(`Database connected: ${process.env.PGDATABASE}`);
} catch (error) {
    console.log("Error connecting to database:", error);
}
