// // extract is used to extract the part of a type that we need
// // *exclude* is reverse

// type MixedTypes =
//   | "Hi"
//   | 666
//   | ["TS", "JS"]
//   | { name: "TS"; price: number }
//   | "Hey"
//   | { name: "JS"; price: number }
//   | 13
//   | { name: "Python"; price: 11.99 }
//   | [12, 13, 14, 15];

// type NotStrings = Exclude<MixedTypes, string>;
// type NotNumbers = Exclude<MixedTypes, number>;
// type NotTS = Exclude<MixedTypes, { name: "TS" }>;
// type NotPrice = Exclude<MixedTypes, { price: number }>;
// type NotEmptyArr = Exclude<MixedTypes, []>;
// type NotStringsArr = Exclude<MixedTypes, string[]>;
