"use strict";
function addOrSubstract(num, base) {
    return base === true ? num + 1 : num - 1;
}
console.log(addOrSubstract(5, true));
console.log(addOrSubstract(5, false));
