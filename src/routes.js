import { Router } from "express";

import homeController from "./controllers/homeController.js";
import catController from "./controllers/catController.js";



const routes = Router();

routes.use(homeController);
routes.use("/cats", catController);


routes.all("/*url", (req, res) => {
    res.render("404");
})

export default routes;