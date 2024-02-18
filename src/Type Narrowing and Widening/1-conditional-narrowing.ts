type Item = { productName: string };

// na objekat nema .length a array nema propertije,
// ako je objekat nek vrati productName, ako je array nek vrati duzinu.

function itemOrItems(item: Item | Item[]) {
  if (Array.isArray(item)) {
    // ako je niz
    return item.length;
  } else {
    // ako je objekat
    return item.productName;
  }
}
