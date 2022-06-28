let vscpu=false
let cpu=null
let cpuball=[]
const ballDiameter=27
const ballFriction=0.975
const displayBallList = document.getElementById(
  "scorecard__scorebox--profile--balllist"
);
const playerName = document.getElementById("scorecard__scorebox--profile--txt");
const playerprofile = document.getElementById(
  "scorecard__scorebox--ballProfile"
);
const ballPositions = [
  { xPosition: 600, yPosition: 250 - 28 / 2 },
  { xPosition: 624, yPosition: 222 },
  { xPosition: 650, yPosition: 265 },
  { xPosition: 676, yPosition: 251 },
  { xPosition: 676, yPosition: 193 },
  { xPosition: 703, yPosition: 250 - 28 / 2 },
  { xPosition: 703, yPosition: 294 },
  { xPosition: 650, yPosition: 250 - 28 / 2 },
  { xPosition: 624, yPosition: 251 },
  { xPosition: 650, yPosition: 207 },
  { xPosition: 676, yPosition: 222 },
  { xPosition: 676, yPosition: 279 }, 
  { xPosition: 703, yPosition: 208 },
  { xPosition: 703, yPosition: 179 },
  { xPosition: 703, yPosition: 265 },
];
const radiusBigpocket = 43;
const radiusSmallpocket =20;
const bigPocketCenters = [
  { xPosition: 25, yPosition: 23 },
  { xPosition: 25, yPosition: 462 },
  { xPosition: 885, yPosition: 25 },
  { xPosition: 885, yPosition: 462 },

 
];
const smallPocketCenters = [
  { xPosition: 455, yPosition: 13 },
  { xPosition: 455, yPosition:476 },
];
