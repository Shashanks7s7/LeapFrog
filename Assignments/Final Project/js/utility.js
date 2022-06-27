function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}
function rotate2(vx, vy, angle) {
  return {
    x: vx * Math.cos(angle) - vy * Math.sin(angle),
    y: vx * Math.sin(angle) + vy * Math.cos(angle),
  };
}
function resolveCollision(ball, nextball) {
  const xSpeedDiff = ball.vx - nextball.vx;
  const ySpeedDiff = ball.vy - nextball.vy;
  const xDist = nextball.x - ball.x;
  const yDist = nextball.y - ball.y;
  if (xSpeedDiff * xDist + ySpeedDiff * yDist >= 0) {
    const angle = -Math.atan2(nextball.y - ball.y, nextball.x - ball.x);
    const m1 = ball.mass;
    const m2 = nextball.mass;
    const u1particle = rotate2(ball.vx, ball.vy, angle);
    const u2otherparticle = rotate2(nextball.vx, nextball.vy, angle);
    const s1 = {
      x:
        (u1particle.x * (m1 - m2)) / (m1 + m2) +
        (u2otherparticle.x * 2 * m2) / (m1 + m2),
      y: u1particle.y,
    };
    const s2 = {
      x:
        (u2otherparticle.x * (m1 - m2)) / (m1 + m2) +
        (u1particle.x * 2 * m1) / (m1 + m2),
      y: u2otherparticle.y,
    };
    const sFinal1 = rotate2(s1.x, s1.y, -angle);
    const sFinal2 = rotate2(s2.x, s2.y, -angle);

    ball.vx = sFinal1.x;
    ball.vy = sFinal1.y;
    nextball.vx = sFinal2.x;
    nextball.vy = sFinal2.y;
  }
}
