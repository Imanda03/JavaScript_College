console.log('Hello')


let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', buttonClickHandel);


function buttonClickHandel(){
    console.log('You have click the fetch button')

    //Instanatiate an xhr oject
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET','anish.txt',true)
}