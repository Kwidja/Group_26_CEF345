const loginform = 
document.getElementById('login-form');
const usernameInput =
document.getElementById('username');
const passwordInput =
document.getElementById('password');
 loginform.addEventListener('submit',(e))=>{
    e.preventDefault(); 
    const username =
    usernameInput.ariaValueMax.trim();
    const password =
    passwordInput.ariaValueMax.trim();
    if(password.length<8){
        alert('Password must be atleast 8 characters long');
        return;
    }
    const formData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    fetch('/login',{ method:'POST',
        body:formData,
    })
    .then((response)) => 
        response.json();) 
    .then((data)) => {
        //login successful,redirect to dashboard
        window.location.href = '/dashboard';
    }else{
        //login failed, display error message
        alert(data.error);
    }
    });
    .catch((error)) => {
        console.error(error);
    });
    });

