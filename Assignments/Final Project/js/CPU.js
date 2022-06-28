class CPU {
  constructor() {}
  findCpuBall() {
    cpuball = ballList;
    if (cpuball.length == 15) cpuball = cpuball - cpuball[0];

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

      let base = sort[0][1][0] - whiteball.x;
      let perpendicular = sort[0][1][1] - whiteball.y;
      stick.rotation = Math.atan2(perpendicular, base);
      const rotate = getRandomFloat(0.9, 1.1, 3);
      stick.power = getRandom(1500, 4000);
      stick.isLeftRelease = true;
      stick.isShot = true;
      whiteball.shoot(stick.power, stick.rotation * rotate);
    }
  }
}
