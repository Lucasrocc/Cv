//for (inicializacion; condicion; incremento/decremento)

var x = 0;

for (x; x <= 5; x++) {
    console.log("el valor de x es:"+x);//sentencia, si la condicion inicial esta mal hecha de puede colgar la pc
}


//ejemplo malhecho//
//x nunca va a ser 0 siempre va para arriba, va a sumar hasta colgarse por falta de memoria
var x = 10;

for (x; x > 0; x++) {
    console.log("el valor de x es:");//sentencia, si la condicion inicial esta mal hecha de puede colgar la pc
}