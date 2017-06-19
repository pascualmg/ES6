//funciones de flecha SPEAR FUNCS ECMA6
log();

function normalFunction(paramA, paramB) {
    return paramA + paramB;
}

let arrowFunction = (paramA, paramB) => {paramA + paramB};
let saludar = (persona) => `Hola ${persona}`;

let getLibro = function(id) {
    return {
        id: id,
        titulo: "harry potter"
    }
}(5);
let getLibroArrow = id => ({id: id, titulo: "harry Potter"});




log(normalFunction(2,3));
log(arrowFunction(2,3));


