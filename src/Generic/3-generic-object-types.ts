type Cover<T> = {
  front: T;
  back: T;
};

const bookCover: Cover<string> = {
  front: "Book name",
  back: "Author biography",
};

const bookCover2: Cover<number> = {
  front: 0,
  back: 1,
};

// -------
type Proizvod<T1, T2> = {
  ime: T1;
  cena: T2;
};

const klimaUredjaj: Proizvod<string, number> = {
  ime: "Klima 2024",
  cena: 200,
};

const Mikrotalasna: Proizvod<string, string> = {
  ime: "Mikrotalasna 2024",
  cena: "Not Available",
};

console.log(klimaUredjaj);
