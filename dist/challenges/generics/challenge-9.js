"use strict";
function lengthArr(elements) {
    return elements.length;
}
console.log(lengthArr([1, 2, 3, 1, 2, 3, 4, 2, 1]));
console.log(lengthArr([1, 2, 3, 1, "@#", "Hello"]));
console.log(lengthArr(["@#", "Hello", false]));
