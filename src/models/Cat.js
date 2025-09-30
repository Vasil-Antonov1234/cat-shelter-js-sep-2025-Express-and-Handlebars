import { model, Schema } from "mongoose";

const catSchema = new Schema({
    name: String,
    breed: String,
    imageUrl: String,
    description: String
});

const Cat = model("Cat", catSchema);



export default Cat;