function reset() {
    // logica de turnos
    colorTarjetaRonda = "#0e95254f";
    ordenGanadores = [];
    rondaActual = 1;
    turnoJugadorAnterior = 1;
    turnoJugador = 1;
    positionPlayers = {
        player1: 0,
        player2: 0,
        player3: 0,
        player4: 0,
        vueltas: {
          player1: 0,
          player2: 0,
          player3: 0,
          player4: 0,
        },
        penalidades: {
          player1: 0,
          player2: 0,
          player3: 0,
          player4: 0,
        },
        posicionAnterior: {
          player1: 0,
          player2: 0,
          player3: 0,
          player4: 0,
        },
        nameTeams: {
          player1: "",
          player2: "",
          player3: "",
          player4: "",
        },
      };

    // movePerson
    numeroJugadoresMismaPosicion = [];
    jugadoresjuntosAnteriores = "";
    primeraRonda=true

    // pantalla principal
    avataresSeleccionados = {
        player1: "",
        player2: "",
        player3: "",
        player4: "",
        numeroAvatarSeleccionado: {
          player1: 1,
          player2: 1,
          player3: 1,
          player4: 1,
        },
        src: {
          player1: "",
          player2: "",
          player3: "",
          player4: "",
        },
      };
      cantidadJugadores = 1;
    cantidadVueltas = 1;
    cantidadJugadoresPartida(cantidadJugadores)
    seleccionAvatar(1);
    numVueltas(cantidadVueltas)
}