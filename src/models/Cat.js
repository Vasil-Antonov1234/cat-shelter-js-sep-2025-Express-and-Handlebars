import { model, Schema, Types } from "mongoose";

const catSchema = new Schema({
    name: String,
    imageUrl: String,
    description: String,
    breed: String
});

const Cat = model("Cat", catSchema);



export default Cat;