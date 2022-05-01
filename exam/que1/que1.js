function validate() {    
    var fname = document.getElementById("fullName");    
    var company = document.getElementById("cname");    
    var email = document.getElementById("email");  
    var mobile = document.getElementById("mobile");  
    var country = document.getElementById("country"); 
    var gender = document.getElementById("gender");   
    var language = document.getElementById("language");   
    var tick = document.getElementById("tick");
    
    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (company.value.length <= 0) {    
        alert("company is required");    
        company.focus();    
        return false;    
    }  
    // if (email.indexOf('@') < 1 || email.lastIndexOf(".") >= (email.length - 2) || (email.lastIndexOf(".") - emailValue.indexOf('@')) < 3) {    
    //     alert("Email is required");    
    //     email.focus();    
    //     return false;    
    // }    
    if (country.value.length <= 0) {    
        alert("country Id is required");    
        email.focus();    
        return false;    
    }    
    if (gender.checked) {  
        gender = true;   
    }  else{
            alert("Gender is required!")
    }  
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }    
    if (language.checked) {    
        language = true;  
    }    else{
        alert("Language is required!!")
    }
    if (tick.checked) {  
        tick = true;   
    }  else{
            alert("Tick the terms and conditions")
    } 
    const emailV = (email) => {
        let emailValue = email
        let atIndex = emailValue.indexOf('@');
        let dotIndex = emailValue.lastIndexOf(".");
        if (atIndex < 1 || dotIndex >= (emailValue.length - 2) || (dotIndex - atIndex) < 3) {
            return false;
        } else {
            return true;
        }
    }
 }