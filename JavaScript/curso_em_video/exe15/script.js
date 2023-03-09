function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', './assets/menino.png')        //crianca
            } else if (idade <21) {
                img.setAttribute('src', './assets/jovem_homem.png')   //jovem
            } else if (idade > 21) {
                img.setAttribute('src', './assets/homem_adulto.png')  //adulto
            } else {
                img.setAttribute('src', './assets/idoso_m.png')       //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.png')                 //crianca
            } else if (idade <21) {
                img.setAttribute('src', './assets/jovem_mulher.png')  // jovem
            } else if (idade > 21) {
                img.setAttribute('src', './assets/mulher_adulta.png') //adulto
            } else {
                img.setAttribute('src', './assets/idosa_m.png')       //idoso
            }
        }
        
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}