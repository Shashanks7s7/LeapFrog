class Car {
  constructor(x = 200, y = 470, img = "../sportsc.png") {
    (this.x = x), (this.y = y), (this.img = img);
  }
  create() {
    this.element = document.createElement("img");
    this.element.height = "120";
    this.element.width = "90";
    this.element.style.position = "absolute";
    this.element.style.top = toPX(this.y);
    this.element.style.left = toPX(this.x);
    this.element.src = this.img;
    // this.element.style.backgroundSize='cover'
    // this.element.style.backgroundPosition='center'
    gamecontainer.appendChild(this.element);
  }
  moveright() {
    if (this.x < 500) {
      this.x = this.x + 25;
      this.element.style.left = toPX(this.x);
    }

    if (this.x < 350) {
      this.x = this.x + 25;
      this.element.style.left = toPX(this.x);
    }
    if (this.x == 350 || this.x == 500) {
      cancelAnimationFrame(p1);
    }
  }
  moveleft() {
    if (this.x > 350) {
      this.x = this.x - 25;
      this.element.style.left = toPX(this.x);
    }
    if (this.x > 200) {
      this.x = this.x - 25;
      this.element.style.left = toPX(this.x);
    }
    if (this.x == 200 || this.x == 350) {
      cancelAnimationFrame(p2);
    }
  }
  moveToptoBottom() {
    this.y = this.y + speedmeter + 3;
    this.element.style.top = toPX(this.y);

    if (this.y >= 600) {
      this.y = getRandom(-500, 0);
    }
  }
  collisiondetect(car) {
    for (let j = 0; j < carsCollection.length; j++) {
      if (car === carsCollection[j]) {
        continue;
      }

      let ot1 = carsCollection[j];

      if (
        car.x < ot1.x + car.element.width &&
        car.x + car.element.width > ot1.x &&
        car.y < ot1.y + ot1.element.height &&
        car.element.height + car.y > ot1.y
      ) {
        cancelAnimationFrame(pl3);
        cancelAnimationFrame(pl4);

        // collision detected!

        blast.style.left = toPX(car.x + 5);
        blast.style.top = toPX(car.y - 20);
        blast.style.display = "block";
        gamecontainer.appendChild(blast);

        replay.style.display = "block";
        gamecontainer.appendChild(replay);
        replay.appendChild(txt1);
        replay.appendChild(txt2);
 try{
        gamecontainer.removeChild(car.element);

        carsCollection.forEach((cars) => {
          gamecontainer.removeChild(cars.element);
        });
        carsCollection = [];
        scorepoints = 0;
        speedmeter = 1;
        compscore = 0;
        scoredata.innerHTML = `Score: ${scorepoints}`;
        speeddata.innerHTML = `Speed: ${speedmeter}`;

        // alert("out")
      }catch(err){
        window.location.reload()
      }}
    }
  }
  overtakedetection(car) {
    for (let j = 0; j < carsCollection.length; j++) {
      if (car === carsCollection[j]) {
        continue;
      }

      if (car.y < carsCollection[j].y - 120) {
        // collision detected!
        if (scorepoints == 0) {
          compscore = 20;
        }
        if (scorepoints > compscore) {
          speedmeter = speedmeter + 1;
          compscore = compscore + 20;
          speeddata.innerHTML = `Speed: ${speedmeter}`;
        }
        scorepoints = scorepoints + 1;
        scoredata.innerHTML = `Score: ${scorepoints}`;

        cancelAnimationFrame(pl4);
      }
    }
  }
}
let compscore = 0;
let speedmeter = 1;
let scorepoints = 0;

var keys = {
  ArrowLeft: false,
  ArrowRight: false,
};
var p1 = null;
var p2 = null;
var pl3 = null;
var pl4 = null;
var carsCollection = [];
backgroundcreate = function () {
  const player1 = new Car();
  player1.create();
  function playright() {
    p1 = window.requestAnimationFrame(() => {
      playright();
    });
    player1.moveright();
  }
  function playleft() {
    p2 = window.requestAnimationFrame(() => {
      playleft();
    });
    player1.moveleft();
  }

  window.addEventListener("keydown", (event) => {
    keys[event.key] = true;
    if (keys["ArrowRight"]) {
      keys["ArrowRight"] = false;
      playright();

      return;
    }
    if (keys["ArrowLeft"]) {
      keys["ArrowLeft"] = false;
      playleft();

      return;
    }

    event.stopPropagation();
  });

  for (let i = 0; i < 3; i++) {
    var leftt = 200 + i * 150;
    var topp = getRandom(-800, 0);
    if (i !== 0) {
      for (let j = 0; j < carsCollection.length; j++) {
        if (Math.abs(carsCollection[j].y - topp) < 180) {
          console.log("test");
          topp = getRandom(-600, 0);

          j = -1;
        }
      }
    }
    const cars = new Car(leftt, topp, "../car.png");
    carsCollection.push(cars);
  }

  carsCollection.forEach((car) => {
    car.create();
    function play() {
      car.collisiondetect(player1);
      pl3 = window.requestAnimationFrame(() => {
        play();
      });
      car.moveToptoBottom();

      car.overtakedetection(player1);
    }
    function score() {
      pl4 = window.requestAnimationFrame(() => {
        score();
      });
      car.overtakedetection(player1);
    }
    score();
    play();
  });
};
starringdiv1_box.addEventListener("click", function () {
  playing = true;
  if (playing == true) {
    gamecontainer.removeChild(startingdiv);
    gamecontainer.appendChild(road);
    gamecontainer.appendChild(keyFrames);
    backgroundcreate();
    gamecontainer.appendChild(speedometer);
  }
});

replay.addEventListener("click", function () {
  replay.style.display = "none";
  blast.style.display = "none";
  backgroundcreate();
});
