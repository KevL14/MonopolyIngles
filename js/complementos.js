
var tablaDeJuego = `
<table  id="tableGame">
      <tr>
        <td id="position0" class="casillaGo"></td>
        <td id="position1" class="preguntasNormales"></td>
        <td id="position2" class="casillasNormales"></td>
        <td id="position3" class="preguntasNormales"></td>
        <td id="position4" class="preguntasDificiles"></td>
        <td id="position5" class="preguntasNormales"></td>
        <td id="position6" class="preguntasBomba"></td>
        <td id="position7" class="preguntasNormales"></td>
        <td id="position8" class="casillasNormales"></td>
        <td id="position9" class="preguntasNormales"></td>
        <td id="position10" class="preguntasDificiles"></td>
        <td id="position11" class="preguntasNormales"></td>

        <!-- filas verticales -->
      </tr>
      <tr>
          <!-- primero izq y luego der -->
        <td class="preguntasBomba" id="position31"></td>
        <td class="espaciosVacios">
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="settingsButton_TablePage" viewBox="0 0 16 16" onclick="mostrarPaginas(0,3)">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->

        <td class="casillasNormales" id="position12"></td>
      </tr>
      <tr>
        <td class="preguntasDificiles" id="position30"></td>

        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios" id="centerTable">
        
        
        <div id="contenedorInfoRondas">
    <span id="titleRonda">
      <h1 id="titleRonda_numeroRonda"></h1>
    </span>
    <div id="contenedorInfoRondas_Players">
      <span id="infoRondas_Player1" class="infoRondas_Players">
        <p id="infoNombre_Table_Player1">Lap: 1</p>

        <img id="infoImg_Table_Player1" src="img/personajes/Player1.png" alt="">
        <p id="infoVueltas_Table_Player1">Lap: 1</p>
        <p id="infoPenalidad_Table_Player1">Penalidades: 1</p>
        </span>
      <span id="infoRondas_Player2" class="infoRondas_Players">
        <p id="infoNombre_Table_Player2">Lap: 1</p>

        <img id="infoImg_Table_Player2" src="img/personajes/Player1.png" alt="">
        <p id="infoVueltas_Table_Player2">Lap: 1</p>
        <p id="infoPenalidad_Table_Player2">Penalidades: 1</p>
        </span>
      <span id="infoRondas_Player3" class="infoRondas_Players">
        <p id="infoNombre_Table_Player3">Lap: 1</p>

        <img id="infoImg_Table_Player3" src="img/personajes/Player1.png" alt="">
        <p id="infoVueltas_Table_Player3">Lap: 1</p>
        <p id="infoPenalidad_Table_Player3">Penalidades: 1</p>
        </span>
      <span id="infoRondas_Player4" class="infoRondas_Players">
        <p id="infoNombre_Table_Player4">Lap: 1</p>

        <img id="infoImg_Table_Player4" src="img/personajes/Player1.png" alt="">
        <p id="infoVueltas_Table_Player4">Lap: 1</p>
        <p id="infoPenalidad_Table_Player4">Penalidades: 1</p>
        </span>
    </div>
    <span id="dado" onclick="lanzarDado()"></span>
  </div>
        
        </td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="preguntasBomba" id="position13"></td>
      </tr>

      <tr>
        <td class="preguntasNormales" id="position29"></td>

        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="preguntasNormales" id="position14"></td>
      </tr>


      <tr>
        <td class="preguntasDificiles" id="position28"></td>

        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="casillasNormales" id="position15"></td>
      </tr>
      <!-- ... Resto de las filas de la tabla ... -->
      <tr>
          <td class="preguntasNormales" id="position27"></td>
          <td class="casillasNormales" id="position26"></td>
          <td class="preguntasNormales" id="position25"></td>
          <td class="preguntasBomba" id="position24"></td>
          <td class="preguntasNormales" id="position23"></td>
          <td class="preguntasDificiles" id="position22"></td>
          <td class="casillasNormales" id="position21"></td>
          <td class="preguntasNormales" id="position20"></td>
          <td class="preguntasBomba" id="position19"></td>
          <td class="casillasNormales" id="position18"></td>
          <td class="preguntasNormales" id="position17"></td>
          <td class="casillaFree" id="position16"></td>
    
      </tr>
    </table>`;


    // preguntas