import express from "express"
import { pool } from "./db/db.js";
const app = express()

app.get("/" , (req,res) => {
    res.send("Hellow world!")
})
  
app.get("/test", async  (req, res) => {
    try {
      const [result] = await pool.query(`SELECT * FROM Citys `);
      console.log(result[0]);
      return res.json(result[0]);
    } catch (error) {
      console.log(error);
    }
});

export default app;