
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
  
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >=0 && hora < 12){
        // good morning
        img.src = './assets/morning.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora <= 18) {
        // good evening
        img.src = './assets/afternoon.png'
        document.body.style.background = '#b9846f'
    } else {
        // good night
        img.src = './assets/night.png'
        document.body.style.background = '#515154'
    }
}