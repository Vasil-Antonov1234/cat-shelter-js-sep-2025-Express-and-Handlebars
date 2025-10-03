import { Router } from "express";

import homeController from "./controllers/homeController.js";
import catController from "./controllers/catController.js";
import breedController from "./controllers/breedController.js";



const routes = Router();

routes.use(homeController);
routes.use("/cats", catController);
routes.use("/breeds", breedController);


routes.all("/*url", (req, res) => {
    res.render("404");
})

export default routes;