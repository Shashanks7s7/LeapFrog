var gamecontainer = document.getElementById("gamecontainer");

var base = document.createElement("div");

var playing = false;
base.style.width = "100%";
base.style.height = "20%";
base.style.position = "absolute";
base.style.top = "510px";
base.style.backgroundRepeat = "repeat-x";
base.style.animation = "animatedBackground 15s linear infinite";
base.style.backgroundImage = "url('../base.png')";

var intro = document.createElement("div");
intro.style.backgroundSize = "contain";
intro.style.backgroundPosition = "center";
intro.style.backgroundRepeat = "no-repeat";
intro.style.width = "50%";
intro.style.height = "400px";
intro.style.margin = "40px auto";
intro.style.marginBottom = "80px";
intro.style.backgroundImage = "url('../message.png')";
gamecontainer.appendChild(intro);

var title = document.createElement("div");
title.innerHTML =
  "Click or Press any key to flap upwards. Try not to fall or hit the pipes!";
title.style.color = "black";
title.style.fontSize = "30px";
title.style.textAlign = "center";
title.style.fontStyle = "bolder";
gamecontainer.appendChild(title);

var scoreboard = document.createElement("div");
scoreboard.style.width = "120px";
scoreboard.style.height = "80px";
scoreboard.style.position = "absolute";
scoreboard.style.top = "15px";
scoreboard.style.left = "380px";

var txt1 = document.createElement("div");
txt1.style.color = "white";
txt1.style.fontSize = "20px";
txt1.style.fontStyle = "bolder";
txt1.style.textAlign = "center";
txt1.innerHTML = "SCORE: 0";
scoreboard.appendChild(txt1);

var txt12 = document.createElement("div");
txt12.style.color = "white";
txt12.style.fontSize = "20px";
txt12.style.fontStyle = "bolder";
txt12.style.textAlign = "center";
txt12.innerHTML = "SPEED: 0";
scoreboard.appendChild(txt12);

var gameover = document.createElement("div");

gameover.style.width = "55%";
gameover.style.height = "300px";
gameover.style.backgroundColor = "#d5c1aa ";
gameover.style.overflow = "hidden";
gameover.style.position = "absolute";
gameover.style.borderRadius = "50px";
gameover.style.padding = "20px";
gameover.style.top = "100px";
gameover.style.left = "200px";
var gameoverimg = document.createElement("div");
gameoverimg.style.backgroundSize = "contain";
gameoverimg.style.backgroundPosition = "center";
gameoverimg.style.backgroundRepeat = "no-repeat";
gameoverimg.style.width = "100%";
gameoverimg.style.height = "100px";
gameoverimg.style.backgroundImage = "url('../gameover.png')";
gameover.appendChild(gameoverimg);

var overtext1 = document.createElement("div");
overtext1.style.paddingTop = "40px";
overtext1.style.color = "black";
overtext1.style.fontSize = "50px";
overtext1.style.fontStyle = "bolder";
overtext1.style.textAlign = "center";
overtext1.innerHTML = `TOTAL SCORE: 0`;
gameover.appendChild(overtext1);

var overtext2 = document.createElement("div");
overtext2.style.paddingTop = "40px";
overtext2.style.color = "White";
overtext2.style.fontSize = "40px";
overtext2.style.fontStyle = "bolder";
overtext2.style.textAlign = "center";
overtext2.innerHTML = "Click to Play Again";
gameover.appendChild(overtext2);

intro.addEventListener("click", function () {
  playing = true;
  if (playing == true) {
    gamecontainer.removeChild(intro);
    gamecontainer.removeChild(title);
    birdcreate();
    gamecontainer.appendChild(scoreboard);
    pipecreate();
  }
});

gameover.addEventListener("click", function () {
  gamecontainer.removeChild(gameover);

  pipesCollection.forEach((pipe) => {
    gamecontainer.removeChild(pipe.element);
  });
  pipesCollection = null;
  gamecontainer.removeChild(bird.element);
  velocity = 0;
  birdcreate();
  pipecreate();
});
