'use sctrict'

var nro1 = parseInt(prompt('ingrese el nro desde'));
var nro2 = parseInt(prompt('ingrese el nro hasta'));

document.write('<h1> de ' + nro1 + ' a ' + nro2 + ' están estos números <h1>');

for(var i=nro1 + 1; i < nro2; i++){
    document.write('<h3> '+ i +' </h3>', '<br>');
}