console.log('For each function');

const number = [20,30,40,10,5];
number.forEach(function(num){
    console.log(num*2);
});


console.log('another function');
printTriple = (n) =>{
    console.log(n * 3);
}

number.forEach(printTriple);


const numb = [20,30,40,10,5];
number.forEach(function(numm,index){
    console.log(numm + ' at '+ 'index: '+index);
});