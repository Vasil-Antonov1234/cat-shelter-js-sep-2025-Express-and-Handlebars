import { Router } from "express";
import catService from "../services/catService.js";


const catController = Router();


catController.get("/add-cat", (req, res) => {
    res.render("addCat");
});

catController.get("/add-breed", (req, res) => {
    res.render("addBreed");
});

catController.post("/add-cat", async (req, res) => {
    await catService.create(req.body);

    res.redirect("/");
})


catController.get("/:catId/details", async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getCatById(catId);


    res.render("editCat", { cat })
});

catController.post("/:catId/details", async (req, res) => {
    const catId = req.params.catId;
    const newCatData = req.body;
    catService.update(catId, newCatData);


    res.redirect("/");
})

export default catController;