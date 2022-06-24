class PoolGame {
  constructor() {}
  update() {
    
    stick.update();
     if (stick.isShot)
    
      ballList.forEach((ball) => {
        ball.checkPockting()
        ball.checkCollision(ball);
        if (ball != whiteball) {
          ball.updateeachball();
        }
      });
    whiteball.update();
    
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
  game.update();
  game.draw();

  requestAnimationFrame(play);
}
play();
