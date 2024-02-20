/* Interfejsi u TypeScriptu su način da se definiše struktura objekta ili klase, određujući koje će metode ili svojstva biti prisutni.
    Oni omogućavaju proveru tipova prilikom korišćenja objekata ili klasa, čime pomažu u smanjenju grešaka tokom razvoja.
    Interfejsi se koriste za deklarisanje oblika podataka bez implementacije, čime pružaju jasnu specifikaciju
    kako bi se omogućilo dosledno korišćenje tipova u TypeScriptu. */

// blueprint of an object ( or an instance of a class )

// type Zaposleni = {
//   readonly id: number;
//   name: string;
//   hobbies: string[];
// };

// // convert type to interface

// interface Zaposleni {
//   readonly id: number;
//   name: string;
//   hobbies: string[];
// }

/* --------- difference between a type alias and an interface --------- */

// interface can only provide a type for an object
// that object can be an object literal or an instance of a class
// interfaces just deal with objects
// ---------------------------------------------------------------
/* type aliases could provide types for anything */
// type name = string;
// type price = number;

// // creating object from 'Zaposleni' interface

// function informacijeZaposlenog(
//   id: number,
//   name: string,
//   hobbies: string[]
// ): Zaposleni {
//   return { id: id, name: name, hobbies: hobbies };
// }

// let radnik1: Zaposleni = informacijeZaposlenog(0, "Dzenan Mecinovic", [
//   "GYM, Reading",
// ]);

// console.log(radnik1);
