const form = document.querySelector(".form");
const para = document.querySelector('.para');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let email = form.email.value;
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailValidation.test(email)){
        para.textContent = "This email is valid"
    }
    else{
        para.textContent = "This email is invalid"
    }
})