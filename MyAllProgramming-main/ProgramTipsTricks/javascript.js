|||||||||||||||||||||||||||||||||||||||||||

function calculateArea(radius) {
    return 3.14 * radius * radius;
  }

||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  }

  ||||||||||||||||||||||||||||||||||||||||||||||
  
  const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((num) => num * num);

  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');

  });


  
  // math.js
export function add(a, b) {
    return a + b;
  }

  // app.js
  import { add } from './math';
  console.log(add(2, 3)); // Outputs 5


  |||||||||||||||||||||||||||||||||||||||||||||||
  // Good variable and function naming
const numberOfUsers = 10;

function calculateArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

|||||||||||||||||||

try {
    // Code that may throw an error
    const result = someFunction();
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }


  