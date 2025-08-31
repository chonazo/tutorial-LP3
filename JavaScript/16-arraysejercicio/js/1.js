'use strict'
function mostrarArray(elementos, texto = "") {
    document.write("<h1>Contenido del array " + texto + "</h1>");
    var resultado = numeros.forEach((elementos, indice) => {
        document.write("<ul>");
        document.write("<li>" + elementos + "<li>");
        document.write("</ul>");
    });
}


var numeros = new Array(6);
for (var i = 0; i < numeros.length; i++) {
    numeros[i] = parseInt(prompt("introduce numeros"));
}
document.write("<h1>Contenido del array</h1>");
var resultado = numeros.forEach((valores) => {
    document.write("<ul>");
    document.write("<li>" + valores + "<li>");
    document.write("</ul>");
});

console.log(numeros);

var ordenar = numeros.sort(function (a, b) { return a - b });
console.log(ordenar);

numeros.reverse();

mostrarArray(numeros, " En orden reverso");

document.write("<h1> El array tiene: "+numeros.length+" elementos</h1>");


var busqueda = parseInt(prompt("nusca un numero. ",0));
var posicion = numeros.findIndex(numeros=> numeros == busqueda);
var valor = umeros.find(numeros=> numeros == busqueda);
if(posicion && posicion != -1){
    document.write("la posicion es: "+posicion + "el valor es: "+valor);
} else {
    document.write("no encontrado");
}