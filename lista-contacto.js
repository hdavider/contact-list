let listaContactos = [
    {nombre: "Hugo", apellido: "Erazo", cel: 98511713, ubicacion: {ciudad: "Juticalpa", direccion: "El Centro"}},
    {nombre: "Daisy", apellido: "Gonzales",cel: 33189869, ubicacion: {ciudad: "Juticalpa", direccion: "El Centro"}},
    {nombre: "Anyerson", apellido: "Castellanos",cel:123412234, ubicacion: {ciudad: "Bogota", direccion: "El Centro"}}

];

console.log(listaContactos);

// Añadir

function anadirContacto(nombre, apellido, cel, ubicacionCiudad, ubicacionDireccion) {
    let nuevoContacto = {
        nombre: nombre,
        apellido: apellido,
        cel: cel,
        ubicacion: {
            ciudad: ubicacionCiudad,
            direccion: ubicacionDireccion
        }
    };

    listaContactos.push(nuevoContacto);
    console.log(listaContactos);
}

// Probando la funcion de añadir contacto

anadirContacto("Daniel", "Erazo", 123456678, "Wichita Falls", "Texas");
anadirContacto("Mauricio", "Erazo",234456567, "Lake Worth", "Florida");

//Borrar

function eliminarContacto(nombre){
    listaContactos = listaContactos.filter(
        contacto => contacto.nombre !== nombre

    );
}

eliminarContacto("Mauricio");
console.log(listaContactos);


// Actualizar contacto

function actualizarContacto(nombre, nuevoNombre, nuevoApellido, nuevoCel, nuevaCiudad, nuevaDireccion) {
    const contactoIndex = listaContactos.findIndex(contacto => contacto.nombre === nombre);

    if (contactoIndex !== -1) {
        const contactoActualizado = {
            nombre: nuevoNombre,
            apellido: nuevoApellido,
            cel: nuevoCel,
            ubicacion: {
                ciudad: nuevaCiudad,
                direccion: nuevaDireccion
            }
        };

        listaContactos[contactoIndex] = contactoActualizado;
        console.log("Contacto actualizado:", contactoActualizado);
    } else {
        console.log("El contacto no fue encontrado.");
    }
}

// Actualizando el contacto, buscando a traves del nombre
actualizarContacto("Hugo", "David", "Moncada", 987654321, "Tegucigalpa", "Honduras");

// Imprimir

function printContacto() {
    console.log("Listado:");
    listaContactos.forEach(function(contacto){
        console.log(contacto.nombre + " " + contacto.apellido + " - " + contacto.cel, contacto.ubicacion);

    });
}

printContacto();