import { model, Schema } from "mongoose";

const breedSchema = new Schema ({
    breed: {
        type: String,
        required: [true, "Breed is required!"],
        minLength: [2, "Breed is too short!"]
    }
});

const Breed = model("Breed", breedSchema);

export default Breed;