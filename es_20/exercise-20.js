class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  pgreco = 3.141592;
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  
  static calculate(figure){
    let result;
    if(figure instanceof Square)  result = (figure.side*figure.side);
    if(figure instanceof Rectangle) result = (figure.width*figure.height);
    if(figure instanceof Circle) result = (figure.pgreco*(figure.radius*figure.radius));

    return result = Math.round(result);
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));