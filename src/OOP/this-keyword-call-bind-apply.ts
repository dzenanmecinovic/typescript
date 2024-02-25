// // common usage of 'this' keyword is using within call bind and apply methods.

// const person = {
//   objFunc(): void {
//     console.log("Object\n", this);
//     // 'this' keyword is usually called within a function but it refers to a object
//   },
// };

// person.objFunc();
// // ------------------------------------------------------
// class Test {
//     classFunc(): void {
//         console.log("Class", this);
//     }
// }

// let test = new Test();
// test.classFunc();
// // ------------------------------------------------------
// function addition(): void {
//   console.log("Function", this); // error(in strict mode), there is no object. (without strict mode) window object
// }

// function addition(a: number, b: number): void {
//   console.log("Function", this, a + b); // error(in strict mode), there is no object. (without strict mode) window object
// }

// addition.call({ name: "John" }, 2, 2);
// addition.apply({ name: "John" }, [10, 32]);

// let operation1 = addition.bind({ name: "John" }, 25, 35);
// let operation2 = addition.bind({ name: "John" }, 250, 350);
// operation1();
// operation2();
