function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <= 12) {
        //Bom dia
        img.src = 'IVA/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora > 12 && hora < 18) {
        //Boa tarde
        img.src = 'IVA/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        img.src = 'IVA/noite.png'
        document.body.style.background = '#515154'
    }
}