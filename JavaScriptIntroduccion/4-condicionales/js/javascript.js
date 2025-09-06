//condicional if
var numero = 8;

if(numero < 10){
    alert('numero es menor a 10');
}else if(numero > 10){
    alert('numero es mayor a 10');
}else{
    alert('numero es igual a 10');
}

//switch 

var edad = 80;
var imprimir ="";

switch(edad){
    case 18: imprimir ="mayor de edad";
        break;
    case 17: imprimir ="menor de edad";
        break;
    case 80: imprimir ="tercera edad";
        break;
    default: imprimir ="otra edad";
}

alert(imprimir);
