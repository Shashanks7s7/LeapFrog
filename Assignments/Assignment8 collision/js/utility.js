function topx(num) {
  return `${num}px`;
}
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = 100 + Math.floor(Math.random() * 256);
  var z = 50 + Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
}
function rotate2(speedx, speedy, angle) {
  return {
    x: speedx * Math.cos(angle) - speedy * Math.sin(angle),
    y: speedx * Math.sin(angle) + speedy * Math.cos(angle),
  };
}
function resolveCollision(ball, nextball) {
  const xSpeedDiff = ball.speedx - nextball.speedx;
  const ySpeedDiff = ball.speedy - nextball.speedy;
  const xDist = nextball.left - ball.left;
  const yDist = nextball.top - ball.top;
  if (xSpeedDiff * xDist + ySpeedDiff * yDist >= 0) {
    const angle = -Math.atan2(
      nextball.top - ball.top,
      nextball.left - ball.left
    );
    const m1 = ball.mass;
    const m2 = nextball.mass;
    const u1particle = rotate2(ball.speedx, ball.speedy, angle);
    const u2otherparticle = rotate2(nextball.speedx, nextball.speedy, angle);
    const s1 = {
      left:
        (u1particle.x * (m1 - m2)) / (m1 + m2) +
        (u2otherparticle.x * 2 * m2) / (m1 + m2),
      top: u1particle.y,
    };
    const s2 = {
      left:
        (u2otherparticle.x * (m1 - m2)) / (m1 + m2) +
        (u1particle.x * 2 * m1) / (m1 + m2),
      top: u2otherparticle.y,
    };
    const sFinal1 = rotate2(s1.left, s1.top, -angle);
    const sFinal2 = rotate2(s2.left, s2.top, -angle);

    ball.speedx = sFinal1.x;
    ball.speedy = sFinal1.y;
    nextball.speedx = sFinal2.x;
    nextball.speedy = sFinal2.y;
  }
}
