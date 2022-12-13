const printName = () =>{
    const helloName = "Hello John";
    
    function inner(){
        return helloName;
    }

    return inner;
}

const callName = printName()();

console.log(callName)

 