/* *-*-*-*-*-*-*-*-*-*-* Challenge 7 ------------------
Extract the value “TS” from the following generic array
*/

// generic arr => "TS" value

let genericArr7: Array<Array<Array<Array<string | number>>>> = [
  [[[1, 2], ["C#"], ["JS", "Java"], ["HTML", "CSS", "TS"]]],
];

const TS = genericArr7[0][0][3][2];
console.log(TS);
