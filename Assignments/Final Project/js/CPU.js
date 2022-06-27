class CPU {
  constructor() {}
  findnearestball() {
  
    if (player2.playerTurn) {
      let sort = sortArr(ballList, 16, whiteball);
     
      let base = sort[1][1][0]-whiteball.x ;
      let perpendicular = sort[1][1][1]-whiteball.y ;
      stick.rotation = Math.atan2(perpendicular,base);
    stick.power = 3000;
     stick.isLeftRelease = true;
      stick.isShot = true;
     whiteball.shoot(stick.power, stick.rotation);
      console.log(sort);
      console.log(stick.rotation);
   
      
    }
  }
}
