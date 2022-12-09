const printName = () =>{
    const helloName = "Hello John";
    
    return inner = () =>{
        return helloName;
    }
}

const callName = printName()();

console.log(callName)

 