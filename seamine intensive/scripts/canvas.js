let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let dmc12 = new Image()
dmc12.src = "./images/low-center.png"
let background_canvas = new Image()
background_canvas.src = "./images/background_canvas.png"

// nécessaire pour afficher à l'intérieur du canvas
// needed to render inside the canvas
window.onload = function(){init()};

// sprite de la DeLorean DMC-12
// sprite of the DeLorean DMC-12
function dmc(){
  ctx.drawImage(dmc12, 304, 440);
}

// backgroud
function background(){
  ctx.drawImage(background_canvas, 0, 0);
}

// debouce, pour pouvoir régler la fréquence de rafraîchissement
// debouce, to be able to regulate the refresh rate
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// appelle toutes les fonctions nécessaires au lancement
// call all the functions needed to launch the game
function init() {
  let callBackFunctionName = "draw"
  const drawAll = debounce(function () {
    // permet de permuter entre les frames
    // allow to switch beetween the frames
    switch (callBackFunctionName) {
      case "draw":
        console.log("case 1")
        callBackFunctionName = draw(callBackFunctionName)
        break;
      case "draw2":
        console.log("case 2")
        callBackFunctionName = draw2(callBackFunctionName)
        break;
      case "draw3":
        console.log("case 3")
        callBackFunctionName = draw3(callBackFunctionName)
        break;
    }
    dmc();
    background();
    requestAnimationFrame(drawAll);
    console.log("test")
  }, 75);
  requestAnimationFrame(drawAll);
}

// dessine la route
// draw the road
function draw(i) {

  ctx.fillStyle = 'rgb(28,30,96)'; // left side
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 450);
  ctx.lineTo(0, 300);
  ctx.fill()

  ctx.strokeStyle = 'rgb(40,165,157)'; // left line 1
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(-10, 505);
  ctx.lineTo(-10, 453);
  ctx.lineTo(40, 453);
  ctx.lineTo(40, 505);
  ctx.lineTo(-10, 505);
  ctx.stroke()

  ctx.strokeStyle = 'rgb(40,165,157)'; // left line 2
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-10, 400);
  ctx.lineTo(-10, 435);
  ctx.lineTo(140, 435);
  ctx.lineTo(140, 400);
  ctx.lineTo(-10, 400);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 3
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(-10, 362);
  ctx.lineTo(-10, 387);
  ctx.lineTo(240, 387);
  ctx.lineTo(240, 362);
  ctx.lineTo(-10, 362);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 4
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-10, 330);
  ctx.lineTo(-10, 350);
  ctx.lineTo(300, 350);
  ctx.lineTo(300, 330);
  ctx.lineTo(-10, 330);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 5
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-10, 313);
  ctx.lineTo(-10, 323);
  ctx.lineTo(350, 323);
  ctx.lineTo(350, 313);
  ctx.lineTo(-10, 313);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 6
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-10, 302);
  ctx.lineTo(-10, 308);
  ctx.lineTo(400, 308);
  ctx.lineTo(400, 302);
  ctx.lineTo(-10, 302);
  ctx.stroke()

  ctx.fillStyle = 'rgb(28,30,96)'; // right side
  ctx.beginPath();
  ctx.moveTo(800, 300);
  ctx.lineTo(428, 300);
  ctx.lineTo(800, 450);
  ctx.lineTo(800, 300);
  ctx.fill()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 1
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(800, 452);
  ctx.lineTo(800, 505);
  ctx.lineTo(760, 505);
  ctx.lineTo(760, 452);
  ctx.lineTo(800, 452);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 2
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(800, 400);
  ctx.lineTo(800, 435);
  ctx.lineTo(660, 435);
  ctx.lineTo(660, 400);
  ctx.lineTo(800, 400);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 3
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(800, 362);
  ctx.lineTo(800, 387);
  ctx.lineTo(560, 387);
  ctx.lineTo(560, 362);
  ctx.lineTo(800, 362);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 4
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(800, 330);
  ctx.lineTo(800, 350);
  ctx.lineTo(500, 350);
  ctx.lineTo(500, 330);
  ctx.lineTo(800, 330);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 5
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(800, 313);
  ctx.lineTo(800, 323);
  ctx.lineTo(450, 323);
  ctx.lineTo(450, 313);
  ctx.lineTo(800, 313);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 6
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(800, 302);
  ctx.lineTo(800, 308);
  ctx.lineTo(400, 308);
  ctx.lineTo(400, 302);
  ctx.lineTo(800, 302);
  ctx.stroke()

  ctx.fillStyle = 'rgb(235,139,242)'; // left road vibrators
  ctx.beginPath();
  ctx.moveTo(0, 450)
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 489);
  ctx.lineTo(0, 450);
  ctx.fill();

  ctx.fillStyle = 'rgb(235,139,242)'; // right road vibrators
  ctx.beginPath();
  ctx.moveTo(800, 450)
  ctx.lineTo(428, 300);
  ctx.lineTo(800, 489);
  ctx.lineTo(800, 450);
  ctx.fill();

  ctx.fillStyle = 'rgb(28,30,96)'; //route
  ctx.beginPath();
  ctx.moveTo(428, 300)
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 489);
  ctx.lineTo(0, 600);
  ctx.lineTo(800, 600);
  ctx.lineTo(800, 489);
  ctx.lineTo(428, 300);
  ctx.fill();

  // "pointillés"
  // "lanes separators"
  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(390, 525, 20, 75);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(392, 452, 16, 53);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(393, 400, 14, 35);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(394, 362, 12, 25);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(395, 330, 10, 20);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(396, 313, 8, 10);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(397, 302, 6, 6);
  return "draw2"

}

// dessine la route
// draw the road
function draw2(i) {   // second frame

  ctx.fillStyle = 'rgb(28,30,96)'; // left side
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 450);
  ctx.lineTo(0, 300);
  ctx.fill()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 1
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(0, 476);
  ctx.lineTo(0, 529);
  ctx.lineTo(40, 529);
  ctx.lineTo(40, 476);
  ctx.lineTo(0, 476);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 2
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(0, 417);
  ctx.lineTo(0, 452);
  ctx.lineTo(140, 452);
  ctx.lineTo(140, 417);
  ctx.lineTo(0, 417);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 3
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(0, 375);
  ctx.lineTo(0, 400);
  ctx.lineTo(240, 400);
  ctx.lineTo(240, 375);
  ctx.lineTo(0, 375);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 4
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(0, 341);
  ctx.lineTo(0, 361);
  ctx.lineTo(300, 361);
  ctx.lineTo(300, 341);
  ctx.lineTo(0, 341);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 5
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, 319);
  ctx.lineTo(0, 329);
  ctx.lineTo(350, 329);
  ctx.lineTo(350, 319);
  ctx.lineTo(0, 319);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 6
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 306);
  ctx.lineTo(0, 312);
  ctx.lineTo(400, 312);
  ctx.lineTo(400, 306);
  ctx.lineTo(0, 306);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 7
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 302);
  ctx.lineTo(0, 304);
  ctx.lineTo(400, 304);
  ctx.lineTo(400, 302);
  ctx.lineTo(0, 302);
  ctx.stroke()

  ctx.fillStyle = 'rgb(28,30,96)'; // right side
  ctx.beginPath();
  ctx.moveTo(800, 300);
  ctx.lineTo(428, 300);
  ctx.lineTo(800, 450);
  ctx.lineTo(800, 300);
  ctx.fill()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 1
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(800, 476);
  ctx.lineTo(800, 529);
  ctx.lineTo(760, 529);
  ctx.lineTo(760, 476);
  ctx.lineTo(800, 476);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 2
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(800, 417);
  ctx.lineTo(800, 452);
  ctx.lineTo(660, 452);
  ctx.lineTo(660, 417);
  ctx.lineTo(800, 417);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 3
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(800, 375);
  ctx.lineTo(800, 400);
  ctx.lineTo(560, 400);
  ctx.lineTo(560, 375);
  ctx.lineTo(800, 375);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 4
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(800, 341);
  ctx.lineTo(800, 361);
  ctx.lineTo(500, 361);
  ctx.lineTo(500, 341);
  ctx.lineTo(800, 341);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 5
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(800, 319);
  ctx.lineTo(800, 329);
  ctx.lineTo(450, 329);
  ctx.lineTo(450, 319);
  ctx.lineTo(800, 319);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 6
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(800, 306);
  ctx.lineTo(800, 312);
  ctx.lineTo(400, 312);
  ctx.lineTo(400, 306);
  ctx.lineTo(800, 306);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 7
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(800, 302);
  ctx.lineTo(800, 304);
  ctx.lineTo(400, 304);
  ctx.lineTo(400, 302);
  ctx.lineTo(800, 302);
  ctx.stroke()

  ctx.fillStyle = 'rgb(235,139,242)'; // left road vibrators
  ctx.beginPath();
  ctx.moveTo(0, 450)
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 489);
  ctx.lineTo(0, 450);
  ctx.fill();

  ctx.fillStyle = 'rgb(235,139,242)'; // right road vibrators
  ctx.beginPath();
  ctx.moveTo(800, 450)
  ctx.lineTo(428, 300);
  ctx.lineTo(800, 489);
  ctx.lineTo(800, 450);
  ctx.fill();

  ctx.fillStyle = 'rgb(28,30,96)'; // road
  ctx.beginPath();
  ctx.moveTo(428, 300)
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 489);
  ctx.lineTo(0, 600);
  ctx.lineTo(800, 600);
  ctx.lineTo(800, 489);
  ctx.lineTo(428, 300);
  ctx.fill();

  // "pointillés"
  // "lanes separators"
  ctx.fillStyle = 'rgb(217,60,165)'; // gonna be delete
  ctx.fillRect(390, 550, 20, 50);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(392, 476, 16, 60);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(393, 417, 14, 41);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(394, 375, 12, 28);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(395, 341, 10, 22);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(396, 319, 8, 13);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(397, 306, 6, 7);

  ctx.fillStyle = 'rgb(217,60,165)'; // new line separating the lanes on the road
  ctx.fillRect(398, 301, 4, 2);

  return "draw3"
}

// dessine la route
// draw the road
function draw3(i) {      // third frame

  ctx.fillStyle = 'rgb(28,30,96)'; // left side
  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 450);
  ctx.lineTo(0, 300);
  ctx.fill()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 1
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(0, 501);
  ctx.lineTo(0, 554);
  ctx.lineTo(40, 554);
  ctx.lineTo(40, 501);
  ctx.lineTo(0, 501);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 2
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(0, 435);
  ctx.lineTo(0, 470);
  ctx.lineTo(140, 470);
  ctx.lineTo(140, 435);
  ctx.lineTo(0, 435);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 3
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(0, 387);
  ctx.lineTo(0, 412);
  ctx.lineTo(240, 412);
  ctx.lineTo(240, 387);
  ctx.lineTo(0, 387);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 4
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(0, 351);
  ctx.lineTo(0, 371);
  ctx.lineTo(300, 371);
  ctx.lineTo(300, 351);
  ctx.lineTo(0, 351);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 5
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, 324);
  ctx.lineTo(0, 335);
  ctx.lineTo(350, 335);
  ctx.lineTo(350, 324);
  ctx.lineTo(0, 324);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 6
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 309);
  ctx.lineTo(0, 315);
  ctx.lineTo(400, 315);
  ctx.lineTo(400, 309);
  ctx.lineTo(0, 309);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // left line 7
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 302);
  ctx.lineTo(0, 304);
  ctx.lineTo(400, 304);
  ctx.lineTo(400, 302);
  ctx.lineTo(0, 302);
  ctx.stroke()

  ctx.fillStyle = 'rgb(28,30,96)'; // right side
  ctx.beginPath();
  ctx.moveTo(800, 300);
  ctx.lineTo(428, 300);
  ctx.lineTo(800, 450);
  ctx.lineTo(800, 300);
  ctx.fill()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 1
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(800, 501);
  ctx.lineTo(800, 554);
  ctx.lineTo(760, 554);
  ctx.lineTo(760, 501);
  ctx.lineTo(800, 501);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 2
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(800, 435);
  ctx.lineTo(800, 470);
  ctx.lineTo(660, 470);
  ctx.lineTo(660, 435);
  ctx.lineTo(800, 435);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 3
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(800, 387);
  ctx.lineTo(800, 412);
  ctx.lineTo(560, 412);
  ctx.lineTo(560, 387);
  ctx.lineTo(800, 387);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 4
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(800, 351);
  ctx.lineTo(800, 371);
  ctx.lineTo(500, 371);
  ctx.lineTo(500, 351);
  ctx.lineTo(800, 351);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 5
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(800, 324);
  ctx.lineTo(800, 335);
  ctx.lineTo(450, 335);
  ctx.lineTo(450, 324);
  ctx.lineTo(800, 324);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 6
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(800, 309);
  ctx.lineTo(800, 315);
  ctx.lineTo(400, 315);
  ctx.lineTo(400, 309);
  ctx.lineTo(800, 309);
  ctx.stroke()

  ctx.fillStyle = 'rgb(40,165,157)'; // right line 7
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(800, 302);
  ctx.lineTo(800, 304);
  ctx.lineTo(400, 304);
  ctx.lineTo(400, 302);
  ctx.lineTo(800, 302);
  ctx.stroke()

  ctx.fillStyle = 'rgb(235,139,242)'; // left road vibrators
  ctx.beginPath();
  ctx.moveTo(0, 450)
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 489);
  ctx.lineTo(0, 450);
  ctx.fill();

  ctx.fillStyle = 'rgb(235,139,242)'; // right road vibrators
  ctx.beginPath();
  ctx.moveTo(800, 450)
  ctx.lineTo(428, 300);
  ctx.lineTo(800, 489);
  ctx.lineTo(800, 450);
  ctx.fill();

  ctx.fillStyle = 'rgb(28,30,96)'; // road
  ctx.beginPath();
  ctx.moveTo(428, 300)
  ctx.lineTo(372, 300);
  ctx.lineTo(0, 489);
  ctx.lineTo(0, 600);
  ctx.lineTo(800, 600);
  ctx.lineTo(800, 489);
  ctx.lineTo(428, 300);
  ctx.fill();

  // "pointillés"
  // "lanes separators"
  //  ctx.fillStyle = 'rgb(255, 255, 255)'; // was gonna be delete
  //  ctx.fillRect(390, 588, 20, 25);       // finally delete

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(392, 501, 16, 68);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(393, 435, 14, 47);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(394, 387, 12, 32);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(395, 351, 10, 23);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(396, 324, 8, 17);

  ctx.fillStyle = 'rgb(217,60,165)';
  ctx.fillRect(397, 309, 6, 9);

  ctx.fillStyle = 'rgb(217,60,165)'; // new line separating the lanes on the road
  ctx.fillRect(398, 301, 4, 4);

  return "draw"
}