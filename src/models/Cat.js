import { model, Schema, Types } from "mongoose";

const catSchema = new Schema({
    name: {
        type: String,
        required: [true, "Cat name is required!"]
    },
    imageUrl: {
        type: String,
        required: [true, "Cat image is required!"]
    },
    description: {
        type: String,
        required: [true, "Cat description is required!"]
    },
    breed: {
        type: String,
        required: [true, "Cat breed is required!"]
    },
    creator: {
        type: Types.ObjectId,
        ref: "User"
    }
});

const Cat = model("Cat", catSchema);



export default Cat;