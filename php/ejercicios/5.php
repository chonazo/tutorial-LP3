<?php
echo("<h1>Funciones</h1>");

function HolaMundo(){
    echo("<h3>Hola mundo desde una funcion</h3>");
}

HolaMundo();

echo("<hr>");
echo("<h1>Funciones con parámetros</h1>");

function NombresFamiliar($nombre){
echo("el nombre del familiar es: $nombre <br>");
}

NombresFamiliar("Maria");

echo("<hr>");
echo("<h1>Funciones con dos parámetros</h1>");

function NombresAnio($nombre, $anio){
echo("los nombre del familiar es: $nombre , $anio<br>");
}

NombresAnio("Pedro", "1987");
echo("<hr>");

echo("<hr>");
echo("<h1>Funciones con retornos</h1>");

function SumaNumeros($num1, $num2){
 return $num1 + $num2;
}

echo("La suma es : " . SumaNumeros(1 , 5));