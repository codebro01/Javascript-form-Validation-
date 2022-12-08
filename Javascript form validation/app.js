const form = document.getElementById('s-form');
const firstName = document.getElementById('s-firstname');
const lastName = document.getElementById('s-lastname');
const email = document.getElementById('s-email');
const password = document.getElementById('s-password');
const cPassword = document.getElementById('s-cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

let checkInputs = () => {
    const firstnameValue = firstName.value.trim();
    const emailValue= email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();


    if(firstnameValue === '') {
        setErrorFor(firstName, 'Firstname cannot be blank')
    } else {
        setSuccessFor(firstName)
    }

    if(firstnameValue === '') {
        setErrorFor(lastName, 'Lastname cannot be blank')
    } else {
        setSuccessFor(lastName)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is invalid')
    } else {
        setSuccessFor(email)
    }
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccessFor(password)
    }
    if(cPasswordValue === '') {
        setErrorFor(cPassword, 'Password comfirmation cannot be blank')
    } else if(passwordValue !== cPasswordValue) {
        setErrorFor(cPassword, 'Password does not match')
    } else {
        setSuccessFor(cPassword)
    }
}

let setErrorFor = (input, message) => {
    const formField = input.parentElement;
    const small = formField.querySelector('small');

    small.innerText = message;

    formField.className = 'form-field error';

    setTimeout(() => {
        small.innerText = '';
        formField.classList.remove('error')
    }, 5000)

}

let setSuccessFor = (input) => {
    const formField = input.parentElement;
    formField.className = 'form-field success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}