/* for-in loops are used to return index of items from an array/tuple */

let data: (string | number)[] = ["Cosmos", 13, 50, "Star"];

for (let dataPoint in data) {
  //   console.log(dataPoint); // type => string, + == parseInt()
  //   console.log(+dataPoint); // type => string, + == parseInt()
  console.log(`${+dataPoint + 1} - ${data[dataPoint]}`);
}
