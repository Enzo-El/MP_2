function submitForm(){
    var firstname = document.getElementById('fName').value;
    var lastname = document.getElementById('lName').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var province = document.getElementById('province').value;
    var municipality = document.getElementById('city').value;
    var barangay = document.getElementById('barangay').value;
    var address = document.getElementById('address').value;

    var password = document.getElementById('password').value;
    var confirm = document.getElementById('cPassword').value;

    var file = document.getElementById('proof');

    // This is the Checkbox for TermsAndCondition/PrivacyPolicy
    // Value of the Checkbox is: "accepted"
    var checkBox = document.getElementById('agree').value;

}