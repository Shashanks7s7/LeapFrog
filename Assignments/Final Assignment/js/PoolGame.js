class PoolGame{
    constructor(){}
    update(){
     
      stick.update()
      whiteball.update()
      newTable.clear()

    }
    draw(){
    
        newTable.drawImage(assets.table,0,0)
    stick.draw()
      whiteball.draw()
   
      ballList.forEach((yellowball)=>{
        yellowball.draw()
      })
     
    }
}
const game=new PoolGame()
function play(){
  
    game.update()
    game.draw()
   
    requestAnimationFrame(play);
}
play()



