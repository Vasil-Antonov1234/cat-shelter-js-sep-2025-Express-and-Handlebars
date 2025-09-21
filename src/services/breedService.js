import Cat from "../models/Cat.js";

export default {
    getAll() {
        return Cat.findBreed();
    }
}
