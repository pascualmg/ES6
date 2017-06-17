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


let numero = 10;

if( true ){
    let numero = 20;

    while(true){
        let numero = 30;
        for(let numero = 1; numero < 10; numero ++){
            numero = numero;
        } break;
    }
}

console.log(numero);


//template literals

let articulo = ["el", "la", "un", "una", ];
let sujeto = ["niño", "perro", "viejo", "gay" ];
let verbo = ["salta", "corre", "caga", "juega"];

function getrandIndex(min = 0,max = 3)
{

    return Math.floor(Math.random()*(max-min+1)+min);
}


function etiqueta (literales , ...sustituciones)
{
    console.log(literales);
    console.log(sustituciones);

    for (i = 0 ; i< sustituciones.length; )
}
function difraseRandom(){

    let template = etiqueta`${articulo[getrandIndex(0,3)]} jugoso ${sujeto[getrandIndex(0,3)]} ${verbo[getrandIndex(0,3)]} raudo`;

    console.log(template);
}


PERSONA.hablar = window.difraseRandom;

PERSONA.hablar();