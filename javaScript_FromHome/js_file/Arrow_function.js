console.log('Arrow function');

//Creating a regular function

// const anish = function(){
//     console.log('This is a simple function');
// }
// anish();


//Converting it to an arrow function

// const anish = () =>{
    // console.log('This is arrow function');
// }
// anish();


//Function returning something

// const greet = function (){
    // return "Good Mrorning"
// }
// console.log(greet());


//Arrow function returning someting

// const greet = () =>{
    // return "Good Morning"
// }
// console.log(greet());


//One line do not require brackets and return
//One line automatically return

// const greet =() => "Good Morning";
// console.log(greet());


//To return object

// const greet = () => ({name : 'Anish'});
// console.log(greet());


//Single parameters donot nees parenthesis like bracket

// const greet = (name) => ({name : "Anish"});
// console.log(greet());


//But you will have to put parenthesis if there  are multiple parameters

const greet = (name,end) => "Good Morning"+ name + end;
console.log(greet('Anish','Bye'))