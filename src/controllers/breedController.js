import { Router } from "express";
import breedService from "../services/breedService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const breedController = Router();



breedController.get("/add-breed", isAuth, (req, res) => {
    res.render("cats/addBreed");
});


breedController.post("/add-breed", isAuth, (req, res) => {
    const newBreed = req.body;

    breedService.create(newBreed);

    res.redirect("/");
});

export default breedController;