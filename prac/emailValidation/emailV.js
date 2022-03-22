const email = document.querySelector('.email');
const form = document.querySelector('.form');
const feedback = document.querySelector('.para')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let em = email.value;
    
    let atIndex = em.indexOf('@');
    let dotIndex = em.lastIndexOf('.');

    if(atIndex < 1 || dotIndex >= em.length - 2 || dotIndex - atIndex < 3){
        feedback.textContent = 'Email is invalid'
    }
    else{
        feedback.textContent = 'Email is valid'
    }
    
})