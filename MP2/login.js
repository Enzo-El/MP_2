// id should be "email" for username input and "password" for password

// For the meantime functionality of LoginPage
var userAcc = 'admin';
var userPass = 'admin';

function access(){
    let accInput = document.getElementById('email').value;
    let passInput = document.getElementById('password').value;

    if(accInput == "" && passInput == ""){
        alert("Please enter your Username and Password");
    }else if(accInput == "" && passInput !== ""){
        alert("Please enter your Username");
    }else if(accInput !== "" && passInput == ""){
        alert("Please enter your Password");
    }else{
        if(accInput !== userAcc && passInput !== userPass){
            alert("Username and Password incorrect");
        }else if(accInput !== userAcc){
            alert("Username incorrect");
        }else if(passInput !== userPass){
            alert("Password incorrect");
        }else{

            //Insert the Landing page of Admin/User here
            window.location.href =  "index.html";

        }        
    }
    

}
// -------------------------------------------