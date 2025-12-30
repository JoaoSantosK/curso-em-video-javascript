//pt1
//Condições simples e complexas


//pt2
//Condição aninhada

/*
var idade = 67
console.log(`Você tem ${idade} anos...`)

if(idade < 16) {
    console.log('Vota');
} else if(idade < 18 || idade >= 67){
        console.log('Voto opcional')
} else {
    console.log('Voto obritório')
}
*/

//Como pegar hora atual do relógio no js
/*
var agora = new Date()
var hora = agora.getHours()

if(hora < 12 && hora >= 6) {
    console.log('Bom dia')
}else if(hora <= 18 && hora >= 12) {
    console.log('Boa tarde')
} else if(hora <= 23 && hora > 18){
    console.log('Boa noite')
} else if(hora >= 24 || hora < 6){
    console.log('Boa madrugada')
}
*/
//Condição múltipla
//Tem um baixo uso devido ao seu nível de especificidade, mas muito útil em casos de multi valor

var agora = new Date()
var diaSem = agora.getDay()
/*
Domingo = 0
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 5
Sábado = 6
*/
//console.log(diaSem);

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
    default:
        console.log('[ERRO] Dia inválido')
        break
}