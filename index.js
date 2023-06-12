function primos(todos = 1000) {
    var primo = []

    for (var i = 1; i <= todos; i++) {

        if (verificarPrimo(i)) {
            primo.push(i);
        }

    }
    console.log(primo)
}
function verificarPrimo(numero) {
    if (numero == 0) {
        return false;
    }
    for (var i = 2; i < numero; i++) {
        if (numero % i == 0) return false;
    }
    return true;
}

function checkSenha() {
    var verificar = /^([a-zA-Z0-9@*#]{8,15})$/;
    var senha = prompt('digite uma senha forte: (8 caracteres, maiúsculas e minusculas, caractere especiais.')
    
    if (senha.value.match(verificar)) {
        alert('Essa é uma senha forte.')
        return true;
    }
    else {
        alert('Senha fraca, tente novamente.')
        return false;
    }

    // Incompleto :(
}

function fatorial(num){
    num = parseInt(prompt('digite um numero'))
    var result = num;
    do{
        num--;
        result = result * num; 
    } while (num > 0)
    console.log(result)
} // Eu tentei :(
