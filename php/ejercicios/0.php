<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>primer php</title>
</head>

<body>
    <h1>Variables</h1>
    <?php
    //comenatrio simple 
    /*comentario extendido*/

    $variable = 5;
    echo $variable;
    echo "<hr>";
    $cadena = "hola mundo desde php";
    print $cadena;
    echo "<hr>";
    $cadena2 = "hola mundo desde php";
    echo "<h1>$cadena2</h1>";
    echo "<hr>";
    echo "este string", "se puede escribir", "entre comas";
    echo "<hr>";
    $variableboleana = true;
    var_dump($variableboleana);
    echo "<hr>";
    $variabledecimal = 3.14;
    var_dump($variabledecimal);
    echo "<hr>";
    ?>

    <h1>Tipos de datos objetos</h1>
    <?php
    class Auto {
        public $marca; 
        public $modelo; 
        public $motor;  

        function __construct() {           
        
            $this->marca = "kia";
            $this->modelo = "picanto";
            $this->motor = 2.0;
        }
    }

    $automovil = new Auto();

    echo $automovil->marca . "<br>";
    echo $automovil->modelo . "<br>";
    echo $automovil->motor . "<br>";

    echo "<h1>Variable tipo null<h1>";

    $x = "Hola mundo";

    $x = null;

    var_dump($x);

    ?>

</body>

</html>