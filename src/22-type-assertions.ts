/* type assertions basically mean that we are trying
to tell TypeScript that we know more about a specific type
than what the TypeScript may infere.  */

type Employee = {
  id: number;
  name: string;
  dept: string;
};

const dzenan: Employee = {
  id: 1,
  name: "Dzenan",
  dept: "Software Development",
};
// to commit this object to localStorage I need to convert it into JSON string

const hiredEmployee = JSON.stringify(dzenan); // TS ne zna koji tip bi trebo da bude objekat koji je pretvoren u JSON format
// console.log(typeof hiredEmployee); // string
console.log(hiredEmployee);

// retrieving back from the local storage
function getEmployeeInfo(
  employeeObject: string
) /* function type is 'any' because TS does not know which type JSON format object should be, so we will let him know */ {
  // return JSON.parse(employeeObject);
  // stara metoda
  //
  //  return <Employee>JSON.parse(employeeObject);
  //
  /* sta god funkcija vraca, ona mora da se uskladi sa type aliasom
   koji je u ovom slucaju Employee. 
   Uostalom Employee tip je ono sto zelimo da dobijemo nazad. 
   To je tip objekta pre pretvaranja u JSON format. */

  // nova metoda
  //
  return JSON.parse(employeeObject) as Employee;
  //
} // sad type zna koji tip je u pitanju i vise ne vraca 'any'

console.log(getEmployeeInfo(hiredEmployee));
