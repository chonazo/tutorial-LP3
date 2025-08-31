'use strict'
var lenguajes = ["java", "php", "c++"];

var buscafind = lenguajes.find(lenguajes => lenguajes == "java");
console.log(buscafind );

var buscafind = lenguajes.findIndex(lenguajes => lenguajes == "php");
console.log(buscafind );

var numeros = [10,20,30,40,50];
var buscaposinrs = numeros.some(numeros => numeros >= 30);
console.log(buscaposinrs);

