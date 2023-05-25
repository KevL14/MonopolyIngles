var turnoJugador = 1;
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
    actualizarPosiciones()
    ganaJugador()
    // sumo 1 para que vaya el siguiente jugador
    turnoJugador +=1;
    // si se sobre pasa a la cantidad de jugadores en juego, se resetea al primer jugador 
    if (turnoJugador > cantidadJugadores){
        turnoJugador = 1;
    }
    // voy a actualizar las posiciones pero de forma visual 
}
// funcion que va  a ver cuantas vueltas tiene cada jugador, el que tenga igual a la cantidad de vueltas , gana
function ganaJugador(){
    if (positionPlayers.vueltas.player1 == cantidadVueltas){
        alert("Gana el jugador 1");
        return true;
        }else if (positionPlayers.vueltas.player2 == cantidadVueltas){
            alert("Gana el jugador 2");
            return true;
            }else if (positionPlayers.vueltas.player3 == cantidadVueltas){
                alert("Gana el jugador 3");
                return true;
                }else if (positionPlayers.vueltas.player4 == cantidadVueltas){
                    alert("Gana el jugador 4");
                    return true;
                    }else{
                        return false;
                        }
                        }