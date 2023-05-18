

function lanzarDado(){

    var numeroDado = Math.floor(Math.random() * 4) + 1;
    // limpio aqui el fotograma anterior porque el numero de casilla sera modificado
    document.getElementById(`position`+positionPlayers.player1).innerHTML="";
    document.getElementById(`position`+positionPlayers.player2).innerHTML="";
    // actualizo los turnos logicaTurnosJugadores.js 
    turnos(numeroDado)
}
function actulizarPosiciones(){
    // muestro las nuevas posiciones en sus casillas
    document.getElementById(`position`+positionPlayers.player1).innerHTML=avataresSeleccionados.player1
    document.getElementById(`position`+positionPlayers.player2).innerHTML=avataresSeleccionados.player2
    // verifico si ambos jugadores estan en las mismas casillas para imprimirlos juntos
    if (positionPlayers.player1 == positionPlayers.player2){
        document.getElementById(`position`+positionPlayers.player1).innerHTML= avataresSeleccionados.player1 + avataresSeleccionados.player2
    }
}