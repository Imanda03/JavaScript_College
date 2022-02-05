console.log("Regular expression");

//g indicate for global flag. When we have multiple same name then it helps to find all
let regular = /Anish/g;                  //This is regular expression literal in javascript  
let reg = /THIS/i;                     // i mean case insensitive -> no mater what is has in lowerCase or upperCaase it will match
let regg = /hard/
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

let result2 = reg.exec(s);

if (result2) {
    console.log(result2);
    console.log(result2.index);              //--> It will show only index wheresult2 it has match
    console.log(result2.input);              // --> It will show the input only
}

//  2 .test()  --> return true or false
let result3 = regg.test(s);
console.log(result3);                   // ----> This will print true if regg is there in a string 's'


// 3 .match --> It will return array of results or null
// let result4 = regg.match(s);   --> This is wrong
let result4 = s.match(regg);      //  --> This is right
console.log(result4);

//  4. search()    ---->return index of first match else -1

// let result5 = reg.search(s);             --> This is wrong
let result5 = s.search(regg);                // --> This is correct
console.log(result5);


// 5 .replace()         ------> this will replaced the elements in the string which is matched
// we dont give global flag then it will only replace first match other will not be replace

let result6 = s.replace(regg,'very hardly');
console.log(result6);