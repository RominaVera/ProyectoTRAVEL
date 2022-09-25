/*
let nombre = prompt("¡BIENVENIDO/A A TRAVEL! ¿Cómo te llamas?")
let edad = parseInt(prompt("Ingresa por favor tu edad"));
if(edad<12){
    alert("Hola " + nombre + "! No hay programas adecuados a tu edad")
}else if(edad>=12 && edad<=18){
    alert("Hola " + nombre + "! El programa adecuado a tu edad es el de intercambio estudiantil, más información en la página: Nuestros programas")
}else{
    alert("Hola " + nombre + "! El programa adecuado a tu edad es el de Voluntariado para mayores de 18 años, más información en la página: Nuestros programas")
}
*/
const d = new Date();
let hora =d.getHours();
if(hora>=8 && hora<18){
    alert("¡Bienvenido/a a TRAVEL!");
    let consulta = prompt("Ingrese su consulta y será respondida a la brevedad");
}
else{
    alert("Bienvenido/a a TRAVEL! Le informamos que, para cualquier consulta, nuestro horario de atención es todos los días de 8 a 18 hs");
}