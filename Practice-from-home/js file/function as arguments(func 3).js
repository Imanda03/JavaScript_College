function callThreeTime(func){           // This function can call the other two function
    func();                             // In concole type : callThreeTime(alsoMe) for output
    func();
    func();
}

function passMe(){
    console.log('I am passed.');
}

function alsoMe(){
    console.log('I am also passed.');
}




/* here function call the other function as argument or paramenters */



//Function returning a function

function mul (num){
    return function(a){
        return a * num;
    }
}
const triple = mul(3);
console.log(triple(5));
const double = mul(2);
console.log(double(6));



function fu (firstNum,lastNum){
    return function(number){
        return number >= firstNum && number <=lastNum;
    }
}
const range = fu(0,50);
console.log(range(5));
console.log(range(55))

//In arrow function
const fun = (a,b) =>{
    return (numb) => {
        return numb >=a && numb <=b;
    }
}
const ran = fun(0,50);
console.log(ran(50));