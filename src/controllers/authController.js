import { Router } from "express";
import authrService from "../services/authrService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get("/register", isGuest, (req, res) => {
    res.render("auth/register", { pageTitle: "CS Register"});
});

authController.post("/register", isGuest, async (req, res) => {
    const userData = req.body;

    try {
        const token = await authrService.register(userData);
        res.cookie("auth", token);
        res.redirect("/");
    } catch (error) {
        const errorMessage = getErrorMessage(error);

        res.render("auth/register", { error: errorMessage, user: userData });
    };

})

authController.get("/login", isGuest, (req, res) => {

    res.render("auth/login", { pageTitle: "CS Login"});
});

authController.post("/login", isGuest, async (req, res) => {

    try {
        const token = await authrService.login(req.body);
        res.cookie("auth", token);
        res.redirect("/");
    } catch (error) {
        const errorMessage = getErrorMessage(error);

        res.status(400).render("auth/login", { error: errorMessage, user: req.body});
    }


});

authController.get("/logout", isAuth, (req, res) => {
    res.clearCookie("auth");

    res.redirect("/");
})

export default authController;