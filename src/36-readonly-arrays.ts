// type ReadOnlyNumberArray = Readonly<number[]>;
// const arrayOfNumbers: ReadOnlyArray = [1, 2, 3, 4, 5];
// const arrayOfNumbers2: number[] = [1, 2, 3, 4, 5];

// arrayOfNumbers2[2] = 100;
// arrayOfNumbers[2] = 100;
// console.log(arrayOfNumbers);

// Storing by value
// let myName = "John";
// let newName = myName;
// myName = "Dzenan";

// console.log("Original Name: ", myName);
// console.log("New Name: ", newName);
// --------------------------------------------------------------
// Storing by reference (arrays and objects)

// const originalObject = { name: "TS" };
// console.log(originalObject);
// console.log(`▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼`);
// const copyObject = originalObject;
// copyObject.name = "JS";

// console.log(copyObject);
// console.log(originalObject);
// --------------------------------------------------------------
// const numberArr: ReadonlyArray<number> = [10, 30, 50, 70];
// console.log(numberArr);

// // numberArr.push() // Property 'push' does not exist on type 'readonly number[]'.
// // numberArr.sort() // Property 'sort' does not exist on type 'readonly number[]'.

// // properties that dont change array are allowed
// console.log(numberArr.indexOf(50));
// console.log(numberArr.length);

// const stringArr: ReadonlyArray<string> = ["Hello", "Im", "Dzenan"];
// console.log(stringArr.length);
