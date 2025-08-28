var numero = 888;
var text1 = "Bienvenidos al curso de java script";
var text2 = "TEXTO EN MAYUSCULA";

//numero a string
var convertir = numero.toString();
console.log(convertir);
console.log(typeof (convertir));

//mayusculas y minusculas
var textMayus = text1.toUpperCase();
console.log(textMayus);
var textMinus = text2.toLowerCase();
console.log(textMinus);

//longitud de un string
var longitud = "Chono";
console.log(longitud.length);

//concatenar
console.log(text1 + text2);

//array
var array = ["hola", "como", "estas?"];
console.log(array.length);

//buscar por indice 
//var buscar = text1.indexOf("curso");
var buscar = text1.lastIndexOf("curso");
console.log(buscar);

var buscar2 = text1.search("curso");
console.log(buscar2);

var buscar3 = text1.match("curso");
console.log(buscar3);

var buscar4 = text1.startsWith("curso");
console.log(buscar4);

var buscar5 = text1.includes("curso");
console.log(buscar5);

//quitar espacios de adelante y atras
var sustraer = text1.substr(4, 6);
console.log(sustraer);

//quitar letra
var quitar = text1.charAt(2);
console.log(quitar);

//reemplazar una palabra por otra
var reemplazar = text1.replace('curso', 'holamundo');
console.log(reemplazar);

//borrar una parte devolver valor
var borrarParte = text1.slice(8, 15);
console.log(borrarParte);

//covertir en array
//var conver = text1.split(); // toda la frase
//var conver = text1.split("");//cada letra en array
var conver = text1.split(" ");//cada palabra en array

console.log(conver);

//trim()
var quitarEspacios = text1.trim();
console.log(quitarEspacios);

//Uso de plantillas

var nombre = prompt('Ingrese su nombre');

while (!nombre || !apellido) {
    nombre = prompt('Ingrese su nombre');  
    apellido = prompt('Ingrese su apellido');  
}

//para hacer comillas al reves alt+96
var plantilla = `
<h1>Hola que tal</h1>
<h3>Mi nombre es : ${nombre}</h3>
<h3>Mi apellido es : ${apellido}</h3>
`;
document.write(plantilla);