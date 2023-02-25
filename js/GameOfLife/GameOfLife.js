"use strict";

let canvas = document.getElementById("gameOfLifeCanvas");
let contexto = canvas.getContext("2d");
let lastWidth = canvas.width;


window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  canvas.width = document.getElementById('gameOfLifeCanvas').clientWidth;
  canvas.height = document.getElementById('gameOfLifeCanvas').clientHeight;

  if (world && lastWidth != canvas.width) {
    world.RandomStart();
    lastWidth = canvas.width;
  }
}

resizeCanvas();

//Crea el objeto de la clase mundo
var world = new Mundo();
world.RandomStart();


/*canvas.addEventListener('mousedown', function (e) {
  //world.GetInput(canvas, e)
})*/


window.addEventListener('keydown', (e) => {
  if (e.key == 'r' || e.key == 'R') {
    world.RandomStart();
  }
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target;

    if (entry.isIntersecting) {
      world.StartTimer();
      return;
    }

    world.StopTimer();
  });
});

observer.observe(canvas);


