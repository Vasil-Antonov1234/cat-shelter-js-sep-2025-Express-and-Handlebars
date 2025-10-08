import { Router } from "express";
import catService from "../services/catService.js";
import breedService from "../services/breedService.js";
import { isAuth } from "../middlewares/authMiddleware.js";


const catController = Router();

catController.get("/add-cat", isAuth, async (req, res) => {
    const breeds = await breedService.getAll();

    if (req.isAuthenticated) {
        console.log(req.user.email);
    }

    res.render("cats/addCat", { breeds });
});

catController.post("/add-cat", isAuth, async (req, res) => {
    const catData = req.body;
    const userId = req.user.id;
    
    await catService.create(catData, userId);

    res.redirect("/");
})


catController.get("/:catId/edit", async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getCatById(catId);

    const breedsViewData = getCatBreedViewData(cat.breed);

    res.render("cats/editCat", { cat, breeds: breedsViewData })
});

catController.post("/:catId/edit", async (req, res) => {
    const catId = req.params.catId;
    const catData = req.body;
    
    await catService.update(catData, catId);


    res.redirect(`/cats/${catId}/details`);
})

catController.get("/search", async (req, res) => {
    const searchQuery = req.query.text;

    const cats = await catService.getAll({name: searchQuery});
    
    res.render("home", { cats, searchQuery });
})

catController.get("/:catId/details", isAuth, async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getCatById(catId);

    
    res.render("cats/details", { cat });
})

catController.post("/:catId/details", isAuth, async (req, res) => {
    const catId = req.params.catId;

    await catService.deleteCat(catId);

    res.redirect("/");
})



function getCatBreedViewData(selectedBreed) {

    const breeds = [
        { value: "Bombay Cat", lable: "Bombay Cat" },
        { value: "Persian Cat", lable: "Persian Cat" },
        { value: "Siamese Cat", lable: "Siamese Cat" },
        { value: "Fluffy Cat", lable: "Fluffy Cat" },
        { value: "American Shorthair", lable: "American Shorthair" }
    ];

    const viewData = breeds.map((breed) => ({...breed, selected: selectedBreed === breed.value ? "selected" : ""}));
    return viewData;
}

export default catController;
