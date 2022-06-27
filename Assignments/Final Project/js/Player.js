class Player {
  constructor(
    playerType,
    playerName,
    playerBall,
    ballCount,
    playerTurn,
    isPlayerWin
  ) {
    (this.playerType = playerType),
      (this.playerName = playerName),
      (this.playerBall = playerBall),
      (this.ballCount = ballCount),
      (this.playerTurn = playerTurn),
      (this.isPlayerWin = isPlayerWin);
  }
  displayScoreball() {
    playerName.innerHTML = this.playerName;
    let img = '<img src="images/empty.png" alt="" />';
    for (let i = 0; i < this.ballCount; i++) {
      displayBallList.innerHTML = img;
      img = img + '<img src="images/empty.png" alt="" />';
    }
  }
  updateScoreball() {
    if (this.playerTurn == true) {
      playerName.innerHTML = this.playerName;
      playerprofile.innerHTML;
      if (this.playerBall == "yellow") {
        displayBallList.innerHTML = "";
        let img = '<img src="images/yellow_ball.png" alt="" />';
        playerprofile.innerHTML = img;
        for (let i = 0; i < this.ballCount; i++) {
          displayBallList.innerHTML = img;
          img = img + '<img src="images/yellow_ball.png" alt="" />';
        }
      }
      if (this.playerBall == "red") {
        displayBallList.innerHTML = "";
        let img = '<img src="images/red_ball.png" alt="" />';
        playerprofile.innerHTML = img;
        for (let i = 0; i < this.ballCount; i++) {
          displayBallList.innerHTML = img;
          img = img + '<img src="images/red_ball.png" alt="" />';
        }
      }
    }
  }
}
let playerList = [];
const player1 = new Player("User", "Player One", "", 7, true, false);
let player2 = new Player("User", "Player Two", "", 7, false, false);
playerList.push(player1);
playerList.push(player2);
player1.displayScoreball();



