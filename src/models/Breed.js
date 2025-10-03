import { model, Schema } from "mongoose";

const breedSchema = new Schema ({
    breed: {
        type: String,
        require: [true, "Breed is required"]
    }
});

const Breed = model("Breed", breedSchema);

export default Breed;