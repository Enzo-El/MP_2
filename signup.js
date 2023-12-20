function submitUserForm() {
  var firstname = document.getElementById("fName").value;
  var lastname = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("contact").value;
  var province = document.getElementById("province").value;
  var municipality = document.getElementById("city").value;
  var barangay = document.getElementById("barangay").value;
  var address = document.getElementById("address").value;

  var username = document.getElementById("username").value;
  var password = document.getElementById("pWord").value;
  var confirm = document.getElementById("cPword").value;

  var file = document.getElementById("proof");

  // This is the Checkbox for TermsAndCondition/PrivacyPolicy
  // Value of the Checkbox is: "accepted"
  var checkBox = document.getElementById("agree").value;
}

function validateInputs() {
  var contact = document.getElementById("contact").value;
  var parsedContact = parseInt(contact);
  var lengthContact = contact.length;

  var inputs = document.querySelectorAll("input");
  var selects = document.querySelectorAll("select");
  var isValid = true;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      input.style.borderColor = "#cf1f1f";
      isValid = false;
    } else {
      input.style.borderColor = "#c0c0c0";
    }
  });

  selects.forEach(function (select) {
    if (select.value === "") {
      select.style.borderColor = "#cf1f1f";
      isValid = false;
    } else {
      select.style.borderColor = "#c0c0c0";
    }
  });

  if (isValid) {
    if (parsedContact > 0 && lengthContact < 12) {
      accountSignUp();
    } else {
      alert("contact number invalid");
      document.getElementById("contact").style.borderColor = "#cf1f1f";
    }
  }
}

function accountSignUp() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pWord").value;
  var confirm = document.getElementById("cPword").value;
  var type = document.getElementById("submit").value;
  var fname = document.getElementById("fName").value;

  var storedUser = localStorage.getItem("username");
  var storedPass = localStorage.getItem("password");
  var storedType = localStorage.getItem("usertype");

  var storedFname = localStorage.getItem("firstname");
  //Users Login credentials
  var existingUser = JSON.parse(storedUser) || [];
  var existingPass = JSON.parse(storedPass) || [];
  var existingType = JSON.parse(storedType) || [];
  //--------------------

  //Users Personal Infos
  var existingFname = JSON.parse(storedFname) || [];
  //--------------------
  var charactersUser = username.length;
  var charactersPass = confirm.length;

  if (charactersUser < 8) {
    alert("Please enter 8 character username");
  } else if (charactersPass < 8) {
    alert("Please enter 8 character password");
  } else if (password !== confirm) {
    alert("Password not matched");
  } else {
    existingUser.push(username);
    existingPass.push(confirm);
    existingType.push(type);

    existingFname.push(fname);

    localStorage.setItem("username", JSON.stringify(existingUser));
    localStorage.setItem("password", JSON.stringify(existingPass));
    localStorage.setItem("usertype", JSON.stringify(existingType));

    localStorage.setItem("firstname", JSON.stringify(existingFname));

    alert("Signed Up successfully");
    location.reload();

    console.log(existingUser);
    console.log(existingPass);
  }
}
