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