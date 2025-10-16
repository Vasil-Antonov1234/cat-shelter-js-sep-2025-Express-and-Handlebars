import { Router } from "express";
import catService from "../services/catService.js";

const homeController = Router();



homeController.get("/", async (req, res) => {
    let cats = await catService.getAll();

    res.render("home", { cats });
})

homeController.get("/about", (req, res) => {
    res.render("about", { pageTitle: "CS About"});
})


export default homeController;