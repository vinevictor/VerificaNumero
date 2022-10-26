var valor;
var numero = parseInt(prompt("Digite Qualquer numero Positivo ou negativo"));
RetornaValor();
console.log(numero + " = " + valor);

function RetornaValor() {
    if (numero > 0) {
        valor = 1
    } else if (numero < 0) {
        valor = -1
    } else if (numero == 0) {
        valor = 0
    };
    return valor;
}