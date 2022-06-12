const boundary = document.getElementById("boundary");
defaultBoundaryWidth = 1000;
defaultBoundaryHeight = 600;

boundary.style.maxWidth = topx(defaultBoundaryWidth);
boundary.style.height = topx(defaultBoundaryHeight);
boundary.style.position = "relative";
boundary.style.border = `${topx(2)} solid grey`;
boundary.style.margin='10px auto'
const boundarybox = boundary.getBoundingClientRect();
console.log(boundarybox);

defaultTop = 0;
defaultLeft = 0;
defaultSpeedx = 1;
defaultSpeedy = 1;
defaultRadius = 20;
defaultMass = 1;
defaultBackgroundColor = "#49C";

class Box {
  constructor(
    top = defaultTop,
    left = defaulLeft,
    speedx = defaultSpeedx,
    speedy = defaultSpeedy,
    radius = defaultRadius,
    backgroundColor = defaultBackgroundColor,
    mass = defaultMass
  ) {
    (this.top = top),
      (this.left = left),
      (this.speedx = speedx),
      (this.speedy = speedy),
      (this.radius = radius),
      (this.backgroundColor = backgroundColor),
      (this.mass = mass);
  }

  create() {
    this.element = document.createElement("div");
    this.element.style.width = topx(this.radius * 2);
    this.element.style.height = topx(this.radius * 2);
    this.element.style.borderRadius = "50%";
    this.element.style.top = topx(this.top);
    this.element.style.left = topx(this.left);
    this.element.style.position = "absolute";
    this.element.style.backgroundColor = this.backgroundColor;
  
    boundary.appendChild(this.element);
  }
  move() {
    this.left = this.left + this.speedx;
    this.top = this.top + this.speedy;

    this.element.style.top = topx(this.top);
    this.element.style.left = topx(this.left);
  }
  borderCollisionCheck() {
    if (boundarybox.width-5- this.radius * 2 < this.left)
      this.speedx = -this.speedx;
    if (boundarybox.height -5- this.radius * 2 < this.top)
      this.speedy = -this.speedy;
    if (boundarybox.left-boundarybox.x >= this.left) this.speedx = 1;
    if (boundarybox.top-boundarybox.y >= this.top) this.speedy = 1;
  }
  ballCollision(ball) {
    for (let j = 0; j < ballCollection.length; j++) {
      if (ballCollection[j] === ball) {
        continue;
      }

      let dist = distance(
        ball.left,
        ball.top,
        ballCollection[j].left,
        ballCollection[j].top
      );
      if (dist - (ball.radius + ballCollection[j].radius) < 0) {
        resolveCollision(ball, ballCollection[j]);
      }
    }
  }
}
let ballCollection = [];

for (let i = 0; i < 50; i++) {
  let radius = getRandom(8, 15);
  let x = getRandom(radius, defaultBoundaryWidth - 3 * radius);
  let y = getRandom(radius, defaultBoundaryHeight - 3 * radius);

  if (i !== 0) {
    for (let j = 0; j < ballCollection.length; j++) {
      if (
        distance(x, y, ballCollection[j].left, ballCollection[j].top) -
          radius * 2 <
        0
      ) {
        console.log("hehehe" + 2 * radius);
        console.log(
          distance(x, y, ballCollection[j].left, ballCollection[j].top)
        );

        x = getRandom(radius, defaultBoundaryWidth - 3 * radius);
        y = getRandom(radius, defaultBoundaryHeight - 3 * radius);
        j = -1;
      }
    }
  }
  const ball = new Box(
    y,
    x,
    getRandom(1, 3),
    getRandom(1, 3),
    radius,
    random_bg_color(),
    radius / 20
  );

  ball.create();
  ballCollection.push(ball);
}

boundary.addEventListener("click", (e) => {
  console.log(e.x);
  if(ballCollection.length<500){
  for (let i = 0; i < 10; i++) {
    let radius = getRandom(8, 15);
    console.log(e.x+", "+e.y);
    let x = e.offsetX;
    let y = e.offsetY;
   
    const ball = new Box(
      y,
      x,
      i % 2 == 0 ? -getRandom(1, 3) : +getRandom(1, 3),
      i % 2 == 0 ? -getRandom(1, 3) : +getRandom(1, 3),
      radius,
      random_bg_color(),
      radius / 20
    );

    ball.create();
    ballCollection.push(ball);
  }}else{
    alert("Ball Count Reached 500 Number of Balls.")
  }
});

function play() {
  window.requestAnimationFrame(() => {
    play();
    ballCollection.forEach((ball) => {
      ball.move();
      ball.borderCollisionCheck();
      ball.ballCollision(ball);
    });
  });
}
play();
