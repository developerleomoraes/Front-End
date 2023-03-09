// function expression
/*const sum = function(num1, num2) {
    const total = num1 + num2
    return total
}

let number1 = 34
let number2 = 54

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`O resultado é ${sum(number1, number2)}`)
*/

/*let subject = 'create video'

function creatThink(subject) {
    subject = 'study'
    return subject
}


console.log(creatThink(subject))
console.log(subject)*/

/*
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const leo = new Person('Leo')
const tutti = new Person('Tutti')
console.log(leo.walk())
console.log(tutti.walk())
*/


//Prototype

//Type conversion vs type coersion

/*let word = 'Paralelepipedo'
console.log(word.length)
let number = 3423
console.log(String(number).length)*/

/*
let number = 345.453453451
console.log(Number(number.toFixed(2)))

let word = 'Programar é muito bacana'
console.log(word.toLowerCase())

let phrase = 'Eu to suave focado na carreira'
let myArray = phrase.split(' ') // de string para um array
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore.toLocaleLowerCase())
*/

/*
let phrase = 'Verificando se tem uma coisa nesse texto'
console.log(phrase.includes('teste'))
*/

// Criando uma array com o construtor
//let myArray = new Array(10)
//console.log(myArray)


//console.log(['a', 'b', 'c'].length)


//let word = 'manipulação'
//console.log(Array.from(word))

// Manipulação de array

/*
let techs = ['html', 'css', 'js']
Adiconado um item no fim do array
techs.push('nodejs')
Adicionando um item no começo do array
techs.unshift('sql')
Removendo um item no fim
techs.pop()
Removendo no começo
techs.shift()
console.log(techs.slice(1, techs.length))
let index = techs.indexOf('css')
techs.splice(index, 1)
console.log(techs)
*/


/*
Expressions and operators
let number = 1
console.log(true ? 'alo' : 'nada')
*/

/*função do New é criar um novo objeto
let date = new Date('2023.05.12')
console.log(date.__proto__)
*/

/*
const person = {
    name: 'Leo',
    age: 26
}

delete person.age
console.log(person)
*/

/*
console.log(3.3 * 5)
console.log(12 / 2)
console.log(34 + 34.2)
console.log(334 - 65)

let remainder
remainder = 11 % 4
console.log(remainder)

let increment
increment = 0
console.log(++increment)

// exponencial **
console.log(3 ** 2)
*/

let one = 1
let two = 2

console.log(one === '1')