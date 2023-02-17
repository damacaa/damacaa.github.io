
function Celula(life, x, y, sizeX, sizeY) {
  this.life = life;
  this.nextLife = life;
  this.turnos = 0;
  //La posición de la célula
  this.x = x;
  this.y = y;
  //El tamaño de la célula
  this.sizeX = sizeX + 1;
  this.sizeY = sizeY + 1;



  this.Update = function (inSurroundingCells) {

    //Calcula el siguiente estado en base al estado actual y a cuantas celulas vivas haya
    if (this.life == 0 && inSurroundingCells == 3) {
      //Nace una celula
      this.nextLife = 1;
    } else if (this.life == 1 && (inSurroundingCells == 3 || inSurroundingCells == 2)) {
      //Sigue viva
      this.nextLife = 1;
    } else if (this.life == 1 && (inSurroundingCells > 3 || inSurroundingCells < 2)) {
      //Muere
      this.nextLife = 0;
    } else { }

    //Comprueba si ha cambiado de estado
    if (this.nextLife == this.life) {
      this.turnos++;
    } else {
      this.turnos = 0;
    }
  }

  this.Draw = function () {
    //Actualiza la vida de la celula y la pinta en función de si está viva
    this.life = this.nextLife;
    let color;

    if (this.life == 1) {
      color = getComputedStyle(document.documentElement).getPropertyValue('--blue');
    } else {
      color = getComputedStyle(document.documentElement).getPropertyValue('--red');
    }

    contexto.fillStyle = color;
    contexto.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--grey');

    contexto.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    /*let lineWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--border-width')) / 2;
    contexto.lineWidth = lineWidth;

    if (lineWidth > 0)
      contexto.strokeRect(this.x, this.y, this.sizeX, this.sizeY);*/
  }

  this.ProcessInput = function () {
    //Si la celula está viva pasa a estar muerta y viceversa
    if (this.life == 0) {
      this.nextLife = 1;
    } else if (this.life == 1) {
      this.nextLife = 0;
    }
    //Dibuja la célula actualizada
    this.Draw();
  }
}