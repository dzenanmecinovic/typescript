// let image: HTMLImageElement | null = document.querySelector(".img");
// /* ILI null znaci da nekad mozemo pogresno uzeti neki element u DOM
// u tom slucaju bice null */

// function unBlurImage(this: HTMLImageElement) {
//   this.classList.add("unblur");
// }

// // optional chaining ==> 'image' is possibly 'null'.
// image?.addEventListener("mouseover", unBlurImage);

// // ?. it's not gonna check for null value

// image?.addEventListener("mouseleave", function (this: HTMLImageElement) {
//   this.classList.remove("unblur");
// });
