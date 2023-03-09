let num = [5, 7, 2, 9, 4,]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso array tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)
let i = num.indexOf(7)

if(i == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${i}`)
 }


/*for(let i=0; i<=num.length; i++){
    console.log(num[i])
}*/