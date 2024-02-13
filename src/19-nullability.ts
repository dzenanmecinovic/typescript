// a type 'undefined' can only accept a value of 'undefined'

let notSure1: undefined = undefined;
// let notSure2: undefined = null; err
// let notSure3: undefined = 123; err
// let notSure4: undefined = "hey"; err

let notSure5: undefined | number = 5;
// karakter | je unija (union type). radi kao logicki 'ILI' operator u JS

let notSure6: undefined | number = undefined;

let notSure7: undefined | number = null; // not assignable to number|undefined
