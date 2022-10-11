

let fechViaje = prompt ("¿En qué año desea viajar?");
if(fechViaje == 2022){
    alert("Lo sentimos! Ya se agotaron las vacantes disponibles para este año");
}else if(fechViaje == 2023){
    alert("Buenas noticias, hay muchos lugares disponibles");
}else if(fechViaje>2023){
    alert("Lo sentimos! Aún no se ha iniciado la convocatoria para ese año");
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










