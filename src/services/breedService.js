import Breed from "../models/Breed.js";

export default {
    getAll() {
        return Breed.find();
    },
    getBreedById(breedId) {
        return Breed.findById(breedId);
    },
    create(newBreed) {
        return Breed.create(newBreed);
    }
}