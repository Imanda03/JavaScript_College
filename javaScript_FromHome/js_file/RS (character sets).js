console.log("Character sets in regular expression");

//character sets - []
let regX = /a[nmi]ish/                // Can be n, m and i
regX = /a[a-z]ish/                // Can be from a to z
regX = /a[^nmi]ish/                // It mean it should not contain n, m and i betwwen them

// for capital letter we have to use A-Z capital letter

//Quantifiers - we use {}
 regX = /an{2}ish/                  // n must be there 2 time
 regX = /an{0,2}ish/                  // n can be either 0 or 1 or 2

 // Grouping - we use paranthesis for grouping()
regX = /(an){2}/

const str = "Hello ananish !"

if(regX.test(str)){
    console.log(`${regX.source} is in the ${str}`);
}else{
console.log(`${regX.source} isn't in the ${str}`);
}
