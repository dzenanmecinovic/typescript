/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
What will the function invocation result in?
*/

// function addition(n: number): number {
//   return n + n;
// }
// const result: (n: number) => string = addition;
/*  Type '(n: number) => number' is not assignable to type '(n: number) => string'.
    Type 'number' is not assignable to type 'string'. */
// result(11);

// function types se ne poklapaju, a nakon toga return types se ne poklapaju.
