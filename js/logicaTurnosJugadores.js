var turnoJugador = 1;
var ordenGanadores=[];
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


function turnos(numAzar){
    
    numDadoActual = numAzar
    switch (turnoJugador) {
        // actualizo los numeros de posiciones segun de quien vaya el turno 
        case 1:
            positionPlayers.posicionAnterior.player1 = positionPlayers.player1;
            positionPlayers.player1 = positionPlayers.player1 + numAzar;

            if(positionPlayers.player1 < 0){
                positionPlayers.player1 = 0;
            }else if (positionPlayers.player1 > 31){
                positionPlayers.player1 = 0;
                positionPlayers.vueltas.player1 += 1
            }
            break;
        case 2:
            positionPlayers.posicionAnterior.player2 = positionPlayers.player2
            positionPlayers.player2 = positionPlayers.player2 + numAzar;

            if(positionPlayers.player2 < 0){
                positionPlayers.player2 = 0;
            }else if (positionPlayers.player2 > 31){
                positionPlayers.player2 = 0;
                positionPlayers.vueltas.player2 += 1
            }
            break;
        case 3:
            positionPlayers.posicionAnterior.player3 = positionPlayers.player3
            positionPlayers.player3 = positionPlayers.player3 + numAzar;
            if(positionPlayers.player3 < 0){
                positionPlayers.player3 = 0;
            }else if (positionPlayers.player3 > 31){
                positionPlayers.player3 = 0;
                positionPlayers.vueltas.player3 += 1
            }
            break;
        case 4:
            positionPlayers.posicionAnterior.player4 = positionPlayers.player4
            positionPlayers.player4 = positionPlayers.player4 + numAzar;
            if(positionPlayers.player4 < 0){
                positionPlayers.player4 = 0;
            }else if (positionPlayers.player4 > 31){
                positionPlayers.player4 = 0;
                positionPlayers.vueltas.player4 += 1
            }
            break;
        }
        actualizarPosiciones(0)
        ganaJugador()
    // sumo 1 para que vaya el siguiente jugador
    turnoJugador +=1;
         // si se sobre pasa a la cantidad de jugadores en juego, se resetea al primer jugador 
         if (turnoJugador > cantidadJugadores){
            turnoJugador = 1;
        }
    var siguienteJugador = "player"+turnoJugador
    alert(siguienteJugador)


     if (cantidadJugadores > 1) {
         if (positionPlayers.penalidades[siguienteJugador]>0) {
             while (positionPlayers.penalidades[siguienteJugador]>0) {
             if (positionPlayers.penalidades[siguienteJugador]>0) {
                 positionPlayers.penalidades[siguienteJugador]-=1
                 turnoJugador +=1;
                 siguienteJugador = "player"+turnoJugador
                 if (turnoJugador > cantidadJugadores){
                    turnoJugador = 1;
                }
             }
             alert("sigue "+ turnoJugador)
             }
         }
     }
}


// funcion que va  a ver cuantas vueltas tiene cada jugador, el que tenga igual a la cantidad de vueltas , gana
function ganaJugador(){
    if (positionPlayers.vueltas.player1 == cantidadVueltas){
        if (ordenGanadores.indexOf("player1")==-1) {
            ordenGanadores.push("player1") 
        }
    }else if (positionPlayers.vueltas.player2 == cantidadVueltas){
        if (ordenGanadores.indexOf("player2")==-1) {
            ordenGanadores.push("player2")
        }
    }else if (positionPlayers.vueltas.player3 == cantidadVueltas){
        if (ordenGanadores.indexOf("player3")==-1) {
            ordenGanadores.push("player3")
        }
    }else if (positionPlayers.vueltas.player4 == cantidadVueltas){
        if (ordenGanadores.indexOf("player4")==-1) {
            ordenGanadores.push("player4")
        }
    }else{
        
    }
    
    // valoro si la cantidad de jugadores que ganaron son mayores a los que juegan

    if (ordenGanadores.length ==cantidadJugadores) {
        podium(ordenGanadores)
        mostrarPaginas(4,3)
    }
}