
/** esta en modo comentario para el siguiente punto
document.getElementById("boton").onclick = function () {
    console.log("capturamos el evento click") ;
    document.getElementById("demo").innerHTML = "Probando Probando"
}

aca lo aplica a todo el documento
document.addEventListener( "click", function() {
    console.log("Hola desde EventListener");
    document.getElementById("demo").innerHTML = "probando primer evento"
})

*/
//en este ultimo caso se selecciona al elemento boton y se le agrega el evento


document.getElementById("boton").addEventListener( "click", function() {
    console.log("Hola desde EventListener");
    document.getElementById("demo").innerHTML = "probando primer evento"
});


document.getElementById("color").addEventListener( "click", function() {
    document.body.style.backgroundColor = "#FF06B5" ;
});

document.getElementById("default").addEventListener( "click", function() {
    document.body.style.backgroundColor = "blue" ;
});



document.getElementsByClassName("parrafo")

const collection = document.getElementsByClassName("prueba");
collection[0].style.backgroundColor = "yellow";