class Ball {
  constructor(
    img = null,
    x = 280 - assets.whiteball.width / 2,
    y = 250 - assets.whiteball.width / 2,
    vx = 0,
    vy = 0,
    mass = 1,
    hidden=false,
  ) {
    (this.img = img),
      (this.x = x),
      (this.y = y),
      (this.vx = vx),
      (this.vy = vy),
      (this.mass = mass),
      (this.hidden=hidden);
  }
  update() {
    if(this.hidden){
      return
    }
    if (stick.power > 0 && stick.isLeftRelease) {
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      this.vx = this.vx * 0.98;
      this.vy = this.vy * 0.98;

      if (this.x > assets.table.width - 88) {
        this.x = assets.table.width - 88;
        this.vx = -this.vx * 0.98;
      }
      if (this.x < 50) {
        this.x = 50;
        this.vx = -this.vx * 0.98;
      }
      if (this.y > assets.table.height - 88) {
        this.y = assets.table.height - 88;
        this.vy = -this.vy * 0.98;
      }
      if (this.y < 50) {
        this.y = 50;
        this.vy = -this.vy * 0.98;
      }

      if (Math.abs(this.vx) < 0.01 && Math.abs(this.vy) < 0.01) {
        stick.isLeftRelease = false;
        stick.power = 0;
        stick.x = this.x + assets.whiteball.width / 2;
        stick.y = this.y + assets.whiteball.width / 2;
        stick.ox = 970;
        stick.oy = 10;
        this.vx = 0;
        this.vy = 0;
        stick.isshot = false;
      } else {
        stick.isLeftRelease = true;
      }
    }
  }
  updateeachball() {
    if(this.hidden){
      return
    }
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.vx = this.vx * 0.98;
    this.vy = this.vy * 0.98;

    if (this.x > assets.table.width - 88 || this.x < 50) {
      this.vx = -this.vx;
    }
    if (this.y > assets.table.height - 88 || this.y < 50) {
      this.vy = -this.vy;
    }

    if (Math.abs(this.vx) < 0.1 && Math.abs(this.vy) < 0.1) {
      this.vx = 0;
      this.vy = 0;
    }
  }
  draw() {
    if(this.hidden){
      return
    }
    newTable.drawImage(this.img, this.x, this.y);
  }
  shoot(power, rotation) {
    this.vx = (power * Math.cos(rotation)) / 100;
    this.vy = (power * Math.sin(rotation)) / 100;
    console.log(ballList);
  }
  checkCollision(checkerball) {
    if(this.hidden){
      return
    }
    for (let i = 0; i < ballList.length; i++) {
      if (checkerball == ballList[i]) {
        continue;
      }
      let dist = distance(
        checkerball.x,
        checkerball.y,
        ballList[i].x,
        ballList[i].y
      );

      if (dist - assets.whiteball.width < 0) {
      
        resolveCollision(checkerball, ballList[i]);
      }
    }
  }
  checkPockting(){
    if(this.hidden){
      return
    }
    bigPocketCenters.forEach((bigpocket)=>{
      let distancepocket=distance(bigpocket.xPosition,bigpocket.yPosition,this.x,this.y)
  console.log(distancepocket+", "+radiusBigpocket);
      if(distancepocket<radiusBigpocket){
        
      this.hidden=true;

      }
    })
    smallPocketCenters.forEach((smallpocket)=>{
      let distancepocket=distance(smallpocket.xPosition,smallpocket.yPosition,this.x,this.y)
      if(distancepocket<radiusSmallpocket){
        console.log("pocket");
      }
    })
  }
}
let ballList = [];
const whiteball = new Ball(assets.whiteball);
ballList.push(whiteball);

for (let i = 0; i < 15; i++) {
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
function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}
function rotate2(vx, vy, angle) {
  return {
    x: vx * Math.cos(angle) - vy * Math.sin(angle),
    y: vx * Math.sin(angle) + vy * Math.cos(angle),
  };
}
function resolveCollision(ball, nextball) {
  const xSpeedDiff = ball.vx - nextball.vx;
  const ySpeedDiff = ball.vy - nextball.vy;
  const xDist = nextball.x - ball.x;
  const yDist = nextball.y - ball.y;
  if (xSpeedDiff * xDist + ySpeedDiff * yDist >= 0) {
    const angle = -Math.atan2(nextball.y - ball.y, nextball.x - ball.x);
    const m1 = ball.mass;
    const m2 = nextball.mass;
    const u1particle = rotate2(ball.vx, ball.vy, angle);
    const u2otherparticle = rotate2(nextball.vx, nextball.vy, angle);
    const s1 = {
      x:
        (u1particle.x * (m1 - m2)) / (m1 + m2) +
        (u2otherparticle.x * 2 * m2) / (m1 + m2),
      y: u1particle.y,
    };
    const s2 = {
      x:
        (u2otherparticle.x * (m1 - m2)) / (m1 + m2) +
        (u1particle.x * 2 * m1) / (m1 + m2),
      y: u2otherparticle.y,
    };
    const sFinal1 = rotate2(s1.x, s1.y, -angle);
    const sFinal2 = rotate2(s2.x, s2.y, -angle);

    ball.vx = sFinal1.x;
    ball.vy = sFinal1.y;
    nextball.vx = sFinal2.x;
    nextball.vy = sFinal2.y;
  }
}
