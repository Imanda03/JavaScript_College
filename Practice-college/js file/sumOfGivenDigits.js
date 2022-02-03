var sum = 0;
var numb = prompt('Enter to sumber your number');
while(numb>0){
    sum+=numb%10;
    numb = numb/10;
}

console.log('The sum of the '+numb+' is '+sum);