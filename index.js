import express from "express";

import handlebars from "express-handlebars";
import { cats } from "./data/dataService.js";

const app = express();

app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home", { cats });
})

app.get("/cats/add-cat", (req, res) => {
    res.render("addCat");
})

app.get("/cats/add-breed", (req, res) => {
    res.render("addBreed");
})

app.listen(5000, () => console.log("Server is listening on http://localhost:5000...")); 