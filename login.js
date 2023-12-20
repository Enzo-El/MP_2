var storedUser = localStorage.getItem("username");
var storedPass = localStorage.getItem("password");
var storedUserType = localStorage.getItem("usertype");
var storedFname = localStorage.getItem("firstname");

var username = JSON.parse(storedUser);
var password = JSON.parse(storedPass);
var usertype = JSON.parse(storedUserType);
var firstname = JSON.parse(storedFname);

let userRes = document.getElementById("userRespo");
let passRes = document.getElementById("passRespo");

async function scanUser() {
  let accInput = document.getElementById("email").value;
  let passInput = document.getElementById("password").value;

  for (let i = 0; i < username.length; i++) {
    num1 = username[i];
    num2 = password[i];
    num3 = usertype[i];
    num4 = firstname[i];

    if (num1 === accInput || num2 === passInput) {
      verify(num1, num2, num3, num4);
      break;
    } else {
      passRes.innerText = "Account doesn't exist";
    }
  }
}

function verify(USERNAME, PASSWORD, USERTYPE, NAME) {
  let accInput = document.getElementById("email").value;
  let passInput = document.getElementById("password").value;

  userRes.innerText = "";
  passRes.innerText = "";

  if (USERNAME === accInput && PASSWORD === passInput) {
    if (USERTYPE == "admin") {
      window.location.href = "adminPage.html";
      localStorage.setItem("name", NAME);
    } else {
      window.location.href = "userPage.html";
      localStorage.setItem("name", NAME);
    }
  } else if (USERNAME === accInput && PASSWORD !== passInput) {
    passRes.innerText = "Password incorrect";
  } else if (USERNAME !== accInput && PASSWORD === passInput) {
    userRes.innerText = "Username incorrect";
  }
}

function access() {
  let accInput = document.getElementById("email").value;
  let passInput = document.getElementById("password").value;

  userRes.innerText = "";
  passRes.innerText = "";

  if (accInput == "" && passInput == "") {
    userRes.innerText = "Please enter Username";
    passRes.innerText = "Please enter Password";
  } else if (accInput == "" && passInput !== "") {
    userRes.innerText = "Please enter Username";
  } else if (accInput !== "" && passInput == "") {
    passRes.innerText = "Please enter Password";
  } else {
    scanUser();
  }
}

// -------------------------------------------
function reveal() {
  let password = document.getElementById("password");
  let icon = document.getElementById("icon");
  password.type = "text";
  icon.classList.remove("bi-eye-slash-fill");
  icon.classList.add("bi-eye-fill");
}

function unreveal() {
  let password = document.getElementById("password");
  password.type = "password";
  icon.classList.remove("bi-eye-fill");
  icon.classList.add("bi-eye-slash-fill");
}
// -------------------------------------------
