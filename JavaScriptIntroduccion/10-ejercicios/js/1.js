var nr1 = parseInt(prompt('Ingrese un valor 1', 0));
var nr2 = parseInt(prompt('Ingrese un valor 2', 0));

while (nr1 <= 0 || nr2 <= 0 || isNaN(nr1) || isNaN(nr2)) {
    nr1 = parseInt(prompt('Ingrese un valor 1', 0));
    nr2 = parseInt(prompt('Ingrese un valor 2', 0));
}

if (nr1 > nr2) {
    alert('el primer numero es mayor al segundo');
} else if (nr1 < nr2) {
    alert('el segundo numero es mayor al primero');
} else if (nr1 == nr2) {
    alert('los nuemros son iguales');
} else {
    alert('ingrese datos correctos');
}