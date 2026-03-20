import dotenv from "dotenv"
import app from "./app.js";
import db_connection from "./config/db.js";
dotenv.config();
db_connection();

const PORT=process.env.PORT || 5000
console.log(
  process.env.HOST,
  process.env.USER,
  process.env.PASSWORD,
  process.env.DATABASE,
);

app.listen(PORT,()=>{
    console.log(` server is running on port ${PORT}`);
})