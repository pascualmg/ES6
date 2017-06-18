//
log();

function Persona(name) {

    if (typeof new.target === 'undefined')
    {

    }
    this.nombre = name;
}

var persona = new Persona("alfonsa");
var nopersona = Persona("alfonso");

log("algo");
log(persona);
log(nopersona);