class Ball {
  constructor(
    img=null,
    x = 280 - assets.whiteball.width / 2,
    y = 250 - assets.whiteball.width / 2
  ) {
     (this.img = img), (this.x = x), (this.y = y);
  }
  update() {
    if (stick.power > 0 && stick.isLeftRelease) {
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      this.vx = this.vx * 0.98;
      this.vy = this.vy * 0.98;

      if (Math.abs(this.vx) < 0.01 && Math.abs(this.vy) < 0.01) {
        stick.isLeftRelease = false;
        stick.power = 0;
        stick.x = this.x + assets.whiteball.width / 2;
        stick.y = this.y + assets.whiteball.width / 2;
        stick.ox = 970;
        stick.oy = 10;
        stick.vx = 0;
        stick.vy = 0;
      } else {
        stick.isLeftRelease = true;
      }
    }
  }
  draw() {
    newTable.drawImage(this.img, this.x, this.y);
  }
  shoot(power, rotation) {
    this.vx = (power * Math.cos(rotation)) / 100;
    this.vy = (power * Math.sin(rotation)) / 100;
    console.log(this.vx, stick.power, stick.isLeftRelease);
  }
}
const whiteball = new Ball(assets.whiteball);

const ballPositions = [
  { xPosition: 615, yPosition: 212 },
 { xPosition: 580, yPosition:   250 - assets.whiteball.width / 2},
  { xPosition: 650, yPosition: 270 },
  { xPosition: 926, yPosition: 354 },
  { xPosition: 926, yPosition: 433 },
  { xPosition: 962, yPosition: 413 },
  { xPosition: 962, yPosition: 491 },

  { xPosition: 650, yPosition: 250 - assets.whiteball.width / 2 },

  { xPosition: 615, yPosition: 252 },
  
  { xPosition: 650, yPosition: 192 },
  { xPosition: 1126, yPosition: 472 },
  { xPosition: 1162, yPosition: 335 },
  { xPosition: 1162, yPosition: 374 },
  { xPosition: 1162, yPosition: 452 },
];
let ballList = [];
for (i = 0; i < 15; i++) {
  if (i < 7) {
    const yellowball = new Ball(
      assets.redball,
      ballPositions[i].xPosition,
      ballPositions[i].yPosition
    );
    ballList.push(yellowball);
  }
  if (i == 7) {
    const blackball = new Ball(
      assets.blackball,
      ballPositions[i].xPosition,
      ballPositions[i].yPosition
    );
    ballList.push(blackball);
  }
  if (i > 7) {
    const redball = new Ball(
      assets.yellowball,
      ballPositions[i].xPosition,
      ballPositions[i].yPosition
    );
    ballList.push(redball);
  }
}
console.log(ballList);
