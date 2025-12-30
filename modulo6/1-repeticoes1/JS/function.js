/* Repetições \/
function comerPizza() {
    while(temFatia()) {
        comerFatia()
    }
}
*/

/* Modo errado
console.log('tudo safe?')
console.log('tudo safe?')
console.log('tudo safe?')
console.log('tudo safe?')
console.log('tudo safe?')
console.log('tudo safe?')
*/

/*Modo correto \/

var c = 1
while(c <= 6) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
} //c > 6 faz o código parar
*/

/*Tipos de teste lógico

Teste lógico no inicio
var c = 1
while(c <= 6) {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}

Testo lógico no final
var c = 1
do {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
} while(c <= 6)
*/