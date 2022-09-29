
/*let nombre = prompt("¡BIENVENIDO/A A TRAVEL! ¿Cómo te llamas?")
let edad = parseInt(prompt("Ingresa por favor tu edad"));
if(edad<12){
    alert("Hola " + nombre + "! No hay programas adecuados a tu edad")
}else if(edad>=12 && edad<=18){
    alert("Hola " + nombre + "! El programa adecuado a tu edad es el de intercambio estudiantil, más información en la página: Nuestros programas")
}else{
    alert("Hola " + nombre + "! El programa adecuado a tu edad es el de Voluntariado para mayores de 18 años, más información en la página: Nuestros programas")
}

const d = new Date();
let hora =d.getHours();
if(hora>=8 && hora<18){
    //alert("¡Bienvenido/a a TRAVEL!");
    let consulta = prompt("Ingrese su consulta y será respondida a la brevedad");
}
else{
    alert("Le informamos que, para cualquier consulta, nuestro horario de atención es todos los días de 8 a 18 hs");
}*/


let fechViaje = prompt ("¿En qué año desea viajar?");
if(fechViaje == 2022){
    alert("Ya se agotaron las vacantes disponibles para este año");
}else if(fechViaje == 2023){
    alert("Buenas noticias, hay muchos lugares disponibles");
}else if(fechViaje>2023){
    alert("Aún no se ha iniciado la convocatoria para ese año");
}else{
    alert("Fecha ya caducada");
}

const d = new Date();
        let hora = d.getHours();
        if(hora>=8 && hora<18){
        let consulta = prompt("Ingrese su consulta y será respondida a la brevedad");
        }
        else{
        alert("Le informamos que, para cualquier consulta, nuestro horario de atención es todos los días de 8 a 18 hs");
        }
        alert("Suscribite a nuestro newsletter!! Enterate todas las novedades de nuestros viajes y proyectos!!");
        prompt("Dejanos tu email para que podamos enviarte las novedades, gracias!");

        alert ("Para más información, completa el formulario de esta página");



/* alert("¿Te interesa descubrir cuál es el destino que se acerca a tus gustos? Podes responder las siguientes preguntas y te asesoramos");

let preg1 = prompt("Qué preferís para vacacionar: 1) Una playa; 2) La montaña; 3) Un bosque");
let preg2 = prompt("Con quienes te gustaría compartir las vacaciones: 1) Amigos; 2) Pareja; 3) Familia");
let preg3 = prompt("Cómo te gusta divertirte: 1) Salir a bailar; 2) Salir a cenar; 3) una reunión con amigos");

let p1 = parseInt(preg1);
let p2 = parseInt(preg2);
let p3 = parseInt(preg3);
let resultado = p1 + p2 + p3;

if (resultado <=3) {
    alert("El destino recomendado es Ibiza");
}
    else if (resultado >3 && resultado <=6) {
        alert("El destino recomendado es Aspen");
    }
    else {
        alert("El destino recomendado es Viena");
    } */






