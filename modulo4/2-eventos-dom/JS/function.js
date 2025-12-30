/*1a Parte da aula*/
/* Evento 1- HTML
var area = document.getElementById('area')
function clicar() {
    var area = document.getElementById('area')
    area.innerText = 'Clicou!'
    area.style.background = 'red'
}

function entrar() {
    area.innerText = 'Entrou!'
}

function sair() {
    area.innerText = 'Saiu!'
    area.style.background = 'green'
}
*/

/*Evento 2- JS
var area = document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.innerText = 'Clicou!'
    area.style.background = 'red'
}

function entrar() {
    area.innerText = 'Entrou!'
}

function sair() {
    area.innerText = 'Saiu!'
    area.style.background = 'green'
}
*/

/*2a Parte da aula*/

function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var  res = document.getElementById('res')
    var n1 = Number.parseInt(tn1.value)
    var n2 = Number.parseInt(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}