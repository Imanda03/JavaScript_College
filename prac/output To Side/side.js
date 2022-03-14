console.log('welcome');


const text1 = document.getElementById('text');
const btn = document.getElementById('button');
const output1 = document.getElementById('output');
const output2 = document.getElementById('output1');
const radio = document.querySelectorAll('.radio')

function func1() {
    output1.innerHTML = text1.value;
}
function func2() {
    output1.innerHTML = radio.value;
}

btn.addEventListener('click', func1, func2);