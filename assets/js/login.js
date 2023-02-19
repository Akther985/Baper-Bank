// step-1: add click event handelar with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
// step-2: get the email address inside the email input field
// always remember to used. value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value;
// step-3: get password
// 3.a: set id on the html element(name is = user-password)okkk
// 3.b:get the element
const passwordField = document.getElementById('user-password');
// 3.c: get the value from the element
const password = passwordField.value;

// DENGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
// STEP-4: VERIFY EMAIL AND PASSWORD
if(email === 'bokul@gmail.com' && password === 'bokul'){
    window.location.href = ' bank.html ';
}else{
    alert('invalid user jaw abar try koro')
}


})