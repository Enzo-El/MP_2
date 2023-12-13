let userRes = document.getElementById('userRespo');
let passRes = document.getElementById('passRespo');

function scanUser(){
    for(let i = 0; i < username.length; i++){
        let num1 = username[i];
        let num2 = password[i];
        verify(num1, num2);
    }
}

function verify(USERNAME, PASSWORD){
    let accInput = document.getElementById('email').value;
    let passInput = document.getElementById('password').value;

    userRes.innerText = '';
    passRes.innerText = '';

    if (USERNAME === accInput && PASSWORD === passInput){
        window.location.href = 'index.html';
    }else if(USERNAME !== accInput && PASSWORD !== passInput){
        userRes.innerText = 'Username incorrect';
        passRes.innerText = 'Password incorrect';       
    }else if(USERNAME === accInput && PASSWORD !== passInput){
        passRes.innerText = 'Password incorrect';       
    }else{
        userRes.innerText = 'Username incorrect';
    }
}

function access(){
    let accInput = document.getElementById('email').value;
    let passInput = document.getElementById('password').value;

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
        scanUser();
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
// -------------------------------------------