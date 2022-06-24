class Ball {
  constructor(
    img = null,
    x = 280 - ballDiameter / 2,
    y = 250 - ballDiameter / 2,
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
      this.vx = this.vx * ballFriction;
      this.vy = this.vy * ballFriction;

      if (this.x+ballDiameter > assets.table.width - 47) {
        this.x = assets.table.width - 47-ballDiameter;
        this.vx = -this.vx * ballFriction;
     
      }
      if (this.x < 52) {
        this.x = 52;
        this.vx = -this.vx * ballFriction;
      }
      if (this.y+ballDiameter > assets.table.height - 48  && (this.x+ballDiameter/2>490||this.x<430)) {
        this.y = assets.table.height - 48-ballDiameter;
        this.vy = -this.vy * ballFriction;
        
      }
      if (this.y < 51 && (this.x+ballDiameter/2>490||this.x<449)) {
        this.y = 51;
        this.vy = -this.vy * ballFriction;
      }

      if (Math.abs(this.vx) < 0.01 && Math.abs(this.vy) < 0.01) {
        stick.isLeftRelease = false;
        stick.power = 0;
        stick.x = this.x +ballDiameter / 2;
        stick.y = this.y +ballDiameter / 2;
        stick.ox = 965;
        stick.oy = 9;
        this.vx = 0;
        this.vy = 0;
        stick.isShot = false;
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
    this.vx = this.vx * ballFriction;
    this.vy = this.vy * ballFriction;

    if (this.x+ballDiameter > assets.table.width - 47) {
      this.x = assets.table.width - 47-ballDiameter;
      this.vx = -this.vx * ballFriction;
    }
    if (this.x < 52) {
      this.x = 52;
      this.vx = -this.vx * ballFriction;
    }
    if (this.y+ballDiameter > assets.table.height - 48  && (this.x+ballDiameter/2>490||this.x<450)) {
      this.y = assets.table.height - 48-ballDiameter;
      this.vy = -this.vy * ballFriction;
    }
    if (this.y < 51 && (this.x+ballDiameter/2>490||this.x<450)) {
      this.y = 51;
      this.vy = -this.vy * ballFriction;
    }
    if (Math.abs(this.vx) < 0.3 && Math.abs(this.vy) < 0.3) {
      this.vx = 0;
      this.vy = 0;
    }
  }
  draw() {
     if(this.hidden){
      return
    }
    
    newTable.drawBall(this.img, this.x, this.y,ballDiameter,ballDiameter);
  }
  shoot(power, rotation) {
    this.vx = (power * Math.cos(rotation)) / 100;
    this.vy = (power * Math.sin(rotation)) / 100;
    
  }
  checkCollision(checkerball) {
    if(this.hidden){
      console.log("jdlfjo");
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

      if (dist -ballDiameter < 0) {
       
        resolveCollision(checkerball, ballList[i]);
      }
    }
  }
  checkPockting(){
    if(this.hidden){
      return
    }
   for(let i=0;i<bigPocketCenters.length;i++){
      let distancepocket=distance(bigPocketCenters[i].xPosition,bigPocketCenters[i].yPosition,this.x,this.y)
  
    //  if(i%2==0){
  if(distancepocket<radiusBigpocket){
        this.x=0;
        this.y=0
      this.hidden=true;
    this.vx=0
    this.vy=0
    
      }
    // }else{
    //     distancepocket=distance(bigPocketCenters[i].xPosition,bigPocketCenters[i].yPosition,this.x+ballDiameter,this.y+ballDiameter)
    //     if(distancepocket<radiusBigpocket){
        
    //       this.hidden=true;
    
    //       }
      // }
    }
    for(let i=0;i<smallPocketCenters.length;i++){
      let distancepocket=distance(smallPocketCenters[i].xPosition,smallPocketCenters[i].yPosition,this.x,this.y)
  
     if(i%2==0){
  if(distancepocket<radiusBigpocket){
    this.x=0;
    this.y=0
      this.hidden=true;
      this.vx=0
      this.vy=0

      }}else{
        distancepocket=distance(smallPocketCenters[i].xPosition,smallPocketCenters[i].yPosition,this.x+ballDiameter,this.y+ballDiameter)
        if(distancepocket<radiusBigpocket){
          this.x=0;
          this.y=0
          this.hidden=true;
          this.vx=0
          this.vy=0
    
          }
      }
    }
   
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


