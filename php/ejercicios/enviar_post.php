<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manejo de formularios</title>
</head>
<body>
<h1>Procesar formulario en otro archivo GET</h1>

<form action="recibir_post.php" method="POST">
    Nombre: <input type="text" name="nombre">
    Email: <input type="text" name="email">
    <input type="submit" value="Enviar Info">
</form>


</body>
</html>