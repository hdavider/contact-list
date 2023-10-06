let listaContactos = [
    {nombre: "Hugo", apellido: "Erazo", Cel: 98511713, ubicacion: {ciudad: "Juticalpa", direccion: "El Centro"}},
    {nombre: "Daisy", apellido: "Gonzales",Cel: 33189869},
    {nombre: "Anyerson", apellido: "Castellanos",Cel:123412234}

];

console.log(listaContactos);

// Añadir

function anadirContacto(nombre, Cel) {
    let anadirContacto = {
        nombre: nombre,
        Cel: Cel
    };

    listaContactos.push(anadirContacto);
    console.log(listaContactos);
    
}

anadirContacto("Daniel Erazo", 123456678);
anadirContacto("Mauricio Erazo", 234456567);

//Borrar

function eliminarContacto(nombre){
    listaContactos = listaContactos.filter(
        contacto => contacto.nombre !== nombre

    );
}

eliminarContacto("Mauricio Erazo");
console.log(listaContactos);

// Imprimir

function printContacto() {
    console.log("Listado:");
    listaContactos.forEach(function(contacto){
        console.log(contacto.nombre + " - " + contacto.Cel);

    });
}

printContacto();