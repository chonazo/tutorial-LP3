var nro1 = 50;
var nro2 = 25;
var suma = nro1 + nro2;
var resta = nro1 - nro2;
var multi = nro1 * nro2;
var divi = nro1 / nro2;
var dec = 2.5;
var boolean = true;

var texto = 'El resuktado de la operacion es : ';

document.write(texto + suma + '<br>');
document.write(texto + resta + '<br>');
document.write(texto + multi + '<br>');
document.write(texto + divi + '<br>');
document.write(dec + '<br>');
document.write(boolean + '<br>');

//funciones para conversiones de datos
document.write("<hr>");
document.write("<h1> Conversiones de datos </h1> <br>");

var numero = '30';
var cobnumero = Number(numero);

var tipo = typeof(cobnumero);

var numerostr = typeof(numero);

document.write(cobnumero +'<br>');
document.write(tipo +'<br>');
document.write(numerostr +'<br>');

var nrostr = '100';
var parse = parseInt(nrostr);
var tiponro = typeof(parse);
document.write(tiponro);