var carasDado ={
    cara0:"",
    cara1:'<img src="img/carasDado/cara1Fondo.png" alt="1"/>',
    cara2:'<img src="img/carasDado/cara2Fondo.png" alt="2"/>',
    cara3:'<img src="img/carasDado/cara3Fondo.png" alt="3"/>',
    cara4:'<img src="img/carasDado/cara4Fondo.png" alt="4"/>',
    cara5:'<img src="img/carasDado/cara5Fondo.png" alt="5"/>',
    cara6:'<img src="img/carasDado/cara6Fondo.png" alt="6"/>',
}



var numeroDadoActual;
// la funcion que genera los numeros del dado
function lanzarDado(){

    var numeroDado = Math.floor(Math.random() * 6) + 1;
    // modifico la posicion actual para actualizar el dado 
    numeroDadoActual = numeroDado
    // actualizo los turnos logicaTurnosJugadores.js 
    animacionDado()
}
// actualizador de imagen que se ejecuta despues de resetear el tablero 
function actualizarImgDado() {
        // busco donde se imprime el dado 
        var btnDado = document.getElementById("dado");
        var imgDado ;
    // actualizo el numero del dado 
    switch (numeroDadoActual) {
        case 1:
            imgDado = carasDado.cara1;
            break;

        case 2:
            imgDado = carasDado.cara2;
            break;

        case 3:
            imgDado = carasDado.cara3;
            break;

        case 4:
            imgDado = carasDado.cara4;
            break;
        case 5:
            imgDado = carasDado.cara5;
            break;
        case 6:
            imgDado = carasDado.cara6;
            break;
        
    }
    // en un inicio no hay numeroDadoActual, por lo tanto el dado iniciara en 1
    if (imgDado == null || imgDado == undefined){
        imgDado = carasDado.cara1;
    }
    // imprimo el dado actual 
    btnDado.innerHTML = imgDado;
}
var numAnimacionRamdom = 0;
async function animacionDado(){
    var btnDado = document.getElementById("dado");
    var numAnimacionRamdomimg = Math.floor(Math.random() * 6) + 1
    var nombreCaraDado="cara"+numAnimacionRamdomimg
        if(numAnimacionRamdom <=5) {
            await dalay(100)
            numAnimacionRamdom +=1
            cambiarImgDadoRamdon()
        }else{
            numAnimacionRamdom = 0
            await dalay(400)
            turnos(numeroDadoActual)
        }
        async function cambiarImgDadoRamdon(){
            console.log(numAnimacionRamdom)
            btnDado.innerHTML=carasDado[nombreCaraDado]
            await dalay(100)
            animacionDado()
        }
        

    }
    function dalay(time) {
        return new Promise(resolve=>
          setTimeout(resolve,time)
          )
      }
