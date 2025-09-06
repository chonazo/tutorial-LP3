window.addEventListener('load', ()=>{//cargar script al html

var boton2 = document.querySelector("#boton2");
//cambiar color
/*function cambiarColor() {
    boton2.style.background = "green";
}*/

//interactividad de boton 
function cambiarColor() {
    var vg = boton2.style.background;
    if(vg == "green") {
        boton2.style.background = "red";
    }else {
        boton2.style.background = "green";
    }
}

// evento clic

var boton3 = document.querySelector("#boton3");

boton3.addEventListener('click', function(){
    cambiarColor();
});

//evento mouses over
boton3.addEventListener('mouseover', function(){
    boton3.style.background="yellow";
});

//mouse out.
boton3.addEventListener('mouseout', function(){
    boton3.style.background="pink";
});

// evento focus
var input = document.querySelector("#nombre");
input.addEventListener('focus', function(){
    console.log("<h1>Estas haciendo focus ahora mismo </h1>");
})

// evento blur
var input = document.querySelector("#nombre");
input.addEventListener('blur', function(){
    console.log("<h1>Estas saliendo del focus ahora mismo </h1>");
})

//keydown
input.addEventListener('keydown', function(event){
    console.log("Estas pulsando la tecla: ", String.fromCharCode(event.keyCode));
});

//keypress
input.addEventListener('keypress', function(event){
    console.log("Estas pulsando la tecla con keypress: ", String.fromCharCode(event.keyCode));
});

//keyup
input.addEventListener('keyup', function(event){
    console.log("Estas soltando la tecla pulsado: ", String.fromCharCode(event.keyCode));
});

});//fin del load
