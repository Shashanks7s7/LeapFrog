class PoolGame {
  constructor() {}
  update() {
    if (player1.playerTurn || !cpu) {
      stick.update();
    }
    if (vscpu && !stick.isShot) {
      cpu.findCpuBall();
      cpu.findnearestball();
    }

    ballList.forEach((ball) => {
      ball.checkPockting();
      ball.checkCollision(ball);
      if (ball != whiteball) {
        ball.updateeachball();
      }
    });
    if (stick.isShot) {
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
      player1.updateScoreball();
      player2.updateScoreball();
    }

    newTable.clear();
  }
  draw() {
    newTable.drawImage(assets.table, 0, 0);

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
