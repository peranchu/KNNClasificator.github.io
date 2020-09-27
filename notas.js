//Notas MIDI 

//Array NOTAS
//I
const CM = [60, 62, 67];
const Cm = [60, 63, 67];
const C7 = [60, 62, 67, 71];

//II
const DM = [62, 66, 69];
const Dm = [62, 65, 69];
const D7 = [62, 66, 69, 73];

//III
const EM = [64, 68, 71];
const Em = [64, 67, 71];
const E7 = [64, 68, 71, 75];

//IV
const FM = [65, 69, 72];
const Fm = [65, 68, 72];
const F7 = [65, 69, 72, 77];

//V
const GM = [66, 71, 74];
const Gm = [66, 70, 74];
const G7 = [66, 71, 74, 78];

//VI
const AM = [69, 73, 76];
const Am = [69, 72, 76];
const A7 = [69, 73, 76, 80];

//VII
const Bb = [58, 62, 65];
const Bbm = [58, 61, 65];
const Bb7 = [58, 62, 65, 69];
//=============================== FIN NOTAS =======================

let tono;
let modo;
let name;
let grado;

let mensajeNota = [];


//Llamada desde el boton de captura crea desde las etiquetas de las clases, las clases MIDI
function CapturaDatos() {
    for (let i = 0; i < Basedatos.length; i++) {
        //console.log(Basedatos);
        name = Basedatos[i].nombre;
        tono = Basedatos[i].tonalidad;
        grado = Basedatos[i].grado;
        modo = Basedatos[i].modo;

        //Comprueba los campos para crear las clases MIDI
        Comprobacion(name, tono, grado, modo);
        
    }
}


//Cpmprobacion mensajes y Carga
function Comprobacion(name, tono, grado, modo) {
    //CM
    if (tono === "C" && grado === "I" && modo === "Mayor") { //CM
        //console.log("CM");
        nuevoMensaje = new Mensajes(name, CM);
        addMensaje(name);
    }
    if (tono === "C" && grado === "IV" && modo === "Mayor") { //DM
        //console.log("FM");
        nuevoMensaje = new Mensajes(name, FM);
        addMensaje(name);
    }
    if (tono === "C" && grado === "V" && modo === "Mayor") { //DM
        //console.log("GM");
        nuevoMensaje = new Mensajes(name, GM);
        addMensaje(name);
    }

    //==================  C MENOR ===============================
    //Cmenor
    if (tono === "C" && grado === "I" && modo === "menor") { //Cm
        //console.log("Cm");
        nuevoMensaje = new Mensajes(name, Cm);
        addMensaje(name);
    }
    if (tono === "C" && grado === "IV" && modo === "menor") { //Fm
        //console.log("Fm");
        nuevoMensaje = new Mensajes(name, Fm);
        addMensaje(name);
    }
    if (tono === "C" && grado === "V" && modo === "menor") { //Gm
        //console.log("Gm");
        nuevoMensaje = new Mensajes(name, Gm);
        addMensaje(name);
    }

    //==================  C 7ª ===============================
    //C7
    if (tono === "C" && grado === "I" && modo === "7ª") { //C7
        //console.log("Cm");
        nuevoMensaje = new Mensajes(name, C7);
        addMensaje(name);
    }
    if (tono === "C" && grado === "IV" && modo === "7ª") { //F7
        //console.log("Fm");
        nuevoMensaje = new Mensajes(name, F7);
        addMensaje(name);
    }
    if (tono === "C" && grado === "V" && modo === "7ª") { //G7
        //console.log("Gm");
        nuevoMensaje = new Mensajes(name, G7);
        addMensaje(name);
    }

    //================== FM ===============================
    //FM
    if (tono === "F" && grado === "I" && modo === "Mayor") { //FM
        //console.log("FM");
        nuevoMensaje = new Mensajes(name, FM);
        addMensaje(name);
    }
    if (tono === "F" && grado === "IV" && modo === "Mayor") { //BbM
        //console.log("Bb");
        nuevoMensaje = new Mensajes(name, Bb);
        addMensaje(name);
    }
    if (tono === "F" && grado === "V" && modo === "Mayor") { //CM
        //console.log("CM");
        nuevoMensaje = new Mensajes(name, CM);
        addMensaje(name);
    }

    //================== Fm ===============================
    //Fm
    if (tono === "F" && grado === "I" && modo === "menor") { //Fm
        //console.log("fm");
        nuevoMensaje = new Mensajes(name, Fm);
        addMensaje(name);
    }
    if (tono === "F" && grado === "IV" && modo === "menor") { //BbM
        //console.log("Fm");
        nuevoMensaje = new Mensajes(name, Bbm);
        addMensaje(name);
    }
    if (tono === "F" && grado === "V" && modo === "menor") { //Cm
        //console.log("Gm");
        nuevoMensaje = new Mensajes(name, Cm);
        addMensaje(name);
    }

    //================== F7 ===============================
    //F7
    if (tono === "F" && grado === "I" && modo === "7ª") { //F7
        //console.log("f7");
        nuevoMensaje = new Mensajes(name, F7);
        addMensaje(name);
    }
    if (tono === "F" && grado === "IV" && modo === "7ª") { //Bb7
        //console.log("Bb7");
        nuevoMensaje = new Mensajes(name, Bb7);
        addMensaje(name);
    }
    if (tono === "F" && grado === "V" && modo === "7ª") { //C7
        //console.log("C7");
        nuevoMensaje = new Mensajes(name, C7);
        addMensaje(name);
    }

    //================== GM ===============================
    //GM
    if (tono === "G" && grado === "I" && modo === "Mayor") { //GM
        //console.log("GM");
        nuevoMensaje = new Mensajes(name, GM);
        addMensaje(name);
    }
    if (tono === "G" && grado === "IV" && modo === "Mayor") { //CM
        //console.log("CM");
        nuevoMensaje = new Mensajes(name, CM);
        addMensaje(name);
    }
    if (tono === "G" && grado === "V" && modo === "Mayor") { //DM
        //console.log("DM");
        nuevoMensaje = new Mensajes(name, DM);
        addMensaje(name);
    }

    //================== Gm ===============================
    //Gm
    if (tono === "G" && grado === "I" && modo === "menor") { //Gm
        //console.log("Gm");
        nuevoMensaje = new Mensajes(name, Gm);
        addMensaje(name);
    }
    if (tono === "G" && grado === "IV" && modo === "menor") { //Cm
        //console.log("Cm");
        nuevoMensaje = new Mensajes(name, Cm);
        addMensaje(name);
    }
    if (tono === "G" && grado === "V" && modo === "menor") { //Dm
        //console.log("Dm");
        nuevoMensaje = new Mensajes(name, Dm);
        addMensaje(name);
    }

    //================== G7 ===============================
    //G7
    if (tono === "G" && grado === "I" && modo === "7ª") { //G7
        //console.log("G7");
        nuevoMensaje = new Mensajes(name, G7);
        addMensaje(name);
    }
    if (tono === "G" && grado === "IV" && modo === "7ª") { //C7
        //console.log("Cm");
        nuevoMensaje = new Mensajes(name, C7);
        addMensaje(name);
    }
    if (tono === "G" && grado === "V" && modo === "7ª") { //D7
        //console.log("Dm");
        nuevoMensaje = new Mensajes(name, D7);
        addMensaje(name);
    }
    //================== AM ===============================
    //AM
    if (tono === "A" && grado === "I" && modo === "Mayor") { //AM
        //console.log("AM");
        nuevoMensaje = new Mensajes(name, AM);
        addMensaje(name);
    }
    if (tono === "A" && grado === "IV" && modo === "Mayor") { //DM
        //console.log("DM");
        nuevoMensaje = new Mensajes(name, DM);
        addMensaje(name);
    }
    if (tono === "A" && grado === "V" && modo === "Mayor") { //EM
        //console.log("EM");
        nuevoMensaje = new Mensajes(name, EM);
        addMensaje(name);
    }

    //================== Am ===============================
    //Am
    if (tono === "A" && grado === "I" && modo === "menor") { //Am
        //console.log("AM");
        nuevoMensaje = new Mensajes(name, Am);
        addMensaje(name);
    }
    if (tono === "A" && grado === "IV" && modo === "menor") { //Dm
        //console.log("DM");
        nuevoMensaje = new Mensajes(name, Dm);
        addMensaje(name);
    }
    if (tono === "A" && grado === "V" && modo === "menor") { //Em
        //console.log("EM");
        nuevoMensaje = new Mensajes(name, Em);
        addMensaje(name);
    }

    //================== A7 ===============================
    //A7
    if (tono === "A" && grado === "I" && modo === "7ª") { //A7
        //console.log("AM");
        nuevoMensaje = new Mensajes(name, A7);
        addMensaje(name);
    }
    if (tono === "A" && grado === "IV" && modo === "7ª") { //D7
        //console.log("DM");
        nuevoMensaje = new Mensajes(name, D7);
        addMensaje();
    }
    if (tono === "A" && grado === "V" && modo === "7ª") { //Em
        //console.log("EM");
        nuevoMensaje = new Mensajes(name, E7);
        addMensaje();
    }

    //console.log(mensajeNota);
}
//============================= FIN COMPROBACIÓN MENSAJES ====================



//Agregar Mensajes MIDI al array "mensajeNota []"
function addMensaje(nombre) {
   
    mensajeNota.push(nuevoMensaje);
    console.log(mensajeNota);
}

//Clase Mensajes MIDI
function Mensajes(name, modo) {
    this.name = name;
    this.modo = modo;
}