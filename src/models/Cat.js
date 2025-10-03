import { model, Schema, Types } from "mongoose";

const catSchema = new Schema({
    name: String,
    imageUrl: String,
    description: String,
    breed: {
        type: Types.ObjectId,
        ref: "Breed"
    }
});

const Cat = model("Cat", catSchema);



export default Cat;