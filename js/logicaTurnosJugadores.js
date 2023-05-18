var turnoJugador = 1;
// cantidad jugadores en documento pantallaPrincipalConfing.js 
var positionPlayers ={
    player1: 0,
    player2:0,
    player3:0,
    player4:0
}

function turnos(numAzar){
    switch (turnoJugador) {
        // actualizo los numeros de posiciones segun de quien vaya el turno 
        case 1:
            positionPlayers.player1 = positionPlayers.player1 + numAzar;
            if (positionPlayers.player1 > 31){
                positionPlayers.player1 = 0;
            }
            break;
        case 2:
            positionPlayers.player2 = positionPlayers.player2 + numAzar;
            if (positionPlayers.player2 > 31){
                positionPlayers.player2 = 0;
            }
            break;
        case 3:
            positionPlayers.player3 = positionPlayers.player3 + numAzar;
            if (positionPlayers.player3 > 31){
                positionPlayers.player3 = 0;
            }
            break;
        case 4:
            positionPlayers.player4 = positionPlayers.player4 + numAzar;
            if (positionPlayers.player4 > 31){
                positionPlayers.player4 = 0;
            }
            break;
    }
    // sumo 1 para que vaya el siguiente jugador 
    turnoJugador +=1;
    // si se sobre pasa a la cantidad de jugadores en juego, se resetea al primer jugador 
    if (turnoJugador > cantidadJugadores){
        turnoJugador = 1;
    }
    // voy a actualizar las posiciones pero de forma visual 
    actulizarPosiciones()
    
}