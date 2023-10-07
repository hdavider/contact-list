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

// Imprimir

function printContacto() {
    console.log("Listado:");
    listaContactos.forEach(function(contacto){
        console.log(contacto.nombre + " - " + contacto.cel, contacto.ubicacion);

    });
}

printContacto();