let buttons = document.querySelectorAll('button');
let value = document.getElementById("value");
let count = 0;

function increase(){
    count++;
    display();
}
function decrease(){
    count--;
    display();
}
function reset(){
    count = 0;
    display();
}
function display(){
    value.innerHTML=count;
}

buttons.forEach(function (btn) {
    btn.addEventListener('click',function(e){
        const id = e.currentTarget.attributes.id.value;
        id === "btn"?increase(): id === "btn2"?decrease():reset();
    })
})