const assetsLoader = document.getElementById("assetsloader");
const scoreCard = document.getElementById("scorecard");
const gameBox = document.getElementById("gamebox");
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

assets.table = assetsload("newboard.png");
assets.stick = assetsload("stick.png");
assets.whiteball = assetsload("white_ball.png");
assets.redball = assetsload("red_ball.png");
assets.yellowball = assetsload("yellow_ball.png");
assets.blackball = assetsload("black_ball.png");
assets.ballinhand = assetsload("ball_in_hand.png");

let checkAssetsLoader = setInterval(() => {
  if (loadingindex === 0) {
    clearInterval(checkAssetsLoader);
   
    let count = 200;
    let removePreloader = setInterval(() => {
      if (count <= 0) {
        clearInterval(removePreloader);
        assetsLoader.style.display = "none";
        scoreCard.style.display = "block";
        gameBox.style.display = "flex";
        isloading = false;
      } else {
        count -= 2;
        assetsLoader.style.opacity = count + "%";
      }
    }, 10);
  }
}, 100);


