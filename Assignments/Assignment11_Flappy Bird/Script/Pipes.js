class Pipes {
  constructor(x, y, height, img, position) {
    (this.x = x),
      (this.y = y),
      (this.height = height),
      (this.img = img),
      (this.position = position);
  }

  create() {
    this.element = document.createElement("div");
    this.element.style.height = toPX(this.height);
    this.element.style.width = toPX(70);
    this.element.style.position = "absolute";
    this.element.style.left = toPX(this.x);
    this.element.style.top = toPX(this.y);
    this.element.style.backgroundSize = "cover";
    this.element.style.backgroundPosition = this.position;
    this.element.style.overflow = "hidden";
    this.element.style.backgroundRepeat = "no-repeat";
    this.element.style.backgroundImage = `url(${this.img})`;
    gamecontainer.appendChild(this.element);
  }
  moveRighttoLeft() {
    
    this.x = this.x - speed - 2;
    this.element.style.left = toPX(this.x);
    
    if (this.x <= -80) {
      this.x = 1000;

    
      if (this.y == 0) {
        var point = Math.random();
        if (point < 0.3) {
          point = 0.9;
          console.log(point);
        }
        this.element.style.height = toPX(
          Math.floor((point * gamecontainer.offsetHeight) / 3 + 100)
        );
      }
      if (this.element.height == 300) {
        this.element.style.top = toPX(
          gamecontainer.offsetHeight - parseInt(pipesCollection[0].height - 50)
        );
      }
    }
  }

  collisionDetect() {
    for (let j = 0; j < pipesCollection.length; j++) {
      let ot1 = pipesCollection[j];

      for (let i = 0; i <= 50; i++) {
        if (ot1.x == i) {
          score = score + 1;
          if (score > checkscore) {
            speed = speed + 1;
            txt12.innerHTML = `SPEED: ${speed}`;
            checkscore = 2 * score;
          }
          txt1.innerHTML = `SCORE: ${score}`;
          overtext1.innerHTML = `TOTAL SCORE: ${score}`;
        }
      }

      if (
        (bird.x < ot1.x + parseInt(ot1.element.style.width) &&
          bird.x + parseInt(bird.element.style.width) > ot1.x &&
          bird.y < ot1.y + parseInt(ot1.element.style.height) &&
          parseInt(bird.element.style.height) + bird.y > ot1.y) ||
        bird.y == 485
      ) {
        
       
        cancelAnimationFrame(moveFrame);
        cancelAnimationFrame(collisionReqFrame);
        score = 0;
        speed = 1;
        velocity = 0;
        txt12.innerHTML = `SPEED: ${speed}`;
        txt1.innerHTML = `SCORE: ${score}`;
        base.style.animation = "none";

        gamecontainer.appendChild(gameover);
      }
    }
  }
}
var checkscore = 100;
var score = 0;
var speed = 1;
var pipesCollection = null;
var random = null;
var collisionReqFrame = null;
var moveFrame = null;
var pipecreate = function () {
  pipesCollection = [];
  var leftt = 500;
  for (let i = 0; i < 2; i++) {
    var height = getRandom(220, 270);

    if (i % 2 == 0) {
      const pipe1 = new Pipes(
        leftt,
        0,
        height,
        "../pipe-red-up.png",
        "bottom"
      );

      pipesCollection.push(pipe1);
    } else {
      var topp =
        gamecontainer.offsetHeight - parseInt(pipesCollection[0].height);
      const pipe2 = new Pipes(
        leftt,
        topp,
        300,
        "../pipe-red-down.png",
        "top"
      );
      pipesCollection.push(pipe2);
    }
  }
  var leftt = 950;
  for (let i = 0; i < 2; i++) {
    var point = Math.random();
    if (point < 0.65) {
      point = 0.89;
    }
    var height = Math.floor((point * gamecontainer.offsetHeight) / 3 + 70);

    if (i % 2 == 0) {
      const pipe1 = new Pipes(
        leftt,
        0,
        height,
        "../pipe-red-up.png",
        "bottom"
      );
      pipesCollection.push(pipe1);
    } else {
      var topp =
        gamecontainer.offsetHeight - parseInt(pipesCollection[0].height - 60);
      const pipe2 = new Pipes(
        leftt,
        topp,
        300,
        "../pipe-red-down.png",
        "top"
      );
      pipesCollection.push(pipe2);
    }
  }

  random = getRandom(900, 1000);
  pipesCollection.forEach((pipe) => {
    pipe.create();
    function play() {
      pipe.moveRighttoLeft();
      moveFrame = window.requestAnimationFrame(() => {
        play();
      });
    }
    function collision() {
      collisionReqFrame = window.requestAnimationFrame(() => {
        collision();
        pipe.collisionDetect(pipe);
      });

      pipe.moveRighttoLeft();
    }
    play();
    collision();
  });

  gamecontainer.appendChild(base);
};
