function multiplyByTwo(value) {
  let number = 2;

  function inner(){
    return number*value;
  }
  return inner;
}

const multiply = multiplyByTwo(4)();

console.log(multiply);