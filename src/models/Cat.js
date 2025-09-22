import fs from "fs/promises";
import { v4 as uuid } from "uuid";


let dbSerialized = await fs.readFile("src/data.json", { encoding: "utf-8" });
let db = JSON.parse(dbSerialized);

export default class Cat {

    constructor(data) {
        Object.assign(this, data);

        this._id = uuid();
    }


    static find(filter = {}) {
        let result = db.cats.slice();

        if (filter.search) {
            result = result.filter((cat) => cat.name.toLowerCase().includes(filter.search.toLowerCase()));
        };
        
        

        return result;
    }



    static findOne(filter = {}) {
        let result = db.cats[0];

        if (filter._id) {
            result = db.cats.find((cat) => cat._id === filter._id);
        }

        return result;
    }

    static findBreed() {
        let result = db.breeds.slice();

        return result;
    }

    async save(filter = {}) {

        if (filter._id) {
            let result = db.cats.slice();
            result = result.filter((cat) => cat._id !== filter._id);

            db.cats = result;
        }

        db.cats.push(this);

        const dbSerialized = JSON.stringify(db, null, 2);

        await fs.writeFile("./src/data.json", dbSerialized);

        return this;
    }

    static async addBreed(newBreed) {
        db.breeds.push(newBreed);

        const dbSerialized = JSON.stringify(db, null, 2);

        await fs.writeFile("./src/data.json", dbSerialized);

        return newBreed;
    }
    
}
