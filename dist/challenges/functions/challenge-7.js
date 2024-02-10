"use strict";
function tupleChall(arr) {
    return arr.map(([name, _]) => name);
}
console.log(tupleChall([
    ["Prvi", 20],
    ["Drugi", 18],
    ["Treci", 32],
]));
