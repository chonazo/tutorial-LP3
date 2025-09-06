<h1>Condicionales</h1>
<?php
$hora = date("H");

if ($hora > "19") {
    echo "que tengas buen dia";
}
?>
<h1>Condicionales if else</h1>
<?php
if ($hora < "19") {
    echo "que tengas buen dia";
} else {
    echo "que tengas buenas noches";
}
?>
<h1>Condicionales else if</h1>
<?php
if ($hora < "19") {
    echo "que tengas buen dia";
} else if ($hora < "20") {
    echo "que tengas buenas tardes";
} else {
    echo "que tengas buenas noche";
}

?>

<h1>switch</h1>
<?php
$color = "rojo";

switch ($color) {
    case "rojo":
        echo ("mi color favorito rojo");
        break;
    case "verde":
        echo ("mi color no favorito");
        break;
    case "azul":
        echo ("mi color no favorito 2");
        break;
    default:
        echo ("no existe mi color favorito");
}


?>