import { Router } from "express";
import authrService from "../services/authrService.js";

const authController = Router();

authController.get("/register", (req, res) => {
    res.render("auth/register");
});

authController.post("/register", async (req, res) => {
    const userData = req.body;

    await authrService.register(userData);
    res.redirect("/login");
})

authController.get("/login", (req, res) => {
   
    res.render("auth/login");
});

authController.post("/login", async (req, res) => {
    const token = await authrService.login(req.body);

    res.cookie("auth", token);

    res.redirect("/");
});

authController.get("/logout", (req, res) => {
    res.clearCookie("auth");

    res.redirect("/");
})


export default authController;