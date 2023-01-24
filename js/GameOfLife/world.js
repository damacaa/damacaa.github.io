function Mundo() {

  this.nCells = 0;
  this.gen = 0;
  this.surroundingCells = 0;
  this.cells;
  this.temporizador;

  this.on = false;

  this.UpdateSize = function () {
    this.columnas = parseInt(canvas.width / 16);
    this.filas = parseInt(this.columnas * canvas.height / canvas.width);

    this.tamCelX = canvas.width / this.columnas;
    this.tamCelY = canvas.height / this.filas;
  }

  this.Start = function () {
    this.UpdateSize();

    //Inicialización del mundo con todas las células nuertas
    this.gen = 0;
    this.cells = new Array(this.columnas);

    //Rellena el array de arrays para hacer una matriz
    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i] = new Array(this.filas);
    }

    //Guarda una célula muerta en cada posición del array
    for (var i = 0; i < this.cells.length; i++) {
      for (var j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j] = new Celula(0, i * this.tamCelX, j * this.tamCelY, this.tamCelX, this.tamCelY);
        this.cells[i][j].Draw();
      }
    }
  }

  this.RandomStart = function () {
    this.UpdateSize();

    //Inicialización del mundo con células aleatorias
    this.gen = 0;
    this.cells = new Array(this.columnas);

    for (var i = 0; i < this.cells.length; i++) {
      this.cells[i] = new Array(this.filas);
    }

    for (var i = 0; i < this.cells.length; i++) {
      for (var j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j] = new Celula(Math.round(Math.random()), i * this.tamCelX, j * this.tamCelY, this.tamCelX, this.tamCelY);
        this.cells[i][j].Draw();
      }
    }
  }

  this.Update = function () {
    //Actualiza las células para saber si estarán vivas o muertas en el siguiente turno
    this.nCells = 0;
    //Recorre todas las célululas de la matriz
    for (var i = 0; i < this.cells.length; i++) {
      for (var j = 0; j < this.cells[i].length; j++) {
        this.surroundingCells = 0;

        //Recorre todas las célululas vecinas
        for (var a = -1; a < 2; a++) {
          for (var b = -1; b < 2; b++) {

            if (a == 0 && b == 0)
              continue;

            //Comprobacion de cuantas celulas hay alrededor
            var x2 = i + a;
            var y2 = j + b;

            //Borde derecho continua en el izquierdo
            if (x2 < 0) {
              x2 = (this.columnas) - 1;
            } else if (x2 > (this.columnas) - 1) {
              x2 = 0;
            }

            //Borde superior continua en el inferior
            if (y2 < 0) {
              y2 = (this.filas) - 1;
            } else if (y2 > (this.filas) - 1) {
              y2 = 0;
            }

            //Se cuenta si cada una de las células vecinas está viva
            this.surroundingCells += this.cells[x2][y2]["life"];
          }
        }

        //Se actualiza la célula según el número de células vecinas vivas
        this.cells[i][j].Update(this.surroundingCells);
      }
    }
    this.gen++;
  }

  this.Draw = function () {
    //Se recorren todas las células y se pintan en el lienzo
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < this.cells.length; i++) {
      for (var j = 0; j < this.cells[i].length; j++) {

        this.cells[i][j].Draw();
      }
    }
  }

  this.GetInput = function (canvas, event) {
    //Obtiene las coordenadas del ratón en el momento de hacer click y modifica la célula en dicha posición
    const rect = canvas.getBoundingClientRect()
    var x = Math.floor((event.clientX - rect.left) / canvas.width * this.columnas);
    var y = Math.floor((event.clientY - rect.top) / canvas.height * this.filas);

    this.cells[x][y].ProcessInput();
    this.cells[x][y].Draw();
  }

  this.StartTimer = function () {
    //Se inicia el contador
    this.on = true;
    this.temporizador = setInterval(function () {
      world.Update();
      world.Draw();
    }, 100);
  }

  this.StopTimer = function () {
    //Se para el contador
    this.on = false;
    clearInterval(this.temporizador);
  }
}