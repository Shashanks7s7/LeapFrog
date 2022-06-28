class Ball {
  constructor(
    img = null,
    x = 280 - ballDiameter / 2,
    y = 250 - ballDiameter / 2,
    type = "white",
    vx = 0, //velocityX
    vy = 0, //velocityY
    mass = 2,

    hidden = false,
    ispocketing = false
  ) {
    (this.img = img),
      (this.x = x),
      (this.y = y),
      (this.type = type),
      (this.vx = vx),
      (this.vy = vy),
      (this.mass = mass),
      (this.hidden = hidden),
      (this.ispocketing = ispocketing);
  }
  update() {
    if (this.hidden) {
      return;
    }

    if (stick.power > 0 && stick.isLeftRelease) {
    
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
      this.vx = this.vx * ballFriction;
      this.vy = this.vy * ballFriction;
      console.log(this.vx+", "+this.vy);
      if (this.x + ballDiameter > assets.table.width - 47) {
        this.x = assets.table.width - 47 - ballDiameter;
        this.vx = -this.vx * ballFriction;
      }
      if (this.x < 52) {
        this.x = 52;
        this.vx = -this.vx * ballFriction;
      }
      if (
        this.y + ballDiameter > assets.table.height - 48 &&
        (this.x + ballDiameter / 2 > 487 || this.x < 441)
      ) {
        this.y = assets.table.height - 48 - ballDiameter;
        this.vy = -this.vy * ballFriction;
      }
      if (this.y < 51 && (this.x + ballDiameter / 2 > 487 || this.x < 442)) {
        this.y = 51;
        this.vy = -this.vy * ballFriction;
      }

      if (Math.abs(this.vx) < 0.01 && Math.abs(this.vy) < 0.01) {
        stick.isLeftRelease = false;
        stick.power = 0;
        stick.x = this.x + ballDiameter / 2;
        stick.y = this.y + ballDiameter / 2;
        stick.ox = 965;
        stick.oy = 9;
        this.vx = 0;
        this.vy = 0;
       
        stick.isShot = false;

        i = 0; //testing
        nextturn = false; //testing
        console.log("ya completer vayo ra"+stick.isShot);
      } else {
        stick.isLeftRelease = true;
        stick.isShot = true;
      }
    }
  }
  updateeachball() {
    if (this.hidden) {
      return;
    }

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.vx = this.vx * ballFriction;
    this.vy = this.vy * ballFriction;

    if (this.x + ballDiameter > assets.table.width - 47) {
      this.x = assets.table.width - 47 - ballDiameter;
      this.vx = -this.vx * ballFriction;
    }
    if (this.x < 52) {
      this.x = 52;
      this.vx = -this.vx * ballFriction;
    }
    if (
      this.y + ballDiameter > assets.table.height - 48 &&
      (this.x + ballDiameter / 2 > 490 || this.x < 450)
    ) {
      this.y = assets.table.height - 48 - ballDiameter;
      this.vy = -this.vy * ballFriction;
    }
    if (this.y < 51 && (this.x + ballDiameter / 2 > 490 || this.x < 450)) {
      this.y = 51;
      this.vy = -this.vy * ballFriction;
    }
    if (Math.abs(this.vx) < 0.4 && Math.abs(this.vy) < 0.4) {
      this.vx = 0;
      this.vy = 0;
    }
  }
  draw() {
    if (this.hidden && this.ispocketing) {
      return;
    }

    newTable.drawBall(this.img, this.x, this.y, ballDiameter, ballDiameter);
  }
  shoot(power, rotation) {
    this.vx = (power * Math.cos(rotation)) / 160;
    this.vy = (power * Math.sin(rotation)) / 160;
    console.log(this.vx+", "+this.vy+", "+rotation);

  }
  checkCollision(checkerball) {
    if (this.hidden) {
      return;
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

      if (dist - ballDiameter < 0) {
        if (firstcollidedball == "") {
          firstcollidedball = ballList[i].type;
        }

        resolveCollision(checkerball, ballList[i]);
      }
    }
  }
  turnchecker() {
    if (player1.playerTurn) {
      //next turn condition
      if (this.type == player1.playerBall) {
        player1.ballCount = player1.ballCount - 1;
      } else if (this.type == "white") {
       
        i=0
        nextturn=true
      } else if (this.type == "black" && player1.ballCount > 0) {
        player2.isPlayerWin = true;
      } else if (this.type == "black" && player1.ballCount == 0) {
        player1.isPlayerWin = true;
      } else {
        player2.ballCount = player2.ballCount - 1;

        i = 0;
        foul = true;
        //gameRules.nextTurnfunction();

        ///////////////////
      }
    } else {
      if (this.type == player2.playerBall) {
        player2.ballCount = player2.ballCount - 1;
      } else if (this.type == "white") {
        i=0
        nextturn=true
      } else if (this.type == "black" && player2.ballCount > 0) {
        player1.isPlayerWin = true;
      } else if (this.type == "black" && player2.ballCount == 0) {
        player2.isPlayerWin = true;
      } else {
        player1.ballCount = player1.ballCount - 1;

        foul = true;
        i = 0;
        //gameRules.nextTurnfunction();

        ///////////////////
      }
    } ///upto here
  }
  checkPockting() {
    if (this.hidden && this.ispocketing) {
      return;
    }
    if (foul && this.type == "white") {
      this.ispocketing = true;
      this.hidden = true;
      foul = false;
      
      stick.isShot = true;
     
    }
    for (let i = 0; i < bigPocketCenters.length; i++) {
      let distancepocket = distance(
        bigPocketCenters[i].xPosition,
        bigPocketCenters[i].yPosition,
        this.x,
        this.y
      );
      //  if(i%2==0){
      if (distancepocket < radiusBigpocket) {
        if (this.x == bigPocketCenters[i].xPosition) {
          this.ispocketing = true;
          pocketedBallAtInstant.push(this.type);
          this.turnchecker();
        }
        this.x = bigPocketCenters[i].xPosition;
        this.y = bigPocketCenters[i].yPosition;
        this.vx = 0;
        this.vy = 0;
        this.hidden=true
        // if (this.type != "white") {
        //   this.hidden = true;
        // }
      }
      // }else{
      //     distancepocket=distance(bigPocketCenters[i].xPosition,bigPocketCenters[i].yPosition,this.x+ballDiameter,this.y+ballDiameter)
      //     if(distancepocket<radiusBigpocket){
      //       this.hidden=true;
      //       }
      // }
    }
    for (let i = 0; i < smallPocketCenters.length; i++) {
      let distancepocket = distance(
        smallPocketCenters[i].xPosition,
        smallPocketCenters[i].yPosition,
        this.x,
        this.y
      );
      if (distancepocket < radiusSmallpocket) {
        if (this.x == smallPocketCenters[i].xPosition) {
          this.ispocketing = true;
          pocketedBallAtInstant.push(this.type);
          this.turnchecker();
        }
        this.x = smallPocketCenters[i].xPosition;
        this.y = smallPocketCenters[i].yPosition;
        // if (this.type != "white") {
        //   this.hidden = true;
        // }
        this.hidden=true
        this.vx = 0;
        this.vy = 0;
      } else {
        distancepocket = distance(
          smallPocketCenters[i].xPosition,
          smallPocketCenters[i].yPosition,
          this.x,
          this.y + ballDiameter
        );
        if (distancepocket < radiusSmallpocket) {
          if (this.x == smallPocketCenters[i].xPosition) {
            this.ispocketing = true;
            pocketedBallAtInstant.push(this.type);
            this.turnchecker();
          }
          this.x = smallPocketCenters[i].xPosition;
          this.y = smallPocketCenters[i].yPosition;
          // if (this.type != "white") {
          //   this.hidden = true;
          // }
          this.hidden=true
          this.vx = 0;
          this.vy = 0;
        }
      }
    }
  }
}
let ballList = [];
let pocketedBallAtInstant = [];
const whiteball = new Ball(assets.whiteball);
ballList.push(whiteball);

for (let i = 0; i < 15; i++) {
  if (i < 7) {
    const yellowball = new Ball(
      assets.redball,
      ballPositions[i].xPosition,
      ballPositions[i].yPosition,
      "red"
    );
    ballList.push(yellowball);
  }
  if (i == 7) {
    const blackball = new Ball(
      assets.blackball,
      ballPositions[i].xPosition,
      ballPositions[i].yPosition,
      "black"
    );
    ballList.push(blackball);
  }
  if (i > 7) {
    const redball = new Ball(
      assets.yellowball,
      ballPositions[i].xPosition,
      ballPositions[i].yPosition,
      "yellow"
    );
    ballList.push(redball);
  }
}
