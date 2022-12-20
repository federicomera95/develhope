
function printAsyncName(callback, string) {
    setTimeout(callback, 1000);
    setTimeout(()=> console.log(string),2000);
}

printAsyncName(()=> console.log("Hello"), "Federico");

//la callback è un arrow function in questo caso perchè abbiamo bisogno di una funzione anonima, 
//che ritorna automaticamente e che ci faccia risparmiare codice superfluo