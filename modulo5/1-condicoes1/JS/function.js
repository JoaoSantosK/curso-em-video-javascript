/* EX008
var vel = 60.5

console.log(`A velocidade do seu carro é ${vel} Km/h`)
if(vel > 60) {
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}
console.log('Diriga sempre usando cinto de segurança!')
*/

/* EX009
var pais = 'EUA'
console.log(`Vivendo em ${pais}`)

if (pais == 'Brasil') {
    console.log('Brasileiro.')
}else {
    console.log('Estrangeiro.')
}
*/

function calcular() {
    var txtv = document.getElementById('txtvel')
    var vel = Number(txtv.value)
    var res = document.getElementById('res')
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}Km/h</strong>`
    res.innerHMTL += `<p>Dirija sempre com cinto de segurança!</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você está <stron>MULTADO</stron> por excesso de velocidade!</p>`
    }
}