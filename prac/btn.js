// let btn = document.getElementById('btn');

// btn.addEventListener('click',()=>{
    //     alert('You have been click message');
    // })
    
    // Incresing the number on click
    let displayElem = document.querySelector('#increase');
    let incrElem = document.querySelector('#btn');
    let decrElem = document.querySelector('#btn2');
    let count = 0;

    updateDisplay();

    incrElem.addEventListener('click',()=>{
        count++;
        updateDisplay();
    });

    decrElem.addEventListener('click',()=>{
        count--;
        updateDisplay();
    });

    function updateDisplay(){
        displayElem.innerHTML = count;
    }

    let reset = document.querySelector('#reset');

    reset.addEventListener('click',()=>{
        count = 0;
        updateDisplay();
    })
