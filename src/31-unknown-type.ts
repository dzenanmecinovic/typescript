// let someStr: unknown = "Hey";
// let percentage: unknown = 25;

// let otherNum: number = percentage; // Type 'unknown' is not assignable to type 'number'

// ----------------------------------------------
// let percentage: unknown = 25;
// let percentage: unknown = "25";
// let otherNum: number = typeof percentage === "number" ? percentage : 10;

// console.log(otherNum);
// ----------------------------------------------
// let kurs: any = "TypeScript";
// let cenaKursa: number = kurs;

// console.log(cenaKursa);
// console.log(kurs);
// ----------------------------------------------
// let kurs: unknown = "TS";
// let cenaKursa: any = kurs;
// // any moze da bude dodeljena unknown i obratno
// console.log(coursePrice);
// ----------------------------------------------
// NOT RECOMMENDED
// let kurs: unknown = "TS";
// let cenaKursa: any = kurs;
// let price: number = cenaKursa;
// console.log(price);
// ----------------------------------------------
// RECOMMENDED
// let kurs: any = "TypeScript";
// let cenaKursa: unknown = kurs;
// // let price: number = cenaKursa; // Type 'unknown' is not assignable to type 'number'
// let price: number = typeof cenaKursa === "number" ? cenaKursa : 9.99;
// console.log(price);
// ----------------------------------------------
// Unknown absorbs the union type
// let kurs: unknown | string = "TypeScript";
// let hleb: string = kurs;

// let kurs: string = "TypeScript";
// let hleb: unknown | string = kurs;

// ----------------------------------------------
// Unknown will be absorbed by the intersection type
// let kurs: unknown & string = "TypeScript";

// let kurs: unknown & string = "25";
// let hleb: string = kurs;
