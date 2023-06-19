var turnoJugador = 1;
var turnoJugadorAnterior=1
var rondaActual=1;
var ordenGanadores=[];
var colorTarjetaRonda="#0e95254f";
var numDadoActual;

// cantidad jugadores en documento pantallaPrincipalConfing.js 
var positionPlayers ={
    player1:0,
    player2:0,
    player3:0,
    player4:0,
    vueltas:{
        player1:0,
        player2:0,
        player3:0,
        player4:0,
    },penalidades:{
        player1:0,
        player2:0,
        player3:0,
        player4:0
    },
    posicionAnterior:{
        player1:0,
        player2:0,
        player3:0,
        player4:0,

    },
    nameTeams:{
        player1:"",
        player2:"",
        player3:"",
        player4:"",
    }
}


async function turnos(numAzar){
    
    numDadoActual = numAzar
    switch (turnoJugador) {
        // actualizo los numeros de posiciones segun de quien vaya el turno 
        case 1:
            positionPlayers.posicionAnterior.player1 = positionPlayers.player1;
            positionPlayers.player1 = positionPlayers.player1 + numAzar;

            if(positionPlayers.player1 < 0){
                positionPlayers.player1 = 0;
            }
            break;
        case 2:
            positionPlayers.posicionAnterior.player2 = positionPlayers.player2
            positionPlayers.player2 = positionPlayers.player2 + numAzar;

            if(positionPlayers.player2 < 0){
                positionPlayers.player2 = 0;
            }
            break;
        case 3:
            positionPlayers.posicionAnterior.player3 = positionPlayers.player3
            positionPlayers.player3 = positionPlayers.player3 + numAzar;
            if(positionPlayers.player3 < 0){
                positionPlayers.player3 = 0;
            }
            break;
        case 4:
            positionPlayers.posicionAnterior.player4 = positionPlayers.player4
            positionPlayers.player4 = positionPlayers.player4 + numAzar;
            if(positionPlayers.player4 < 0){
                positionPlayers.player4 = 0;
            }
            break;
        }
        actualizarPosiciones(0)
        ganaJugador()
}

async function actualizarTurno() {
    // sumo 1 para que vaya el siguiente jugador
    turnoJugadorAnterior=turnoJugador
    turnoJugador +=1;
    
    
    // si se sobre pasa a la cantidad de jugadores en juego, se resetea al primer jugador 
    if (turnoJugador > cantidadJugadores){
        turnoJugador = 1;
        rondaActual++
        informacionRondaJugadores(1)
        mostrarColor_Turno()

    }

    var siguienteJugador = "player"+turnoJugador


     if (cantidadJugadores > 1) {
         if (positionPlayers.penalidades[siguienteJugador]>0) {
             while (positionPlayers.penalidades[siguienteJugador]>0) {
                 colorTarjetaRonda="red"//color verde trasparente 
                informacionRondaJugadores(1)
                 mostrarColor_Turno()
                 await dalay(1000)
                 positionPlayers.penalidades[siguienteJugador]-=1
                 turnoJugadorAnterior=turnoJugador
                 turnoJugador +=1;
                 siguienteJugador = "player"+turnoJugador
                 if (turnoJugador > cantidadJugadores){
                    turnoJugador = 1;
                    siguienteJugador = "player"+turnoJugador
                    rondaActual++
                    document.getElementById("titleRonda_numeroRonda").innerHTML=`Round ${rondaActual}`
                }
            }
            colorTarjetaRonda="#0e95254f"
            mostrarColor_Turno()
            informacionRondaJugadores(1)
        }else{
            colorTarjetaRonda="#0e95254f"
            await dalay(700)
            informacionRondaJugadores(1)
            mostrarColor_Turno()

        }
     }
     mostrarColor_Turno()

}
// funcion que va  a ver cuantas vueltas tiene cada jugador, el que tenga igual a la cantidad de vueltas , gana
async function ganaJugador(){
    if (positionPlayers.vueltas.player1 == cantidadVueltas){
        if (ordenGanadores.indexOf("player1")==-1) {
            ordenGanadores.push("player1") 
        }
    }
    if (positionPlayers.vueltas.player2 == cantidadVueltas){
        if (ordenGanadores.indexOf("player2")==-1) {
            ordenGanadores.push("player2")
        }
    }
    if (positionPlayers.vueltas.player3 == cantidadVueltas){
        if (ordenGanadores.indexOf("player3")==-1) {
            ordenGanadores.push("player3")
        }
    }
    if (positionPlayers.vueltas.player4 == cantidadVueltas){
        if (ordenGanadores.indexOf("player4")==-1) {
            ordenGanadores.push("player4")
        }
    }
    
    // valoro si la cantidad de jugadores que ganaron son mayores a los que juegan
    if (cantidadJugadores==4) {
        if(ordenGanadores.length == 3){
            await dalay(2000)
            podium(ordenGanadores)
            mostrarPaginas(4,3)
        }
    }else if (cantidadJugadores<4){
        if(ordenGanadores.length == cantidadJugadores){
            await dalay(2000)
            podium(ordenGanadores)
            mostrarPaginas(4,3)
        }
    }
}