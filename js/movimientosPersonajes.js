
var numeroJugadoresMismaPosicion=[];
var jugadoresjuntosAnteriores="";

function actulizarPosiciones(){
    
    var imprimirJugadoresJuntos = "";
    
    // limpio el tablero volviendolo a mostrar 
    document.getElementById("block2").innerHTML =  tablaDeJuego;
    actualizarImgDado()

    // muestro las nuevas posiciones en sus casillas
    
    for (let i = 1; i <= cantidadJugadores ; i++) {
        switch (i) {
            case 1:
                document.getElementById(`position`+positionPlayers.player1).innerHTML=avataresSeleccionados.player1;
                break;
            case 2:
                    
                document.getElementById(`position`+positionPlayers.player2).innerHTML=avataresSeleccionados.player2;
            break;
    
            case 3:
                document.getElementById(`position`+positionPlayers.player3).innerHTML=avataresSeleccionados.player3;

            break;
    
            case 4:
                document.getElementById(`position`+positionPlayers.player4).innerHTML=avataresSeleccionados.player4;
            break;
            // case 5:
            //     document.getElementById(`position`+positionPlayers.player5).innerHTML=avataresSeleccionados.player5;
            // break;
            // case 6:
            //     document.getElementById(`position`+positionPlayers.player6).innerHTML=avataresSeleccionados.player6;
            // break;
            // case 7:
            //     document.getElementById(`position`+positionPlayers.player7).innerHTML=avataresSeleccionados.player7;
            //     break;
            //     case 8:
            //         document.getElementById(`position`+positionPlayers.player8).innerHTML=avataresSeleccionados.player8;
            //         break;
        }

    }
            // verifico que si hay jugadores en las mismas posiciones
            // busco a ver si hay jugadores en mismas pocisiones, esto me hara una lista
            numeroJugadoresMismaPosicion= obtenerClavesValoresIguales(positionPlayers);
            // por errores la lista se acumulara con valores empty, solo pido que tan larga es y los valores
            // de posiciones iguales estaran en la ultima lista 
            var numCombinacionesPosibles =numeroJugadoresMismaPosicion.length-1
            // guardo la combinacion posible anterior
            

            // veo a ver si la lista de la ultima posicion tiene valores
    for (let i = 0; i < numeroJugadoresMismaPosicion[numCombinacionesPosibles].length; i++) {

        // en este switch voy a sumarle a una variable html los jugadores que tengan mismas posciciones para que esten juntos 
        // lo cual seria:
        switch (numeroJugadoresMismaPosicion[numCombinacionesPosibles][i]) {
            // agarra el primer valor de la lista y ve que jugador es y lo suma al html
            case "player1":
                imprimirJugadoresJuntos =imprimirJugadoresJuntos + avataresSeleccionados.player1;
                document.getElementById(`position`+positionPlayers.player1).innerHTML=imprimirJugadoresJuntos
                break;
            case "player2":
                imprimirJugadoresJuntos =imprimirJugadoresJuntos + avataresSeleccionados.player2;
                document.getElementById(`position`+positionPlayers.player2).innerHTML=imprimirJugadoresJuntos
                break;
            case "player3":
                imprimirJugadoresJuntos =imprimirJugadoresJuntos + avataresSeleccionados.player3;
                document.getElementById(`position`+positionPlayers.player3).innerHTML=imprimirJugadoresJuntos
                break;
            case "player4":
                imprimirJugadoresJuntos =imprimirJugadoresJuntos + avataresSeleccionados.player4;
                document.getElementById(`position`+positionPlayers.player4).innerHTML=imprimirJugadoresJuntos
                break;
                case "player5":
                    imprimirJugadoresJuntos =imprimirJugadoresJuntos + avataresSeleccionados.player5;
                    document.getElementById(`position`+positionPlayers.player5).innerHTML=imprimirJugadoresJuntos
                    break;
                    case "player6":
                        imprimirJugadoresJuntos =imprimirJugadoresJuntos + avataresSeleccionados.player6;
                        document.getElementById(`position`+positionPlayers.player6).innerHTML=imprimirJugadoresJuntos
                        break;
                        case "player7":
                            imprimirJugadoresJuntos =imprimirJugadoresJuntos + avataresSeleccionados.player7;
                            document.getElementById(`position`+positionPlayers.player7).innerHTML=imprimirJugadoresJuntos
                            break;
                            case "player8":
                                imprimirJugadoresJuntos =imprimirJugadoresJuntos + avataresSeleccionados.player8;
                                document.getElementById(`position`+positionPlayers.player8).innerHTML=imprimirJugadoresJuntos
                                break;
            default:
                break;
        }
    }
    // en este switch voy a verificar si hay jugadores 2 en 2, la razon es debido que hasta aqui
    //solo se imprime los ultimos grupos y no los anteriores y en ese caso solo se imprime 2 y 1
    // estaria trabajando con la antepenultima jugada **** este error se presenta en 4 jugadores


        // averiguo si en las jugadas hechas antes de la mas reciente existe una lista con elementos 
        if (cantidadJugadores == 4) {
            var elementosPenultimaJugada = [];
            elementosPenultimaJugada = numeroJugadoresMismaPosicion[numCombinacionesPosibles-1]
            // voy verificando que nada este vacio
           if (elementosPenultimaJugada != []){
               // busco el indice de la jugada anterior de la mas nueva (antepenultima) y veo cuantos elementos tiene
               var indexJugadoresAnterioresJuntos=numeroJugadoresMismaPosicion[numCombinacionesPosibles-1]
               // pregunto si tiene al menos 1 elemento 
               if (indexJugadoresAnterioresJuntos!=[]) {
               // tomo la lista de la antepenultima jugada
               var posicionRetomar =   numeroJugadoresMismaPosicion[numCombinacionesPosibles-1]
                   
               // y la imprimo 
               if (posicionRetomar != undefined){
                for (let index = 0; index < 2; index++) {
                    switch (posicionRetomar[index]) {
                        // agarra el primer valor de la lista y ve que jugador es y lo suma al html
                        case "player1":
                            jugadoresjuntosAnteriores = jugadoresjuntosAnteriores +avataresSeleccionados.player1
                            document.getElementById(`position`+positionPlayers.player1).innerHTML=jugadoresjuntosAnteriores
                            break;
                        case "player2":
                            jugadoresjuntosAnteriores = jugadoresjuntosAnteriores +avataresSeleccionados.player2
                            document.getElementById(`position`+positionPlayers.player2).innerHTML=jugadoresjuntosAnteriores
                            break;
                        case "player3":
                            jugadoresjuntosAnteriores = jugadoresjuntosAnteriores +avataresSeleccionados.player3
                            document.getElementById(`position`+positionPlayers.player3).innerHTML=jugadoresjuntosAnteriores
                            break;
                        case "player4":
                            jugadoresjuntosAnteriores = jugadoresjuntosAnteriores +avataresSeleccionados.player4
                            document.getElementById(`position`+positionPlayers.player4).innerHTML=jugadoresjuntosAnteriores
                            break;
                            case "player5":
                                jugadoresjuntosAnteriores= jugadoresjuntosAnteriores+avataresSeleccionados.player5
                                document.getElementById(`position`+positionPlayers.player5).innerHTML=jugadoresjuntosAnteriores
                                break;
                                case "player6":
                                    jugadoresjuntosAnteriores= jugadoresjuntosAnteriores+avataresSeleccionados.player6
                                    document.getElementById(`position`+positionPlayers.player6).innerHTML=jugadoresjuntosAnteriores
                                break;
                                case "player7":
                                    jugadoresjuntosAnteriores= jugadoresjuntosAnteriores+avataresSeleccionados.player7
                                    document.getElementById(`position`+positionPlayers.player7).innerHTML=jugadoresjuntosAnteriores
                                    break;
                                    case "player8":
                                        jugadoresjuntosAnteriores= jugadoresjuntosAnteriores+avataresSeleccionados.player8
                                        document.getElementById(`position`+positionPlayers.player8).innerHTML=jugadoresjuntosAnteriores
                                        break;
                        default:
                            break;
                     }
               
                   }
               }
           } 
        }
    }
    // luego repite el proceso pero con el otro jugador que salga que este en la misma pocicion y lo suma al mismo html 
    
}


// busco los valores que son iguales y los retorno 
function obtenerClavesValoresIguales(objeto) {
  var clavesValoresIguales = [];
  numeroJugadoresMismaPosicion=[];
    
  Object.keys(objeto).forEach(clave => {
    var valor = objeto[clave];
    if (Object.values(objeto).filter(v => v === valor).length > 1) {
    //   if (!clavesValoresIguales[valor]) {
    //     clavesValoresIguales[valor] = [clave];
    //   } else {
    //     clavesValoresIguales[valor].ramplace(clave);
    //   }
      if (!clavesValoresIguales.hasOwnProperty(valor)) {
        clavesValoresIguales[valor] = [clave];
      } else {
        clavesValoresIguales[valor].push(clave);
      }
    }
  });
  Object.keys(clavesValoresIguales).forEach(valor => {
    if (clavesValoresIguales[valor].length === 0) {
      delete clavesValoresIguales[valor];
    }
  });

  return clavesValoresIguales;

  
}

