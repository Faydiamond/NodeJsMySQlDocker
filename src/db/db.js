import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();


export const pool = createPool({
  host: "db",
  user: "daniel",
  password: "daniel",
  database: "testEx",
  port: 3306
});

pool.on("connection", () => console.log("DB Connected!"));