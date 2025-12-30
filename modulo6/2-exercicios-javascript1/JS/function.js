
function contar() {
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('steps')
    var res = document.getElementById('res')

    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
    }
}