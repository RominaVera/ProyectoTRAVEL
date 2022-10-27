let lugares=`[
    {"nombre":"México DF","idioma":"español","clima":"templado de tierras altas","poblacion":"9.000.000","moneda":"peso","dominio":".mx","prefijo":"+52"},
    {"nombre":"Madrid","idioma":"español","clima":"mediterráneo","poblacion":"3.300.000","moneda":"euro","dominio":".es","prefijo":"+34"},
    {"nombre":"Moscú","idioma":"ruso","clima":"continental húmedo","poblacion":"25.100.000","moneda":"rublo","dominio":".ru","prefijo":"+495"},
    {"nombre":"Katmandú","idioma":"nepalí","clima":"templado","poblacion":"1.400.000","moneda":"rupia","dominio":".np","prefijo":"+977"}
]`;
let jsonData = JSON.parse(lugares);

let mx=document.getElementById("mexico");
let es=document.getElementById("madrid");
let ru=document.getElementById("moscu");
let np=document.getElementById("nepal");

mx.innerHTML = "La ciudad de " + jsonData[0].nombre + " tiene una población de " +  jsonData[0].poblacion + " habitantes. Su clima es " + jsonData[0].clima + ", hablan " + jsonData[0].idioma + ", su moneda es el " + jsonData[0].moneda + ". Su dominio de internet es " + jsonData[0].dominio + " y su prefijo telefónico es " + jsonData[0].prefijo + "."

es.innerHTML = "La ciudad de " + jsonData[1].nombre + " tiene una población de " + jsonData[1].poblacion + " habitantes. Su clima es " + jsonData[1].clima + ", hablan " + jsonData[1].idioma + ", su moneda es el " + jsonData[1].moneda + ". Su dominio de internet es " + jsonData[1].dominio + " y su prefijo telefónico es " + jsonData[1].prefijo + "."

ru.innerHTML = "La ciudad de " + jsonData[2].nombre + " tiene una población de "  + jsonData[2].poblacion + " habitantes. Su clima es " + jsonData[2].clima + ", hablan " + jsonData[2].idioma + ", su moneda es el " + jsonData[2].moneda + ". Su dominio de internet es " + jsonData[2].dominio + " y su prefijo telefónico es " + jsonData[2].prefijo + "."

np.innerHTML = "La ciudad de " + jsonData[3].nombre + " tiene una población de "  + jsonData[3].poblacion + " habitantes. Su clima es " + jsonData[3].clima + ", hablan " + jsonData[3].idioma + ", su moneda es la " + jsonData[3].moneda + ". Su dominio de internet es " + jsonData[3].dominio + " y su prefijo telefónico es " + jsonData[3].prefijo + "."



/*Desde aquí el test*/


function opciones() {

    let formula = document.forms["myForm"];
    
    let playa = formula.playa.value;
    let montana = formula.montana.value;
    let bosque = formula.bosque.value;

    let amigos = formula.amigos.value;
    let pareja = formula.pareja.value;
    let familia = formula.familia.value;

    let bailar = formula.bailar.value;
    let cenar = formula.cenar.value;
    let reunion = formula.reunion.value;

    let lugar1= formula.lugar.value;
    let compania1= formula.compania.value;
    let diversion1= formula.diversion.value;

    let p1 = parseInt(lugar1);
    let p2 = parseInt(compania1);
    let p3 = parseInt(diversion1);
    let w = document.getElementById("resultado");
    let p = p1 + p2 + p3;
    if (p <=5) {
        w.innerHTML = "Los destinos recomendados son México o España";
    }
    else if (p >5 && p <=7) {
    w.innerHTML = "El destino recomendado es Nepal";
    }
    else {
    w.innerHTML ="El destino recomendado es Rusia";
    }
}
/* hasta aquí el test, a continuación cálculo de presupuesto*/

var presup;

function presupuestoPorPersona() {
    let formulas = document.forms["myForms"];
    
    let mexico = formulas.mexico.value;
    let madrid = formulas.madrid.value;
    let moscu = formulas.moscu.value;
    let nepal = formulas.nepal.value;
    let tEstadia=formulas.tEstadia.value;

    let tiempoEstadia1 = formulas.tiempoEstadia.value;
    let ciudadPreferida1= formulas.ciudadPreferida.value;
    let te=parseInt(tiempoEstadia1);
    let cp=parseInt(ciudadPreferida1);
    
    switch(ciudadPreferida1){
            case '1': 
            presup = te * 90000 + 50000;
            break;
            case '2': 
            presup = te * 120000 + 80000;
            break;
            case '3': 
            presup = te* 150000 + 85000;
            break;
            case '4': 
            presup = te * 175000 + 150000;
            break;
            
        } 
        let z = document.getElementById("presupuesto");
        z.innerHTML = "El presupuesto por persona para viaje (aéreo), alojamiento (casa de familia) y estadía es de $" + presup*0.8+ " en efectivo, con 20% de descuento."; 
        return presup;
}
        
    function financiacion() {
        let formulas = document.forms["myForms"];

        let tresCuotas = formulas.tresCuotas.value;
        let seisCuotas = formulas.seisCuotas.value;
        let doceCuotas = formulas.doceCuotas.value;
        let veinticuatroCuotas = formulas.veinticuatroCuotas.value;
        let formaDePago1 = formulas.formaDePago.value;
        let financ;
        
        switch(formaDePago1){
            case "3": financ = Math.round(presup/3);
            break;
            case "6": financ = Math.round(presup*1.2/6);
            break;
            case "12": financ = Math.round(presup*1.4/12);
            break;
            case "24": financ = Math.round(presup*1.8/24);
            break;
        }
    let y = document.getElementById("financiacion1");
    y.innerHTML = "Con su opción elegida de financiación, debe abonar " + formaDePago1 + " cuotas de $" + financ;
    }

    //-----------------------------------------------------------------------------
    let y = document.getElementById("financiacion1");
    y.innerHTML = "Con su opción elegida de financiación, debe abonar " + formaDePago1 + " cuotas de $" + financiacion();

    var presupuest;
    function presupuestoPosible() {
        
        let tiempoEstadia1 = document.getElementById("tEstadia").value;
        let te=parseInt(tiempoEstadia1);
        presupuest = "Presupuestos económicos (para el tiempo de estadía seleccionado): Montevideo: $ " + (25000*te + 10000) + "; Santiago: $ " + (30000*te + 12000) + "; Lima: $ " + (35000*te + 14000) + " y Quito: $ " + (40000*te + 16000) + "."; 
            let z = document.getElementById("presupuestoPosible1");
            z.innerHTML = presupuest;
    }