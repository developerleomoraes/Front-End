// Buscando os elementos da árvore DOM

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')


// Adicionado evento

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})



// Criação de funções
function checkInputs() {
    const usarnameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    // name
    if (usarnameValue === ''){
        errorValidation(username, 'This field is required')
    }
     else {
        successValidation(username)
    }

    // email
    if (emailValue === ''){
        errorValidation(email, 'This field is required')
    } else {
        successValidation(email)
    }

    //password
    if (passwordValue === ''){
        errorValidation(password, 'This field is required')
    } else if (passwordValue.length < 8) {
        errorValidation(password, 'Password must be at least 8 characters long')
    } else {
        successValidation(password)
    }
        
    //passwordtwo
    if (passwordtwoValue === ''){
        errorValidation(passwordtwo, 'This field is required')
    } else if (passwordValue !== passwordtwoValue) {
        errorValidation(passwordtwo, 'Passwords must match')
    } else {
        successValidation(passwordtwo)
    }

    // Success alert
    if (usarnameValue !== '' && emailValue !== '' &&
        passwordValue !== '' && passwordtwoValue !== '' &&
        passwordValue === passwordtwoValue && passwordValue.length > 8){
            alert('Registration completed successfully!')
        }
}

//_______________________________________________________________

// Function declaration
// error function
function errorValidation(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = msg
    formControl.className = 'form-control error'
}

// success function
function successValidation(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

