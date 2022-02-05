console.log("Regular expression");

//g indicate for global flag. When we have multiple same name then it helps to find all
let regular = /Anish/g;                  //This is regular expression literal in javascript  
let reg = /THIS/i;                     // i mean case insensitive -> no mater what is has in lowerCase or upperCaase it will match
console.log(regular);
console.log(regular.source);


let s = 'This is the string done by Anish and Anish is trying hard';
// Function to match expression
// 1. exec -> this function will return an array for match or null for no match

let result = regular.exec(s);
console.log(result);
// result = regular.exec(s);
// console.log(result)
// result = regular.exec(s);       --> We can use multiple exec using global flag
// console.log(result)

let re = reg.exec(s);
console.log(re);
console.log(re.index);              //--> It will show only index where it has match
console.log(re.input);              // --> It will show the input only

