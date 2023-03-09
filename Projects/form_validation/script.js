const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const password = document.getElementById('password')
const jobSelect = document.getElementById('job')
const messageTextArea = document.getElementById('message')


//Validação
form.addEventListener('submit', (event) => {
    event.preventDefault()

    // verifica se o nome está vazio
    if (nameInput.value === ''){
        alert('Por favor, preenhca o seu nome!')
        return
    }

    // se o e-email está preenchido e se é válido
    if (emailInput.value === '' || !isEmailValid(emailInput.value)){
        alert('Por favor preencha seu email')
        return
    } 

    // verificar se a está preenchido
    if (){

    }

    // verifica se todos os commpos estão corretamente preenchidos
    form.submit()
})

//_________________________________________________________________________________________________________

// Criação de funções
// Função que valida email
function isEmailValid(email) {
    // cria uma regex para validar email
    const emailRegex = new RegExp(/^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-Z]{2, }$/)
    if (emailRegex.test(email)) {
        return true
    }

    return false
}


// função para validação de senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits){
        // valid password
        return true 
    }

    // invalid password
    return false
}