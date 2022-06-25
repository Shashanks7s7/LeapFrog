let hiddenballs = 0;
let nextturn = false;
let i = 0;
class GameRules {
  constructor() {}

  ballAssign() {
    ballList.forEach((ball) => {
      if (ball.hidden) {
        if (ball.type == "white") {
          nextturn = true;
          return;
        }
        if (ball.type == "black") {
          return;
        }
        if (player1.playerTurn) {
          if (ball.type == "red") {
            player1.playerBall = "red";
            player2.playerBall = "yellow";
            player1.ballCount=6
          } else {
            player1.playerBall = "yellow";
            player2.playerBall = "red";
            player1.ballCount=6
          }
        } else {
          if (ball.type == "red") {
            player2.playerBall = "red";
            player2.ballCount=6
            player1.playerBall = "yellow";
          } else {
            player2.playerBall = "yellow";
            player1.playerBall = "red";
            player2.ballCount=6
          }
        }
        hiddenballs = hiddenballs + 1;

        if (hiddenballs > 1) {
          player1.playerBall = "";
          player2.playerBall = "";
        }
      } else {
        nextturn = true;
      }
    });
  }
  nextTurnfunction() {
    if (!stick.isShot) {
      if (nextturn && i == 0) {
        player1.playerTurn = !player1.playerTurn;
        player2.playerTurn = !player2.playerTurn;
        i = 1;
      }
    }
  }
  
}
const gameRules = new GameRules();
