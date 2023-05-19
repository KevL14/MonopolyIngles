


var tablaDeJuego = `
<table  id="tableGame">
      <tr>
        <td class="casillaGo" id="position0"></td>
        <td class="preguntasNormales" id="position1"></td>
        <td class="casillasNormales" id="position2"></td>
        <td class="preguntasNormales" id="position3"></td>
        <td class="preguntasDificiles" id="position4"></td>
        <td class="preguntasNormales" id="position5"></td>
        <td class="preguntasBomba" id="position6"></td>
        <td class="preguntasNormales" id="position7"></td>
        <td class="casillasNormales" id="position8"></td>
        <td class="preguntasNormales" id="position9"></td>
        <td class="preguntasDificiles" id="position10"></td>
        <td class="preguntasNormales" id="position11"></td>

        <!-- filas verticales -->
      </tr>
      <tr>
          <!-- primero izq y luego der -->
        <td class="preguntasBomba" id="position31"></td>
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

        <td class="casillasNormales" id="position12"></td>
      </tr>
      <tr>
        <td class="preguntasDificiles" id="position30"></td>

        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
        <td class="espaciosVacios" id="dado" onclick="lanzarDado()"></td><!-- Celda vacía -->
        <td class="espaciosVacios"></td><!-- Celda vacía -->
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