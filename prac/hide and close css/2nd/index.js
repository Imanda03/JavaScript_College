// Google Keep      --> To save the link


const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const feedback1 = document.querySelector('.feedback1');

form.addEventListener('submit',e =>{
    e.preventDefault();

    const phone = form.phone.value;
    const username = form.username.value;
    const usernamePattern = /^[a-z A-z]{6,12}$/;
    const forNumber = /[0-9]{10}$/
    
    if(usernamePattern.test(username)){
        feedback.textContent = 'This username is valid';
    }
    else{
        feedback.textContent = 'username is not valid';
    }

    if(forNumber.test(phone)){
        feedback1.textContent = 'phone number is valid';
    }
    else{
        feedback1.textContent = 'Phone number must be 10 length';
    }
    
    
});