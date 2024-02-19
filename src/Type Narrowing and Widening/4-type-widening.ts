// let proizvod = "TS";
// proizvod = "JS";

// let price = 10.99;
// price = 9.99;

/* ove varijacije i izmene vrednosti su dozvoljene u TS jer,
typescript ispod haube kada radimo ovakvu vrstu deklaracije radi nesto za nas,
sto se zove TYPE INFERENCE.

TYPE INFERENCE je veoma dobar za nas jer ne moramo da oznacavamo type svaku stvar,
mozemo samo da kazemo TYPESCRIPTU da on kontrolise Tipove i on ce to uraditi za nas.
Dokaz i primer za ovo jeste promenljiva proizvod ciji je tip TYPESCRIPT sam dodelio
toj promenljivoj, a to je 'let proizvod: string', isto tako za 
reinicijalizaciju 'let proizvod: string'. Takodje za promenljivu price, 'let price: number'.

To je ustvari Type Widening (prosirenje).
*/

//----------------------------------
type nekiProizvod = {
  name: "TS" /* type aliases cannot contain values, they can only contain types
  "TS" je Type, nije Value => (property) name: "TS" */;
  price: number;
};

function imeKursa(course: nekiProizvod) {
  return course.name;
}

const course = {
  name: "TS" as const, // "TS" je u ovom slucaju i Type i Value
  price: 10.99,
};

/* Argument of type '{ name: string; price: number; }' 
is not assignable to parameter of type 'nekiProizvod'.
Types of property 'name' are incompatible.

!!!!!!!!! Type 'string' is not assignable to type '"TS"' !!!!!!!!! */

console.log(imeKursa(course));
