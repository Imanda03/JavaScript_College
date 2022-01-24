// Hoisting is a JavaScript technique which moves variables and 
// function declarations to the top of their scope before code execution begins. 
// Within a scope no matter where functions or variables are declared, 
// they're moved to the top of their scope.


//funtion declaration
//we can call before and after making function

function greeting(){
    console.log('GoodMorning!');
}

greeting();


//function expression
//We cannot call before making function

const speak = function(){
    console.log('I am speaking');
}
speak();

//function scope 

/* Scope determines the accessibility (visibility) of variables.
JavaScript has 3 types of scope:
1. Block scope

2. Function scope: Variables defined inside a function are not accessible (visible) 
from outside the function.  Variables declared with var, let and const are quite 
similar when declared inside a function.
Example:  function myFunction() {
  var carName = "Volvo";   // Function Scope
}

3. Global scope */

function info(){
    let name = 'Earth';
    const age = 39;
    var color = 'blue'
}
// console.log(color);          //this is wrong. We cannot get output

let animal = 'cat';
function animals(){
    let animal = 'dog';
    console.log(animal);
}
console.log(animal);


// Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript.

//block scope
if(true){
    let domasticAnimal = 'cow';     //chnge to var 
    console.log(domasticAnimal);    // this will print in both var and let 
}
// console.log(domasticAnimal);       //this will print in var but donot print in let


let collectionAnimals = ['cat','dog','cow']
let i = 10;
for(i = 0; i<collectionAnimals.length; i++){
    console.log(i,collectionAnimals[i]);
}

console.log(collectionAnimals[1]);      // to print the animalo  of index 1