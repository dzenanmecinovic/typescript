////////////////////////////////////////////////////////////////////
// type Vague1 = "Hi" extends string ? true : false;    // true //
// type Vague2 = "Hi" extends any ? true : false;       // true //
// type Vague3 = "Hi" extends number ? true : false;    // false //
// type Vague4 = string extends "Hi" ? true : false;    // false //
// type Vague5 = 13 extends number ? true : false;      // true //
// type Vague6 = number extends 13 ? true : false;      // false //
// type Vague7 = number extends string ? true : false;  // false //
// type Vague8 = number extends any ? true : false;     // true //
// type Vague9 = string extends number ? true : false;  // false //
// type Vague10 = true extends boolean ? true : false;  // true //
// type Vague11 = true extends string ? true : false;   // false //
////////////////////////////////////////////////////////////////////
// type Vague1 = unknown extends any ? true : false; // true
// type Vague2 = never extends any ? true : false; // true
// type Vague3 = any extends any ? true : false; // true
// type Vague4 = void extends any ? true : false; // true
// type Vague5 = undefined extends void ? true : false; // true
// type Vague6 = undefined extends never ? true : false; // false
// type Vague7 = undefined extends unknown ? true : false; // true
// type Vague8 = null extends any ? true : false; // true
// type Vague9 = null extends never ? true : false; // false
// type Vague10 = never extends never ? true : false; // true
// type Vague11 = unknown extends never ? true : false; // false
// type Vague12 = string[] extends any[] ? true : false; // true
// type Vague13 = string[] extends string ? true : false; // false
// type Vague14 = string[] extends any ? true : false; // true
// type Vague15 = number[] extends any[] ? true : false; //  true
////////////////////////////////////////////////////////////////////
