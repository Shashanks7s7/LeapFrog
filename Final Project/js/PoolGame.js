class PoolGame {
  constructor() {}
  update() {
    if (player1.playerTurn || !cpu) {
      stick.update();
    }
if(online){
  multiplayer.listen()
  online=false
}
    if (stick.isShot) {
      ballList.forEach((ball) => {
        ball.checkPockting();
        ball.checkCollision(ball);
        if (ball != whiteball) {
          ball.updateeachball();
        }
      });
      whiteball.update();
      playerList.forEach((player) => {
        if (player.playerBall == "") {
          gameRules.ballAssign();
        }
        gameRules.fouldetection(player);
        gameRules.nextTurnfunction();
        player.updateScoreball();
        gameRules.endGame(player);
      });
    } else {
      whiteball.checkPockting();
      firstcollidedball = "";
      pocketedBallAtInstant = [];
      if (vscpu && !stick.isShot && player2.playerTurn) {
        cpu.findCpuBall();
        cpu.findnearestball();
        cpu.findNearestBallPocket();
      }
      player1.updateScoreball();
      player2.updateScoreball();
    }

    newTable.clear();
  }
  draw() {
    if (vscpu) {
      newTable.drawImage(assets.table, 0, 0);
    } else {
      newTable.drawImage(assets.tableTwo, 0, 0);
    }
    ballList.forEach((ball) => {
      ball.draw();
    });
    stick.draw();
  }
}
const game = new PoolGame();
let requestAnimation = null;
function play() {
  if (!isloading) {
    game.update();
    game.draw();
  }
  requestAnimation = requestAnimationFrame(play);
}
play();
