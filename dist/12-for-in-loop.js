"use strict";
let data = ["Cosmos", 13, 50, "Star"];
for (let dataPoint in data) {
    console.log(`${+dataPoint + 1} - ${data[dataPoint]}`);
}
