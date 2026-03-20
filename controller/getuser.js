import db_connection from "../config/db.js"
const db=db_connection();
const getUser=async(req,res)=>{
const query="SELECT userid,name,email FROM users";
db.query(query,(err,results)=>{
    if(err){
        console.error("Error fetching users : ",err);
        return res.status(500).json({message:err.message})
    }
    res.status(200).json({
        message:"Users fetched successfully ",
        users:results
    })
})
}
export default getUser