const assetsLoader = document.getElementById("assetsloader");
let assets = {};
let loadingindex = 0;

function assetsload(imgname) {
  let image = new Image()

  image.src = `./images/${imgname}`;
  loadingindex = loadingindex - 1;
  image.onload = function () {
    loadingindex = loadingindex + 1;
  };
  return image;
}

assets.table = assetsload("newboard.png");
assets.tablecloth=assetsload("tablecloth.png");
assets.stick=assetsload("stick.png")
assets.whiteball=assetsload("white_ball.png")
assets.redball=assetsload("red_ball.png")
assets.yellowball=assetsload("yellow_ball.png")
assets.blackball=assetsload("black_ball.png")
assets.ballinhand=assetsload("ball_in_hand.png")

let checkAssetsLoader = setInterval(() => {
  if (loadingindex === 0) {
    clearInterval(checkAssetsLoader);
console.log(assets);
    let count = 100;
    let removePreloader = setInterval(() => {
      if (count <= 0) {
        clearInterval(removePreloader);
        assetsLoader.style.display = "none";
      } else {
        count -= 2;
        assetsLoader.style.opacity = count + "%";
      }
    }, 10);
  }
}, 100);

console.log("ball width"+assets.whiteball.width/2);
