// sonido ambiente configuracion
switchSonidoAmbiente.checked=false
function activarSonido(sonido) {
    var switchUsado;
    var sonidoUsado;
    switch (sonido) {
        case "ambiente":
            switchUsado=document.getElementById("switchSonidoAmbiente")
            sonidoUsado=sonidoAmbiente
            sonidoAmbiente.loop=true
            sonidoAmbiente.volume = 0.1;// Volumen al 30%
            break;
    
        default:
            break;
    }
    if (switchUsado.checked==true) {
        sonidoUsado.play()        
    }else{
        sonidoUsado.pause()
    }
}