const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const personInfo = {...person};
const {id} = personInfo;

console.log(id, personInfo);