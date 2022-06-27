let hiddenballs = 0;
let nextturn = false;
let collided = false;
let firstcollidedball = "";
let i = 1;
let foul = false;
class GameRules {
  constructor() {}

  ballAssign() {
    ballList.forEach((ball) => {
      if (ball.hidden) {
        if (ball.type == "white") {
          return;
        }
        if (ball.type == "black") {
          return;
        }
        if (player1.playerTurn) {
          if (ball.type == "red") {
            player1.playerBall = "red";
            player2.playerBall = "yellow";
          } else {
            player1.playerBall = "yellow";
            player2.playerBall = "red";
          }
        } else {
          if (ball.type == "red") {
            player2.playerBall = "red";

            player1.playerBall = "yellow";
          } else {
            player2.playerBall = "yellow";
            player1.playerBall = "red";
          }
        }
        hiddenballs = hiddenballs + 1;

        if (hiddenballs > 1) {
          player1.playerBall = "";
          player2.playerBall = "";
        }
      }
    });
  }
  nextTurnfunction() {
    if (nextturn && i == 0) {
      player1.playerTurn = !player1.playerTurn;
      player2.playerTurn = !player2.playerTurn;
      i = 1;
    }
  }

  fouldetection(player) {
    if (player.playerTurn) {
      if (firstcollidedball == "" && !stick.isShot && i == 0) {
        foul = true;
        nextturn = true;

        return;
      } else if (
        player.playerBall == "" &&
        firstcollidedball != "" &&
        !stick.isShot
      ) {
        nextturn = true;
      } else if (
        firstcollidedball == player.playerBall &&
        !stick.isShot &&
        i == 0
      ) {
        if (pocketedBallAtInstant.length == 0) {
          nextturn = true;
        } else {
          pocketedBallAtInstant.forEach((pocketedball) => {
            if (pocketedball == player.playerBall) {
              return;
            }
            if (pocketedball != player.playerBall) {
              foul = true;
              nextturn = true;
            }
          });
        }
      } else if (
        firstcollidedball != "" &&
        firstcollidedball != player.playerBall &&
        !stick.isShot &&
        i == 0
      ) {
        foul = true;
        nextturn = true;
      }
      //       }else if(player.playerBall!=""&& pocketedBallAtInstant[0]!=player.playerBall&&pocketedBallAtInstant.length>0 ){
      //         nextturn = true;

      // foul=true
      //       }
    }
  }
  endGame(player) {
    if (player.isPlayerWin) {
      window.cancelAnimationFrame(requestAnimation);
      scoreCard.style.display = "none";
      gameBox.style.display = "none";
      assetsLoader.innerHTML = `${player.playerName} Wins`;
      assetsLoader.style.opacity = "100%";
      assetsLoader.style.display = "block";
    }
  }
}
const gameRules = new GameRules();
