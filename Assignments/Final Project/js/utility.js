function toPX(num) {
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
function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
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
function sortFunction(a, b) {
	if (a[0] === b[0]) {
		return 0;
	}
	else {
		return (a[0] < b[0]) ? -1 : 1;
	}
}

// Function to sort the array of
// points by its distance from P
function sortArr(arr, n, p)
{
	// Vector to store the distance
	// with respective elements
	
	var vp = new Array(n);
	// Storing the distance with its
	// distance in the vector array
	for (var i = 0; i < n; i++) {

		var dist = Math.pow((p.x - arr[i].x), 2)
			+ Math.pow((p.y - arr[i].y), 2);
    
		vp[i] = [dist, [arr[i].x, arr[i].y]];
  
	}
	
	// Sorting the array with
	// respect to its distance
	vp.sort(sortFunction);
 return vp
	// Output
	// for (var i = 0; i < n; i++) {
	// 	document.write("(" + vp[i][1][0] + ", " + vp[i][1][1] + ") ");
	// }
}