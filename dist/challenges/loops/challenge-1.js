"use strict";
let searchHistory = [
    "how to make money online",
    "benefits of eating garlic",
    "html css tutorial",
    "calisthenics",
];
for (let searchItem of searchHistory)
    searchItem.includes("html") || searchItem.includes("css")
        ? console.log("Would you like to learn how to create websites for free?")
        : false;
