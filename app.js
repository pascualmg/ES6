//yo soy window.
//Esto se va a ejecutar en cascada cada vez que se hace ctrl+r de la pag.

let  saludo = "hola caracola, ";

function diSaludo()
{
    console.log(saludo);
}

function dialgoAlosPavos()
{
    console.log("PAAAAAVO VAAAVOVOVOVOVO");
}
function diAdios()
{
    console.log("ADIOS QUE TE TEN");
}

let funcs = [];
funcs.push(window.diSaludo);
funcs.push(window.dialgoAlosPavos);
funcs.push(window.diAdios);


function diToloquesepas()
{
    for (let func of funcs) {
        if (typeof func === "function") {
            func();
        }
    }
}

function diToloquesepasForeach()
{
    funcs.forEach(function (f) {
        f();
    })
}


const PERSONA = {
    nombre: "pascual",
    edad: "22",
    hablar: window.diToloquesepasForeach

};

PERSONA.hablar();
PERSONA.hablar = window.diToloquesepas;
PERSONA.hablar();


let nombre = "Roberto";

if ( nombre === "Roberto" ) {
    let nombre = "Juan Carlos";
    console.log(nombre);
}

console.log(nombre);