import { Router } from "express";
import catService from "../services/catService.js";
import breedService from "../services/breedService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const catController = Router();

catController.get("/add-cat", isAuth, async (req, res) => {
    const breeds = await breedService.getAll();

    res.render("cats/addCat", { breeds });
});

catController.post("/add-cat", isAuth, async (req, res) => {
    const catData = req.body;
    const userId = req.user.id;
    const breeds = await breedService.getAll();

    try {
        await catService.create(catData, userId);
        res.redirect("/");
    } catch (error) {
        const errorMessage = getErrorMessage(error);
        res.status(400).render("cats/addCat", { error: errorMessage, cat: catData, breeds });
    };
});

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

    const cats = await catService.getAll({ name: searchQuery });

    res.render("home", { cats, searchQuery });
})

catController.get("/:catId/details", isAuth, async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getCatById(catId);

    // const isCreator = req.user?.id && cat.creator == req.user.id;
    const isCreator = cat.creator && cat.creator.equals(req.user?.id);

    // console.log(cat.creator)
    // console.log(req.user)
    res.render("cats/details", { cat, isCreator });
})

catController.get("/:catId/delete", isAuth, async (req, res) => {
    const catId = req.params.catId;
    const cat = await catService.getCatById(catId);

    if (cat.creator && cat.creator.equals(req.user?.id)) {
        await catService.deleteCat(catId);
    }

    res.redirect("/");
})

function getCatBreedViewData(selectedBreed) {

    const breeds = [
        { value: "Bombay Cat", label: "Bombay Cat" },
        { value: "Persian Cat", label: "Persian Cat" },
        { value: "Siamese Cat", label: "Siamese Cat" },
        { value: "Fluffy Cat", label: "Fluffy Cat" },
        { value: "American Shorthair", label: "American Shorthair" }
    ];

    const viewData = breeds.map((breed) => ({ ...breed, selected: selectedBreed === breed.value ? "selected" : "" }));
    return viewData;
}

export default catController;
