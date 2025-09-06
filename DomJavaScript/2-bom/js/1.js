//BOM

//1-Ancho de una ventana del navegador 
console.log(window.innerWidth, "Ancho de una pagina");

//2- el alto del b¡navegador
console.log(window.innerHeight, "alto de una pagina");

//3- crear funciones para traer el alto y ancho de un navegador 
function traerBom(ancho, alto){

    var ancho = console.log(window.innerWidth, "Ancho de una pagina con una funcion");
    var alto = console.log(window.innerHeight, "alto de una pagina con una funcion");    
}

traerBom();

//4- traer el tamaño real
console.log(screen.width, "Ancho de una pagina");
console.log(screen.height, "Alto de una pagina");

//5- traer una url
console.log(window.location, "Esto es la url donde estas ahora");

//6-funcion para redireccionar a otra url

function redirect(url){
    window.location.href = url;
}

redirect(url);

//7-abrir ventana

function abrirventana(url){
    window.open(url);
}

abrirventana(url, "", "width=400, heigth=300");