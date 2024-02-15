/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
What is the result of the second variable assignment?
*/

/* Do not comment in unless answered

let vague1: boolean | undefined = true ? true : undefined;
let vague2: boolean = vague1;
*/

/* vague1 prihvata boolean i undefined, ako je true onda je vrednost true,
ako nije true onda je undefined, a vague2 prihvata samo boolean,
i u slucaju kada je vague1 undefined, vague2 ne moze da prihvati undefined
i zato se javlja Type Error */
