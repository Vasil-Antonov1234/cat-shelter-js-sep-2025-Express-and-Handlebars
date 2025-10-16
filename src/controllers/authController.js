import { Router } from "express";
import authrService from "../services/authrService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get("/register", isGuest, (req, res) => {
    res.render("auth/register");
});

authController.post("/register", isGuest, async (req, res) => {
    const userData = req.body;

    try {
        const token = await authrService.register(userData);
        res.cookie("auth", token);
        res.redirect("/");
    } catch (error) {
        const errorMessage = Object.values(error.errors).at(0).message;
        res.render("auth/register", { error: errorMessage });
    };

})

authController.get("/login", isGuest, (req, res) => {

    res.render("auth/login");
});

authController.post("/login", isGuest, async (req, res) => {
    const token = await authrService.login(req.body);

    res.cookie("auth", token);

    res.redirect("/");
});

authController.get("/logout", isAuth, (req, res) => {
    res.clearCookie("auth");

    res.redirect("/");
})

export default authController;