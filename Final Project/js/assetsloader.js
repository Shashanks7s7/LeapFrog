const assetsLoader = document.getElementById("assetsloader");
const scoreCard = document.getElementById("scorecard");
const gameBox = document.getElementById("gamebox");
const gameMenu = document.getElementById("gamemenu");
const doublebutton = document.getElementById("two");
let assets = {};
let loadingindex = 0;
let isloading = true;

function assetsload(imgname) {
  let image = new Image();
  image.src = `./images/${imgname}`;
  loadingindex = loadingindex - 1;
  image.onload = function () {
    loadingindex = loadingindex + 1;
  };
  return image;
}
assets.tableTwo = assetsload("table3.png");
assets.table = assetsload("table2.png");
assets.stick = assetsload("stick.png");
assets.whiteball = assetsload("white_ball.png");
assets.redball = assetsload("red_ball.png");
assets.yellowball = assetsload("yellow_ball.png");
assets.blackball = assetsload("black_ball.png");
assets.ballinhand = assetsload("ball_in_hand.png");
assets.singleplayer=assetsload("MvsC.png")
assets.twoplayer=assetsload("MvsM.png")
assets.logo=assetsload("fav.png")
let checkAssetsLoader = setInterval(() => {
  if (loadingindex === 0) {
    clearInterval(checkAssetsLoader);

    let count = 200;
    let removePreloader = setInterval(() => {
      if (count <= 0) {
        clearInterval(removePreloader);
        assetsLoader.style.display = "none";
        gameMenu.style.display = "block";
      
        // scoreCard.style.display = "block";
        // gameBox.style.display = "flex";
        isloading = false;
      } else {
        count -= 2;
        assetsLoader.style.opacity = count + "%";
      }
    }, 10);
  }
}, 100);

doublebutton.addEventListener("click", function () {
  gameMenu.style.display = "none";
  scoreCard.style.display = "block";
  gameBox.style.display = "flex";
  themeAudio.play()
});

document.getElementById("one").addEventListener("click", function () {
  themeAudio.play()
  gameMenu.style.display = "none";
  scoreCard.style.display = "block";
  gameBox.style.display = "flex";
  playerList.pop();
  player2 = new Player("CPU", "CPU", "", 7, false, false);
  playerList.push(player2);
  vscpu = true;
  cpu = new CPU();
  cpu.findnearestball();
});
document.getElementById("three").addEventListener("click", function () {
  themeAudio.play()
  gameMenu.style.display = "none";
  scoreCard.style.display = "block";
  gameBox.style.display = "flex";
  playerList.pop();
  player2 = new Player("Online", "OnlinePlayer", "", 7, false, false);
  playerList.push(player2);
  online = true;
 multiplayer=new Multiplayer()
});

let ballCollideAudio = new Audio("./sound/BallsCollide2.wav");
let sideAudio = new Audio("./sound/Side.wav");
let pocketAudio = new Audio("./sound/Hole.wav");
let strikeAudio = new Audio("./sound/Strike.wav");
let foulAudio = new Audio("./sound/foul1.mp3");
let themeAudio=new Audio("./sound/Bossa Antigua.mp3")
foulAudio.volume = 0.2;
themeAudio.volume=0.2
