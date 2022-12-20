const number = 15;

function numberPromise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(number > 10){
                resolve(number)
            }else{
                reject(number)
            }
        }, 500);
        
    })
}

numberPromise()
    .then((number)=> console.log(`number ${number} is correct!`))
    .catch((number) => console.erro(`number ${number} is lower then 10`))