import express from "express";
import { getUser } from "../controllers/user.js";

//indica que é uma rota
const router = express.Router();

router.get("/", getUser);



export default router;