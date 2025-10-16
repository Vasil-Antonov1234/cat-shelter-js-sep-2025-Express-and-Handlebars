import { Router } from "express";
import breedService from "../services/breedService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const breedController = Router();

breedController.get("/add-breed", isAuth, (req, res) => {
    res.render("cats/addBreed");
});

breedController.post("/add-breed", isAuth, async (req, res) => {
    const newBreed = req.body;

    try {
        await breedService.create(newBreed);

        res.redirect("/");
    } catch (error) {
        const errorMessage = getErrorMessage(error);

        res.status(400).render("cats/addBreed", { error: errorMessage, newBreed });
    }
});

export default breedController;
