const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = 'Simon';

//questo è successo in quanto oggetto person due si è copiato il riferimento,
// il puntatore su person1 condividendo entrambi lo stesso riferimento,
//cambiano la prorietà di uno cambierà necessariamente la proprietà dell'altro,
// in quanto in memoria sono allocati gli stessi riferimenti

console.log(person1);
console.log(person2);
