let checker = 0;
class CPU {
  constructor() {}
  findCpuBall() {
    cpuball = ballList;

    if (player2.playerBall != "") {
      cpuball = [];
      ballList.forEach((element) => {
        if (element.type == player2.playerBall && !element.hidden) {
          cpuball.push(element);
        }
        if (player2.ballCount == 0 && element.type == "black") {
          cpuball.push(element);
        }
      });
    }
  }
  findnearestball() {
    if (player2.playerTurn) {
      let sort = sortArr(cpuball, cpuball.length, whiteball);
      
      let base = 0;
      let perpendicular = 0;
      if (cpuball.length == 16) {
       
        base = sort[1][1][0] - whiteball.x;
        perpendicular = sort[1][1][1] - whiteball.y;
      } else {
       
        base = sort[0][1][0] - whiteball.x;
        perpendicular = sort[0][1][1] - whiteball.y;
      }

      stick.rotation = Math.atan2(perpendicular, base);
      const rotate = getRandomFloat(0.9, 1.1, 3);
      if (checker == 0) {
        stick.power = getRandom(2000, 4500);
      }
      if (checker > stick.power) {
        checker = 0;

        stick.isLeftRelease = true;
        stick.isShot = true;
        whiteball.shoot(stick.power, stick.rotation * rotate);
      } else {
        checker = checker + 30;
        stick.ox = stick.ox + 2;
      }
    }
  }
  findNearestBallPocket() {
    if (player2.playerTurn) {
      let sort = sortArr(cpuball, cpuball.length, whiteball);

      let sortPockets = sortPocketFunction(
        allPockets,
        allPockets.length,
        sort[0][1][0],
        sort[0][1][1]
      );

      // let base = sort[0][1][0] - whiteball.x;
      // let perpendicular = sort[0][1][1] - whiteball.y;
      // stick.rotation = Math.atan2(perpendicular, base);
      // const rotate = getRandomFloat(0.9, 1.1, 3);
      // stick.power = getRandom(1500, 4000);
      // stick.isLeftRelease = true;
      // stick.isShot = true;
      // whiteball.shoot(stick.power, stick.rotation * rotate);
    }
  }
}
