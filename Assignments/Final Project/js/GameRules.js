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
      } else {
        nextturn = true;
      }
    });
  }
  nextTurnfunction() {
    console.log("checking" + nextturn + ", " + i);

    if (nextturn && i == 0) {
      console.log("woooohohooooooooooooooooo");
      player1.playerTurn = !player1.playerTurn;
      player2.playerTurn = !player2.playerTurn;
      i = 1;
    }
  }

  fouldetection(player) {
    if (player.playerTurn) {
      if (firstcollidedball == "" && !stick.isShot && i == 0) {
        console.log("nehiii" + firstcollidedball + player.playerName);
        foul = true;
      nextturn=true;
     stick.ismoving=true
        
      
        return;
      }
      if (firstcollidedball == player.playerBall && !stick.isShot && i == 0) {
        console.log("I am baxk " + firstcollidedball + player.playerName);
        return;
      }

      if (
        firstcollidedball != "" &&
        firstcollidedball != player.playerBall &&
        !stick.isShot &&
        i == 0
      ) {
        console.log("I am dead" + firstcollidedball + player.playerName);
      
        foul = true;
        nextturn=true;
     stick.ismoving=true
      }
    }
  }
}
const gameRules = new GameRules();
