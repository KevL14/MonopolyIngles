function podium(listOrdenGanadores) {
    tarjetasPodium= document.getElementsByClassName("tarjetasPodium")
    for (let i = 0; i < tarjetasPodium.length; i++) {
        tarjetasPodium[i].style.display = "none"
        }

    switch (cantidadJugadores) {
        case 1:
            tarjetaPodium1.style.display="flex"
            break;
        case 2:
            tarjetaPodium1.style.display="flex"
            tarjetaPodium2.style.display="flex"
            break;
        case 3:
            tarjetaPodium1.style.display="flex"
            tarjetaPodium2.style.display="flex"
            tarjetaPodium3.style.display="flex"
            break;
        case 4:
            tarjetaPodium1.style.display="flex"
            tarjetaPodium2.style.display="flex"
            tarjetaPodium3.style.display="flex"
            break;
        
        default:
            tarjetaPodium1.style.display="none"
            tarjetaPodium2.style.display="none"
            tarjetaPodium3.style.display="none"
            break;
    }

    for (let i = 1; i <= listOrdenGanadores.length; i++) {
        var subIndice= i-1
        if (i!=4){
            nameTarjeta= document.getElementById(`nameTarjetaPodium${i}`);
            imgTarjeta= document.getElementById(`imgTarjetaPodium${i}`)
            imgTarjeta.src=avataresSeleccionados.src[listOrdenGanadores[subIndice]]
            nameTarjeta.innerHTML=positionPlayers.nameTeams[listOrdenGanadores[subIndice]]
    }
    }
}