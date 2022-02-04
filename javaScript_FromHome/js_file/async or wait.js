console.log("Asyn /or wait");
//You will understand after seeing the result. See where the console is printing

async function func() {                      //async --> return the promise
    console.log('In side the function');

    const response = await fetch('https://api.github.com/users');       // wait the promises or async . wait for other too complete work and again it do its work
    console.log('Before response');

    const users = await response.json();
    console.log('user resolved');
    return users;

    // return 'anish';
}

console.log('Before calling the function');
let a = func();
console.log('After calling function');
console.log(a);                             // print the promise
a.then(data => console.log(data));
console.log('Last line of the function');