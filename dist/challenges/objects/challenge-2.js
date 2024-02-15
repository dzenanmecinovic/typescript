"use strict";
let myCourse = {
    name: "TS Bootcamp",
    platform: "Udemy",
    features: ["Practical", "Exercise Oriented", "Modern TS Concepts"],
    "meta-data": {
        published: true,
    },
};
console.log(myCourse["meta-data"]["published"]);
console.log(myCourse["meta-data"].published);
