import fs from "fs/promises";

const dataJSON = await fs.readFile("./data/data.json");
export const data = JSON.parse(dataJSON);
export const cats = data.cats;