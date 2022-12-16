// Class definition
class Person {

    constructor(firstname,lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
    }
}


const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);
