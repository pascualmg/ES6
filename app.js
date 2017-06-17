//argumentos x defecto y argumento REST ...

function agregar_alumno(arr_alumnos, ...alumnos) {

    inserta_en_array = function(nombre){
        arr_alumnos.push(nombre);
    };

    alumnos.forEach(inserta_en_array);
}

arr = [
];

agregar_alumno(arr, "pepe", "juan", "maria");

console.log(arr);
