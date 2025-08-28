var nro = parseInt(prompt('Ingrese un valor'));

document.write('<h1> la tabla del ' + nro + '</h1>');

for(var i=0; i<=10; i++){
    document.write( nro + " X " + i + " = " + (i*nro) + "<br>");
}

for(var c=0; c<=10; c++){
    document.write("La tabla de " + c + " es <br>");
    for(var d = 1; d <=10; d++){
        document.write(d + " x " + c + " = " + (c*d) + '<br>');
    }
}