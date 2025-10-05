import { Router } from "express";

const authController = Router();

authController.get("/register", (req, res) => {
    res.send("register");
});



export default authController;