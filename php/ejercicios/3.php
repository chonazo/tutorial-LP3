<h1>Extructura while</h1>
<?php
$x = 1;
while($x <= 5){
echo("numero: $x <br>");
$x++;
}

echo("<hr>");

$var = 0;
while($var <= 100){
echo("numero de a dies: $var <br>");
$var += 10;
}
echo("<hr>");
echo("<h1>do while</h1>");

$z = 0;
do{
echo("numero: $z <br>");
$z++;
}while($z<=10);

echo("<hr>");

$m = 0;
do{
echo("numero: $m <br>");
$m+=10;
}while($m<=100);
?>