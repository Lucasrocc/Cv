


/*
document.getElementById("email").addEventListener( "mouseover", function() {
    document.getElementById("demo").innerHTML = "probando primer evento"
    })



 document.getElementById("fecha").addEventListener( "mouseover", function() {
    document.getElementById("demo2").innerHTML = "probando ps evento"
    })
 */  
  
    
    window.onload = function(){
        document.getElementById("email").onmouseover = function(){document.getElementById("demo").innerHTML = "connor.rivera@example.com"}
        document.getElementById("email").onmouseout = function(){document.getElementById("demo").innerHTML = ""}
        document.getElementById("fecha").onmouseover = function(){document.getElementById("demo").innerHTML = "4/4/1980"}
        document.getElementById("fecha").onmouseout = function(){document.getElementById("demo").innerHTML = ""}
        document.getElementById("tel").onmouseover = function(){document.getElementById("demo").innerHTML = "(251) 610-6833"}
        document.getElementById("tel").onmouseout = function(){document.getElementById("demo").innerHTML = ""}
        document.getElementById("dir").onmouseover = function(){document.getElementById("demo").innerHTML = "3640 Thornridge Cir"}
        document.getElementById("dir").onmouseout = function(){document.getElementById("demo").innerHTML = ""}
    }