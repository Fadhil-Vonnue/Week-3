// -------------------------greet----------------------------
function greet(name, greeting = "Hello") {
  console.log(greeting + " " + name);
}

const greet1 = function (name, greeting = "Hello") {
  console.log(greeting + " " + name);
};

const greet2 = () => {
  console.log(greeting + " " + name);
};
const greet3 = (name, greeting = "Hello") => {
  console.log(greeting + " " + name);
};

const obj = {
  greet(name, greeting = "Hello") {
    console.log(greeting + " " + name);
  },
};
let name = "John Doe";
let greeting = "Hello";
greet(name);
greet1(name);
greet2(name, greeting);
greet3(name);
obj.greet(name);

// ----------------------calculator-------------------------
const calculator = {
  add(a, b) {
    console.log(a + b);
  },
  sub(a, b) {
    console.log(a - b);
  },
  mult(a, b) {
    console.log(a * b);
  },
  div(a, b) {
    if (b === 0) {
      console.log("Divide by zero error");
    } else {
      console.log(a / b);
    }
  },
};
let a = 20;
let b = 10;
let c = 0;
calculator.add(a, b);
calculator.sub(a, b);
calculator.mult(a, b);
calculator.div(a, b);
calculator.div(a, c);

// --------------------------------------MultiplierFactor-----------------------
const createMultiplier = (factor) => {
  return function (num) {
    return num * factor;
  };
};

console.log(createMultiplier(3)(7) === 21);

// --------------------------Arguments Object vs Rest parameters----------------------

// Argument Objects
function greets(name, greeting = "Hello") {
  console.log(arguments);
}
greets(name, "Hello");

//Rest parameters

function greets1(...greetss) {
  console.log(greetss);
}
greets1("John Doe", "Hello");

//Arguments Object with arrow function

const greets2 = (name, greeting = "Hello") => {
  console.log(arguments);
};
greets2("John Doe", "Hi");

//Rest parameters with arrow function
const greets3 = (...params) => {
  console.log(params);
};
greets3("John Doe", "Hi");

/*An Arrow function expression is an alternative to a normal
 function expression, with some semantic differences and intentional limitations in usage 
 and they don't have their own bindings to arguments.*/
