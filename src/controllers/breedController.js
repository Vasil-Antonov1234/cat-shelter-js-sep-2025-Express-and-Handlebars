import { Router } from "express";
import breedService from "../services/breedService.js";

const breedController = Router();



breedController.get("/add-breed", (req, res) => {
    res.render("addBreed");
});


breedController.post("/add-breed", (req, res) => {
    const newBreed = req.body;

    breedService.create(newBreed);

    res.redirect("/");
});

export default breedController;