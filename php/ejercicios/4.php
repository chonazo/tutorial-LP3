<?php
echo ("<h1>Estructura for</h1>");

for ($i = 0; $i <= 10; $i++) {
    echo ("numero: $i <br>");
}

echo ("<hr>");
echo ("<h1>Estructura forEach</h1>");

$colores = array("rojo", "amarillo", "verde", "azul");
foreach ($colores as $valor) {
    echo ("numero: $valor <br>");
}

echo ("<hr>");
echo ("<h1>Estructura forEach con indice de datos</h1>");

$anio = array("pedro" => 35, "juan"=>22, "marcos" =>28);

foreach ($anio as $nombre => $edad){
    echo ("$nombre tiene $edad años<br>");
}
echo ("<hr>");
echo ("<h1>Break</h1>");

for ($i = 0; $i <= 10; $i++) {
    if($i == 5){
        break;
                
    }
    echo ("numero: $i <br>");
    
}

echo ("<hr>");
echo ("<h1>Continue</h1>");

for ($i = 0; $i <= 10; $i++) {
    if($i == 5){
        continue;
                
    }
    echo ("numero: $i <br>");
    
}