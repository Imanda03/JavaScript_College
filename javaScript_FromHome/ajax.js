console.log('Hello')


let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandel);


function buttonClickHandel(){
    console.log('You have click the fetch button')

    //Instanatiate an xhr oject
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','anish.txt',true);

    //What to do in progress
    xhr.onprogress = function(){
        console.log('On progress');
    }

    //What to do when progress is ready
    xhr.onload = function (){
        console.log(this.responseText);
    }

    //Send the request
    xhr.send();
}