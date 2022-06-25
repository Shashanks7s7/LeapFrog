class PoolGame {
  constructor() {}
  update() {
    stick.update();
    if (stick.isShot){
      ballList.forEach((ball) => {
        ball.checkPockting();
        ball.checkCollision(ball);
        if (ball != whiteball) {
          ball.updateeachball();
        }
      });
    whiteball.update();
    
  
  playerList.forEach((player)=>{
    if(player.playerBall==""){
      console.log("hera, hai pool game");
      gameRules.ballAssign();
     
   
      
    }
    gameRules.nextTurnfunction()
    player.updateScoreball()
   
  })}
  
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
function play() {
  if (!isloading) {
    game.update();
    game.draw();
  }
  requestAnimationFrame(play);
}
play();
