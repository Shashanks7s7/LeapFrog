class CPU {
  constructor() {}
  findCpuBall(){
   cpuball=ballList
    if(player2.playerBall!=""){
      cpuball=[]
      ballList.forEach(element => {
       if( element.type==player2.playerBall){
        cpuball.push(element)
       }
      });
    }
    

  }
  findnearestball() {
  
    if (player2.playerTurn) {
     
      let sort = sortArr(cpuball, cpuball.length, whiteball);
     
      let base = sort[1][1][0]-whiteball.x ;
      let perpendicular = sort[1][1][1]-whiteball.y ;
      stick.rotation = Math.atan2(perpendicular,base);
      const rotate=getRandomFloat(0.8,1.3,3)
    stick.power = getRandom(1500,4000);
     stick.isLeftRelease = true;
      stick.isShot = true
     whiteball.shoot(stick.power,stick.rotation*rotate);
     
     console.log(stick.rotation);
   
   
      
    }
  }
}
