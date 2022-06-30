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
          firstcollidedball = ball.type;
          if (ball.type == "red") {
            player1.playerBall = "red";
            player2.playerBall = "yellow";
          } else {
            player1.playerBall = "yellow";
            player2.playerBall = "red";
          }
        } else {
          firstcollidedball = ball.type;
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
        foulAudio.play();
        nextturn = true;
        console.log("1111");
        return;
      } else if (
        player.playerBall == "" &&
        firstcollidedball != "" &&
        !stick.isShot
      ) {
        if (firstcollidedball == "black") {
          foul = true;
          foulAudio.play();
          nextturn = true;
        }
        console.log("2222+" + stick.isShot);
        firstcollidedball = "";
        nextturn = true;
      } else if (
        firstcollidedball == player.playerBall &&
        !stick.isShot &&
        i == 0
      ) {
        if (pocketedBallAtInstant.length == 0) {
          firstcollidedball = "";
          nextturn = true;
          console.log("3333111");
        } else {
          pocketedBallAtInstant.forEach((pocketedball) => {
            if (pocketedball == player.playerBall) {
              firstcollidedball = "";
              console.log("33333222");
              return;
            }
            if (pocketedball == "white") {
              firstcollidedball = "";
              whiteball.hidden = true;
              foul = true;
              foulAudio.play();
              whiteball.ispocketing = true;

              nextturn = true;
              console.log("3333333333333333333");
            }
            if (pocketedball != player.playerBall && pocketedball != "white") {
              firstcollidedball = "";
              foul = true;
              foulAudio.play();
              nextturn = true;
              console.log("33334444444");
            }
          });
        }
      } else if (
        firstcollidedball != "" &&
        firstcollidedball != player.playerBall &&
        !stick.isShot &&
        i == 0
      ) {
        if (firstcollidedball == "black" && player.ballCount == 0) {
          firstcollidedball = "";
          nextturn = true;
          return;
        }

        firstcollidedball = "";

        foul = true;
        foulAudio.play();
        nextturn = true;
        console.log("444444444");
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
