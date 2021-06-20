const loginForm = document.getElementById('login-form');
const loginSubmit = document.getElementById('submit');
const loginWarning = document.getElementById('warning');



loginSubmit.addEventListener('click',(e) =>{
   
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username ==="admin" && password ==="admin"){
       loginWarning.style.opacity = 0;
       disableForwardButton();

    }else{
        loginWarning.style.opacity = 1;
        e.preventDefault();
    }
})
