import db_connection from "../config/db.js";
const db=db_connection()
const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required" });
  }

  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error("Error inserting user:", err);
      return res.status(500).json({ message: err.message });
    }

    res.status(201).json({
      message: "User created successfully",
      user: { id: results.insertId, name, email },
    });
  });
};
export default registerUser
