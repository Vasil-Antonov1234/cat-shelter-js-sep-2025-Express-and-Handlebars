import { model, Schema, Types } from "mongoose";

const catSchema = new Schema({
    name: {
        type: String,
        required: [true, "Cat name is required!"],
        minLength: [2, "Name is too short!"],
        match: [/^[A-Za-z\-]+$/, "Name has some invalid characters!"]
    },
    imageUrl: {
        type: String,
        required: [true, "Cat image is required!"],
        match: [/https?:\/\/.+/, "Cat imageUrl is invalid!"]
    },
    description: {
        type: String,
        required: [true, "Cat description is required!"],
        minLength: [20, "Description is too short!"],
        match: [/[A-Za-z0-9\.\!\?\,\-\"]+$/, "Description has some invalid characters!"]
    },
    breed: {
        type: String,
        required: [true, "Cat breed is required!"]
    },
    creator: {
        type: Types.ObjectId,
        ref: "User",
        required: [true, "Cat post should have a creator!"]
    }
});

const Cat = model("Cat", catSchema);



export default Cat;