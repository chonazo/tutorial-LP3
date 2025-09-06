<h1>Funciones con cadena</h1>
<?php
echo strlen("Hola mundo php");//cantidad de valores de una cadena
echo "<hr>";

$cadena = " Hola mundo ";
echo trim($cadena); // borra espacios
echo "<hr>";
echo str_word_count($cadena);// cuenta palabras
echo "<hr>";
$word = "Hola mundo con php";
echo strrev($word);//invertir valores

echo "<hr>";
echo  strpos($word, "Hola");//encontrar palabra
echo "<hr>";

echo str_replace("mundo", "planeta", "hola mundo");
echo "<hr>";

echo(pi());
echo "<hr>";

echo("mínimo " . min(0,12,-1)) . "<br>";
echo("máximo " . max(9, 8, 0)) . "<br>";
echo "<hr>";
echo("<h1>Variables constantes</h1>");
define("nombreconstante", "Bienvenidos al curso");
echo(nombreconstante);
echo "<hr>";
define("autos", ["vmw", "toyota", "kia"]);
echo autos[1];
echo "<hr>";






