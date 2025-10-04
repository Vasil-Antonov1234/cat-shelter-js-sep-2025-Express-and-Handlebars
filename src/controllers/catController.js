import { Router } from "express";
import catService from "../services/catService.js";
import breedService from "../services/breedService.js";


const catController = Router();


catController.get("/add-cat", async (req, res) => {
    const breeds = await breedService.getAll();
    res.render("addCat", { breeds });
});

catController.post("/add-cat", async (req, res) => {
    
    
    await catService.create(req.body);

    res.redirect("/");
})


catController.get("/:catId/edit", async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getCatById(catId);


    res.render("editCat", { cat })
});

catController.post("/:catId/edit", async (req, res) => {
    const catId = req.params.catId;
    const newCatData = req.body;
    catService.update(catId, newCatData);


    res.redirect("/");
})

catController.get("/search", async (req, res) => {
    const searchQuery = req.query.text;

    const cats = await catService.getAll({name: searchQuery});
    
    res.render("home", { cats, searchQuery });
})

catController.get("/:catId/details", async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getCatById(catId);
    
    res.render("catShelter", { cat });
})

export default catController;
