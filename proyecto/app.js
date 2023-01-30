
//seccion-Datos-personales//
    
    window.onload = function(){
        document.getElementById("email").onmouseover = function(){document.getElementById("demo").innerHTML = "connor.rivera@example.com"}
        document.getElementById("email").onmouseout = function(){document.getElementById("demo").innerHTML = ""}
        document.getElementById("fecha").onmouseover = function(){document.getElementById("demo").innerHTML = "4/4/1990"}
        document.getElementById("fecha").onmouseout = function(){document.getElementById("demo").innerHTML = ""}
        document.getElementById("tel").onmouseover = function(){document.getElementById("demo").innerHTML = "(251) 610-6833"}
        document.getElementById("tel").onmouseout = function(){document.getElementById("demo").innerHTML = ""}
        document.getElementById("dir").onmouseover = function(){document.getElementById("demo").innerHTML = "3640 Thornridge Cir"}
        document.getElementById("dir").onmouseout = function(){document.getElementById("demo").innerHTML = ""}
    }

//seccion-Datos-personales//

//habilidades//



function efectoHabilidades(){
   var Hab = document.getElementById("Hab");
   var distancia_Hab = window.innerHeight - Hab.getBoundingClientRect().top;
   if(distancia_Hab >= 300){
       let habilidades = document.getElementsByClassName("progreso");
       habilidades[0].classList.add("javascript");
       habilidades[1].classList.add("html");
       habilidades[2].classList.add("photoshop");
       habilidades[3].classList.add("css");
       habilidades[4].classList.add("python");

   }
}

//habilidades//

//experiencia//

let hidden = document.querySelector(".ocultos")

//experiencia//


window.onscroll = () =>{
    let pos = window.scrollY - 950;
    hidden.style.right = `${pos}px`
    efectoHabilidades()
}







