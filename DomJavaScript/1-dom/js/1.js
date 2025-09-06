// 1 - Ingresar el elemento por su id

'use strict'

function cambiarColor(color, color2){
caja.style.backgroundColor=color;
otraForma.style.backgroundColor=color2;


}
//Seleccionar por id
var caja = document.getElementById("micaja");
caja.innerHTML = "Texto cambiado por el DOM";
console.log(caja);

caja.style.backgroundColor="red";
caja.style.padding="20px";
caja.style.color="white";

//por queryselector
var otraForma = document.getElementById("micaja2");
otraForma.style.color="blue";
console.log(otraForma);

//Seleccionar elementos por etiqueta 
var todosLosDiv = document.getElementsByTagName("div");
var valorDivSeleccionado = todosLosDiv[2];
console.log(valorDivSeleccionado);

var cambiarSeleccionado = todosLosDiv[2];
cambiarSeleccionado.style.background="green";

// Recorrer con un for in todos los div 
var todoDiv = document.getElementsByTagName('div');
var valor;
for (valor in todoDiv) {
    if(typeof todoDiv[valor].textContent == 'string'){
    var parrafo = document.createElement("p"); //crea parrafos
    var texto = document.createTextNode(todoDiv[valor].textContent);
    parrafo.append(texto);
    document.querySelector("#miseccion").append(parrafo);
    }
}

// llamar a elemento por su clase
var divclase = document.getElementsByClassName("miclase");
divclase[0].style.backgroundColor = "yellow";