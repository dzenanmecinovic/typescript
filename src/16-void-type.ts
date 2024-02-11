// void type is the opposite of the 'any' type.
// void indicates lack of the type.
// the void type is going to be referred by typescript when the func returns nothing.

function printHello() {
  console.log("Hello");
}
// since this function doesn't return anything
// typescript is going to refer that it's void type
// printHello();

let productCategory: string;

let shoppingCart = (category: string): void => {
  productCategory = category;
};

/* in JAVASCRIPT!! whenever we don't return anything 
from a function, the function returns undefined.
that's the rule in JAVASCRIPT!! */

console.log(shoppingCart("Tech"));

// in TypeScript when function doesn't retun anything, it
// returns void

// void fundamentally means 'undefined';

let movieName: void =
  undefined; /* The only value void type variable accepts its gonna be UNDEFINED */
