import express from "express";

import handlebars from "express-handlebars";

const app = express();

app.engine("hbs", handlebars.engine());
app.set("view engine", "hbs");



app.get("/", (req, res) => {
    res.send("Home page");
})

app.listen(5000, () => console.log("Server is listening on http://localhost:5000..."));