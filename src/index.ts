import { loadGameData } from "./data/index.js";

const data = await loadGameData();
console.log(JSON.stringify(data, null, 2));
