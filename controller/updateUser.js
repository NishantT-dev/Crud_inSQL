import db_connection from "../config/db.js";
const db = db_connection();
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }
  if (!name && !email && !password) {
    return res.status(400).json({
      message: "At least one field (name, email, password) must be provided",
    });
  }
  const query = "UPDATE users SET name=?,email=? WHERE userid=?";
  db.query(query, [name, email, id], (err, results) => {
    if (err) {
      console.error("Error updating user", err.message);
      return res.status(500).json({ message: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(500).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User Updated Successfully",
      user: { id, name, email },
    });
  });
};
export default updateUser;
