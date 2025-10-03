import Breed from "../models/Breed.js";

export default {
    create(newBreed) {
        return Breed.create(newBreed);
    }
}
