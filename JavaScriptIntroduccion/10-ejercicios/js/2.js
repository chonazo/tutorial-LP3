var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('ingrese un numero : ', 0));
    if (contador == 2) {
        alert('Si quiere parar ingrese un numero negativo');
    }

    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;
        contador++;
    }

} while (numero >= 0);

if (contador > 0) {
    alert('La suma es: ' + suma);
    alert('El promedio es: ' + (suma / contador));
} else {
    alert('No se ingresaron números válidos para calcular.');
}




