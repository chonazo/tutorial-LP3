<?php
echo ("<h1> Arrays </h1>");

$autos = array("Toyota", "kia", "volvo");

foreach ($autos as $auto) {
    echo ("tengo un $auto <br>");
}

echo ("<hr>");
echo ("imprimir Valor y el inice <br>");

foreach ($autos as $indice => $auto) {
    echo ("tengo un indice $indice y un valor $auto<br>");
}

echo ("<hr>");
echo ("Bidimencionales <br>");

$autos = array(
    array("nissan", 18, 20),
    array("toyota", 19, 21),
    array("vmw", 20, 22),

);

echo $autos[0][0] . " En stock " . $autos[0][1] . " El saldo es "  . $autos[0][2] . "<br>";
echo $autos[1][0] . " En stock " . $autos[1][1] . " El saldo es "  . $autos[1][2] . "<br>";
echo $autos[2][0] . " En stock " . $autos[2][1] . " El saldo es "  . $autos[2][2] . "<br>";