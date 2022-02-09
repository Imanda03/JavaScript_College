var num1 = parseInt(prompt('Enter the first number'));
var num2 = parseInt(prompt('Enter the second number'))
document.write('The first number before swap:'+ num1 + '</br>');
document.write('The second number before swap:'+ num2 +'</br>');
num1 = num1+num2;
num2 = num1-num2;
num1 = num1-num2;

document.write('The value of first number after swap is '+num1 + '<br/>');
document.write('The value of second number after swap is '+ num2 + '<br/>');
console.log(num2);
