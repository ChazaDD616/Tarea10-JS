class CJugadores{
    constructor(nombre,pos,edad,est,p,nac){
        this.nombre = nombre;
        this.pos = pos;
        this.edad = edad;
        this.est = est;
        this.p = p;
        this.nac = nac;
    }
}

const vector = [
    new CJugadores("Fábio1","G",43,1.88,86,"Brasil"),
    new CJugadores("Marlon4","D",28,1.83,78,"Brasil"),
    new CJugadores("Marcelo12","D",35,1.73,72,"Brasil"),
    new CJugadores("Nino33","D",26,1.88,82,"Brasil"),
    new CJugadores("John Kennedy9","A",21,1.73,71,"Brasil"),
    new CJugadores("Keno11","A",34,1.78,72,"Brasil"),
    new CJugadores("Germán Cano14","A",35,1.78,81,"Argentina"),
];

function listarJugadores(jugadores){
    document.write("<table border = 1> <tr>");
    document.write("<th colspan = 6> Todos los Jugadores </th> </tr>");
    document.write("<tr> <th> Nombre </th>");
    document.write("<th> Posicion </th>");
    document.write("<th> Edad </th>");
    document.write("<th> Estatura </th>");
    document.write("<th> Peso </th> ");
    document.write("<th> Nacionalidad </th> </tr>");
    for(let i = 0; i < jugadores.length; i++){
        document.write("<tr>");
        document.write("<td>" + jugadores[i].nombre + "</td>");
        document.write("<td>" + jugadores[i].pos + "</td>");
        document.write("<td>" + jugadores[i].edad + "</td>");
        document.write("<td>" + jugadores[i].est + "</td>");
        document.write("<td>" + jugadores[i].p + "kg</td>");
        document.write("<td>" + jugadores[i].nac + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

function listarJugadoresArgentinos(jugadores){
    document.write("<p>Jugadores Argentinos:</p>");
    for(let i = 0; i < jugadores.length; i++){
        if(jugadores[i].nac === "Argentina"){
            document.write(jugadores[i].nombre + "<br>");
        }
    }
}

function listarJugadoresPorPeso(jugadores){
    document.write("<p>Jugadores que pesan entre 75 y 80 kg:</p>");
    for(let i = 0; i < jugadores.length; i++){
        if(jugadores[i].p >= 75 && jugadores[i].p <= 80){
            document.write(jugadores[i].nombre  +  "<br>");
        }
    }
}

function jugadorMasAlto(jugadores){
    let jugadorMasAlto = jugadores[0];
    for (let i = 1; i < jugadores.length; i++) {
        if (jugadores[i].est > jugadorMasAlto.est) {
            jugadorMasAlto = jugadores[i];
        }
    }
    document.write("<br> El jugador más alto es: " + "<br>" + jugadorMasAlto.nombre);
}

listarJugadores(vector);
listarJugadoresArgentinos(vector);
listarJugadoresPorPeso(vector);
jugadorMasAlto(vector);
