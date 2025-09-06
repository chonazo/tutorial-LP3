'use strict'
var categorias = ["accion", "comedia", "terror"];
var peliculas = ["peli1", "peli2", "peli3"];

var cine = [categorias, peliculas];

document.write(cine[0][0] + "<br>");
document.write(cine[1][1] + "<br>");

peliculas.push("peli4");
document.write(peliculas + "<br>");

peliculas.pop("peli4");
document.write(peliculas + "<br>");

var elemento = "";
do {
    elemento = prompt("Ingrese los elementos: ");
    peliculas.push(elemento);
} while (elemento != "x");

peliculas.forEach((pelis)=>{
    document.write("películas: "+pelis + "<br>");
});

var pelistring = peliculas.join();
document.write(typeof pelistring);

var cadena = "texto1, texto2, texto3";
cadena.split();

categorias.sort();
console.log(categorias);

peliculas.reverse();
console.log(peliculas);