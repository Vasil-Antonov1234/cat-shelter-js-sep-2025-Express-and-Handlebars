import Cat from "../models/Cat.js";


export default {
    async getAll(filter) {
        const result = await Cat.find(filter);

        return result;
    },

    getCatById(catId) {
        return Cat.findOne({_id: catId});
    },


    create(catData) {
        return Cat.create(catData);
    },

    update(catId, newCatData) {

        const cat = new Cat(newCatData);

        cat.save({_id: catId});

        return cat;
    },


    addBreed(newBreed) {
        Cat.addBreed(newBreed);
    }
}
