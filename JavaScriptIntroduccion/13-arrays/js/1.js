'use strict'
var nombre = "Gustavo";
var nombres = ["pedro", "Pablo", "juan", "marcos", 12, 33, true];
var lenguajes = new Array("java", "php", "javascript", "python");

document.write(nombres + '<br>');
document.write(lenguajes + '<br>');
document.write(lenguajes[2] + '<br>');

var seleccion = parseInt(prompt("Ingresa el indice que quieres ver ", 0));
if (seleccion >= lenguajes.length) {
    alert("debe ingresar un numero del 0 al 3");
} else {
    alert(lenguajes[seleccion]);
}

document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++) {

    document.write('<li>' + lenguajes[i] + '</li>');
}
document.write("</ul> <br>");

document.write("<h1> forEach</h1>");
lenguajes.forEach((elemento, indice, array) => {
    document.write('elemento: ' + elemento + '<br>');
    document.write('indice: ' + indice + '<br>');
    document.write('array: ' + array + '<br>');
});

document.write("<h1> for in</h1>");
document.write("<ul>");
for (let lenguaje in lenguajes) {
    document.write("<li>"+"el lenguaje es: "+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");