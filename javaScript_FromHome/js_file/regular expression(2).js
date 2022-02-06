//Metacharacters in js
console.log('Regular Expression 2');

let regX = /anish/;

//Lets have a looks on a metaCharacters
regX = /[^anish]/           //   ^ --> This mean string will match if started with bo is in string

regX = /[d$]/               // $ --> This mean sring will match if it has in the string ended with d
regX = /[an.ish]/             // . --> This mean there can be one character between an and ish if there is it will match
regX = /[an*ish]/           // * --> This will match 0 or more than 1 characters
regX = /[an?is?h]/           // ? --> Question masrk after character mean it is optional.

let str = "There is boy name anish who is working very hard";

let result = regX.exec(str);
console.log("The result is ",result);

if(regX.test(str)){
    console.log(`${regX.source} is in the ${str}`);
}else{
console.log(`${regX} isn't in the ${str}`);
}
