let mixedData: (string | number)[] = ["Cosmos", 13, 50, "Star"];

// for (let item of mixedData.entries()) console.log(item[0], item[1]);

for (let [index, item] of mixedData.entries())
  console.log(`${index + 1} - ${item}`);
