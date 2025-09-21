import Cat from "../models/Cat.js";


export default {
    getAll(filter) {
        return Cat.find(filter);
    },

    getCatById(catId) {
        return Cat.findOne({_id: catId});
    },


    create(catData) {
        const cat = new Cat(catData);

        cat.save();
        return cat;
    },

    update(catId, newCatData) {

        const cat = new Cat(newCatData);

        cat.save({_id: catId});

        return cat;
    }
}
