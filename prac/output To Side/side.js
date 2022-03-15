console.log('welcome');


const text1 = document.getElementById('text');
const btn = document.getElementById('button');
const out1 = document.getElementById('out1');
const out2 = document.getElementById('out2');
const out3 = document.getElementById('out3');
const out4 = document.getElementById('out4');
const radios = document.querySelectorAll('input[type=radio][name=gender]');
const check = document.querySelectorAll('input[type=checkbox][name=checkBox]');
const down = document.querySelectorAll('option[name=city]');

// console.log(radios);
radios.forEach(rad => {
    rad.addEventListener("click",func2)
});

// console.log(check);
check.forEach(check => {
    check.addEventListener('click',func3)
})

console.log(down);
console.dir(down)
down.forEach(choose =>{
    choose.addEventListener('click',func4)
})

function func1(e) {
    e.preventDefault();
    out1.innerHTML = text1.value;
}
function func2(e) {
    out2.innerText = e.target.value;
}
function func3(e) {
    out3.innerHTML = e.target.value;
}
function func4(e) {
    var select = document.getElementById("city").selectedIndex;
    out4.innerHTML = document.getElementsByTagName("option")[select].value;
}

btn.addEventListener('click', func1);
btn.addEventListener('click',func2)
btn.addEventListener('click',func3)
btn.addEventListener('click',func4)