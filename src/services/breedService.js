import Breed from "../models/Breed.js";

export default {
    getAll() {
        return Breed.find();
    },
    create(newBreed) {
        return Breed.create(newBreed);
    }

}