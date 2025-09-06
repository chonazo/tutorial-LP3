function miPrimeraFuncion(){
    var mensaje = document.write('hola esta es mi primera función');
}

miPrimeraFuncion();

function ingresarNumeros(n1, n2, mostrar = false){

    if(mostrar == false){
        alert('Tienes que activarme con true');
    }else{
        var suma = n1 + n2;
        return suma;
    }
}

var nr1 = parseInt(prompt('Ingrese el valor de 1'));
var nr2 = parseInt(prompt('Ingrese el valor de 2'));
var mostrar = prompt('Mostrar?');

alert(ingresarNumeros(nr1, nr2, mostrar));