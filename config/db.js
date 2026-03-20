import mysql from "mysql2"
import dotenv from "dotenv";
dotenv.config();
function db_connection(){

const db = mysql.createConnection({
  host:process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
console.log(process.env.HOST, process.env.USER, process.env.PASSWORD, process.env.DATABASE);

db.connect((err) => {
  if (err) {
    console.error("Connection failed:", err.message);
  } else {
    console.log("Connected to MySQL database!");
  }
});

return db; 

}
export default db_connection