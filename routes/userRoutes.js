import express from "express";
import registerUser from "../controller/registerUser.js";
import getUser from "../controller/getuser.js";
import deleteUser from "../controller/deleteUser.js";
import updateUser from "../controller/updateuser.js";

const router = express.Router();

router.post("/users", registerUser);
router.get("/users", getUser);
router.patch("/users/:id",updateUser)
router.delete("/users/:id", deleteUser);

export default router;
