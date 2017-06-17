
//yo soy window. 
//Esto se va a ejecutar en cascada cada vez que se hace ctrl+r de la pag.

let  saludo = "hola caracola, ";

function dialgoAlosPavos() {
    console.log("PAAAAAVO VAAAVOVOVOVOVO");
}
const PERSONA = { nombre: "pascual", edad: "22", hablar: window.dialgoAlosPavos };
PERSONA.nombre = "antonia";
for (let i=0;i<10;i++)
    console.log(PERSONA);




