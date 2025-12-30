    /*
    var nome = prompt('QUal o seu nome?'); //Nome

    alert('É um grande prazer te conhecer, ' + nome + '!');
    */
   
    /*Jeito errado
    var n1 = prompt('Digite um número:');
    var n2 = prompt('Digite outro número:');
    var s = n1 + n2;
    alert(n1 + n2);
    */

    /*Para forçar números inteiros e flutuantes, cada um podendo ser utilizado em algo, como o Float que deve ser utilizado para representar valores bancários por exemplo.
    var n1 = Number.parseInt(prompt('Digite um número: '));
    var n2 = Number.parseFloat(prompt('Digite outro número: '));
    var s = n1 + n2;

    alert('A soma dos valores é: ' + s);
    */

    /* Conversão mais simples que serve para casos em que o Int e o Float podem ser usados juntos.
    var n1 = Number(prompt('Digite um número: '));
    var n2 = Number(prompt('Digite outro número: '));
    var s = n1 + n2;

    alert('A soma dos valores é: ' + s);
    */

    /*Usando concatenação atual do JavaScript
    var n1 = Number(prompt('Digite um número: '));
    var n2 = Number(prompt('Digite outro número: '));
    var s = n1 + n2;
    
    window.alert(`A soma entre ${n1} e ${n2} é ${s}!`);
    */

    /*
    var nome = window.prompt('Qual o seu nome?');
    //O método write é desencorajado a não ser que seja antes da página carregar
    //É possível utilizar tags no write
    document.write(`Seu nome tem <strong>${nome.length}</strong> letras!`);
    document.write(`Seu nome em letras maiúsculas é <strong>${nome.toUpperCase()}</strong>!`);
    document.write(`Seu nome em letras minúsculas é <strong>${nome.toLowerCase()}</strong>!`);
    */
    