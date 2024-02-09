"use strict";
let mixedData = ["Cosmos", 13, 50, "Star"];
for (let [index, item] of mixedData.entries())
    console.log(`${index + 1} - ${item}`);
