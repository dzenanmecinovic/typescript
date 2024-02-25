"use strict";
let image = document.querySelector(".img");
function unBlurImage() {
    this.classList.add("unblur");
}
image === null || image === void 0 ? void 0 : image.addEventListener("mouseover", unBlurImage);
image === null || image === void 0 ? void 0 : image.addEventListener("mouseleave", function () {
    this.classList.remove("unblur");
});
