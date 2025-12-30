/*
window.document.write(window.document.charset); //Desatualizado e risco ao site
document.body.innerHTML += document.characterSet; //Jeito mais correto e atual

document.body.innerHTML += window.document.URL; //Para pegar a URL do site
*/

/*
var corpo = document.body;
var p1 = document.getElementsByTagName('p')[1];

console.log(p1.textContent) //Mostra no console

document.writeln(p1.textContent) //Mostra como el HTML

p1.style.color = 'blue'

corpo.style.backgroundColor = '#ccc';

document.writeln(p1.innerHTML)
*/

/*
var d = document.getElementById('msg')
d.style.backgroundColor = 'green'
d.innerText = 'Estou aguardando...'
*/

//var d = window.document.getElementsByName('msg')[0]
//d.innerText = 'Olá'

//var e = document.getElementsByClassName('msg')[0]
//e.innerText = 'HAHA'

var f = document.querySelector('div#msg')
var g = document.querySelectorAll('p')
f.style.color = 'red'
console.log(g[1].textContent)