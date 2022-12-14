let helloName = '';

function printName(){
     this.helloName = "Hello John";
    
    function inner(){
        setTimeout(() => {
            console.log(this.helloName);
        }, 1000); 
    }

    return inner;
}

printName()();

 