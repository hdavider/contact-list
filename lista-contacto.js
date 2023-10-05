let listaContactos = [
    {nombreCompleto: "Hugo Erazo", Cel: 98511713},
    {nombreCompleto: "Daisy Gonzales", Cel: 33189869},
    {nombreCompleto: "Anyerson Castellanos", Cel:123412234}

];

console.log(listaContactos);

// Añadir

function anadirContacto(nombreCompleto, Cel) {
    let anadirContacto = {
        nombreCompleto: nombreCompleto,
        Cel: Cel
    };

    listaContactos.push(anadirContacto);
    console.log(listaContactos);
    
}

anadirContacto("Daniel Erazo", 123456678);
anadirContacto("Mauricio Erazo", 234456567);

//Borrar

function eliminarContacto(nombreCompleto){
    listaContactos = listaContactos.filter(
        contacto => contacto.nombreCompleto !== nombreCompleto

    );
}

eliminarContacto("Mauricio Erazo");
console.log(listaContactos);

// Imprimir

function printContacto() {
    console.log("Listado:");
    listaContactos.forEach(function(contacto){
        console.log(contacto.nombreCompleto + " - " + contacto.Cel);

    });
}

printContacto();