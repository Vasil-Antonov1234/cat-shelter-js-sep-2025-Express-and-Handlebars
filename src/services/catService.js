import Cat from "../models/Cat.js";


export default {
    async getAll(filter = {}) {

        // let cats = await Cat.find();
        let query = Cat.find();

        if (filter.name) {
            query = query.find({ name: { $regex: filter.name, $options: "i"}});
            // cats.forEach((cat) => console.log(cat.name));
            // cats = cats.filter((cat) => cat.name.includes(filter.name));
        };

        return query;
    },
    
    getCatById(catId) {
        return Cat.findById(catId);
    },


    create(catData) {
        return Cat.create(catData);
    },

    update(catData, catId) {
        return Cat.findByIdAndUpdate(catId, catData);
    },


    addBreed(newBreed) {
        Cat.addBreed(newBreed);
    }
}
