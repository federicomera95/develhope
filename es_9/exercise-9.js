const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const keys = Object.keys(person);

keys.forEach((e)=>{
  console.log(e+' : '+person[e]);
})
// Print values of person using Object.keys