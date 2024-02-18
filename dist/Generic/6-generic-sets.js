"use strict";
let mySet = new Set([1, 2, 3]);
mySet.add(4);
console.log(mySet);
console.log(mySet.has(2));
let mixedSet = new Set(["Hi", 1]);
console.log(mixedSet);
console.log(mixedSet.size);
