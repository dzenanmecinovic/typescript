type FuncType<T> = (elements: Array<T> /* ili T[] */) => number;

let getArrayLength: FuncType<number | string> = (elements) => {
  return elements.length;
};

console.log(getArrayLength([1, 2, 3, 3, 4, 5, "Hello"]));
