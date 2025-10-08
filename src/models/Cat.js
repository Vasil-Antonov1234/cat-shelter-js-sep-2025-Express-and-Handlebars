import { model, Schema, Types } from "mongoose";

const catSchema = new Schema({
    name: String,
    imageUrl: String,
    description: String,
    breed: String,
    creator: {
        type: Types.ObjectId,
        ref: "User"
    }
});

const Cat = model("Cat", catSchema);



export default Cat;