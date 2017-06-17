//argumentos x defecto y argumento REST ...

//todas las funcs tienen en su scope una var que es arguments
//contiene ahi todos los que se le pasen , y no hace falta declararlos
//esto es del ecma viejo.

function funcSinArgumentosDeclarados()
{
    log(arguments);
}

funcSinArgumentosDeclarados("argumento1", "argumento2");

//Ahora con el argumento REST mola más.

function agregar_alumno(arr_alumnos, ...alumnos) {

    inserta_en_array = function(nombre){
        arr_alumnos.push(nombre);
    };

    alumnos.forEach(inserta_en_array);
}

arr = [
];

agregar_alumno(arr, "pepe", "juan", "maria");

log(arr);

