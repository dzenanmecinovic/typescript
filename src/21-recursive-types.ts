type NestedArray = number | NestedArray[]; // recursive (calling itself)

// we are nesting array
// const brojevi: NestedArray = [1,2];
// const brojevi: NestedArray = [1, [2, 3, 4]];
// const brojevi: NestedArray = [1, [2, 3, [4]]];
// const brojevi: NestedArray = [1, [2, 3, [4, 5, [6]]]];
// const brojevi: NestedArray = [1, [2, 3, [4, 5, [6, 7, 8, [9]]]]];
const brojevi: NestedArray = [1, [2, 3, [4, 5, [6, 7, 8, [9, [10]]]]]];
/*  it doesn't matter how many levels you go deep,
    it's always gonna work because this is a recursive type. */
