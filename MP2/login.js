// id should be "email" for username input and "password" for password

// For the meantime functionality of LoginPage
var userAcc = 'admin';
var userPass = 'admin';

function access(){
    let accInput = document.getElementById('email').value;
    let passInput = document.getElementById('password').value;

    let userRes = document.getElementById('userRespo');
    let passRes = document.getElementById('passRespo');

    userRes.innerText = '';
    passRes.innerText = '';

    if(accInput == "" && passInput == ""){
        userRes.innerText = 'Please enter Username';
        passRes.innerText = 'Please enter Password';
    }else if(accInput == "" && passInput !== ""){
        userRes.innerText = 'Please enter Username';
    }else if(accInput !== "" && passInput == ""){
        passRes.innerText = 'Please enter Password';
    }else{
        if(accInput !== userAcc && passInput !== userPass){
            userRes.innerText = 'Username incorrect';
            passRes.innerText = 'Password incorrect';
        }else if(accInput !== userAcc){
            userRes.innerText = 'Username incorrect';
        }else if(passInput !== userPass){
            passRes.innerText = 'Password incorrect';
        }else{

            //Insert the Landing page of Admin/User here
            window.location.href =  "index.html";

        }        
    }
    

}
// -------------------------------------------
function reveal(){
    let password = document.getElementById('password');
    let icon = document.getElementById('icon');
    password.type = 'text';
    icon.classList.remove('bi-eye-slash-fill');
    icon.classList.add('bi-eye-fill');
}

function unreveal(){
    let password = document.getElementById('password');
    password.type = 'password';
    icon.classList.remove('bi-eye-fill');
    icon.classList.add('bi-eye-slash-fill');
}