function datosPersonales() {
    let x = document.getElementsByClassName("input");
    let y = document.getElementById("respuesta");
    let z = document.getElementById("asesoramiento");
    y.innerHTML = "¡Hola " + x[0].value + ", de la ciudad de " + x[2].value + ", " + x[3].value + "!";
    if (x[1].value <=18 && x[1].value >=12){
z.innerHTML = "¡Consulta en esta página nuestros programas de intercambio estudiantil, tenemos mucha información que te puede interesar!";
}else if (x[1].value > 18 && x[1].value < 35){
z.innerHTML = "¡En esta página consultá los programas de Voluntariado, seguro hay una propuesta que es de tu interés!";
} else {
z.innerHTML = "¡Lo sentimos, no contamos con programas aptos para personas de su edad!";
}
let nom=document.getElementById("nomyap").value;
localStorage.setItem("nombre",nom);
/* let ddd=localStorage.getItem("nombre");
console.log(ddd); */
}
