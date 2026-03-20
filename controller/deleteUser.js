import db_connection from "../config/db.js";
const db=db_connection();

const deleteUser=(req,res)=>{
    const{id}=req.params;

  if (!id) {
    return res.status(400).json({ message: "User ID is required" });
  }

  const query = "DELETE FROM users WHERE userid = ?";

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).json({ message: err.message });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
        message:"User Deleted Successfully",
        deletedUserId:id
    });
});
};
export default deleteUser