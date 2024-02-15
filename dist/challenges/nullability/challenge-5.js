"use strict";
function processString(input) {
    if (input === undefined) {
        return undefined;
    }
    else if (!isNaN(parseInt(input))) {
        return parseInt(input);
    }
    else {
        return undefined;
    }
}
console.log(processString("123asd"));
console.log(processString("asd"));
console.log(processString(undefined));
