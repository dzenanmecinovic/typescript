"use strict";
function peti(broj, operacija) {
    if (operacija === "add") {
        return broj + 1;
    }
    else if (operacija === "subtract") {
        return broj - 1;
    }
    else
        return broj;
}
console.log(peti(24, "subtract"));
