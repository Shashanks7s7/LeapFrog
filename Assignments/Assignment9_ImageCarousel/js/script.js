function toPX(num) {
  return `${num}px`;
}
defaultLeft = 0;
defaultTop = 0;
const carouselContainer = document.getElementById("carousel-container");
const imageWrapper = document.getElementById("carousel-image-wrapper");
let width = imageWrapper.children[0].width * imageWrapper.children.length;

const butn1 = document.getElementById("butn1");
const butn2 = document.getElementById("butn2");

var radiobutn1 = document.createElement("INPUT");
radiobutn1.setAttribute("type", "radio");
radiobutn1.setAttribute("name", "test");
radiobutn1.setAttribute("value", "1");
var radiobutn2 = document.createElement("INPUT");
radiobutn2.setAttribute("type", "radio");
radiobutn2.setAttribute("name", "test");
radiobutn2.setAttribute("value", "2");
var radiobutn3 = document.createElement("INPUT");
radiobutn3.setAttribute("type", "radio");
radiobutn3.setAttribute("name", "test");
radiobutn3.setAttribute("value", "3");
var radiobutn4 = document.createElement("INPUT");
radiobutn4.setAttribute("type", "radio");
radiobutn4.setAttribute("name", "test");
radiobutn4.setAttribute("value", "4");
var radiodiv = document.createElement("div");
class Carasol {
  constructor(left = defaultLeft, top = defaultTop) {
    (this.left = left), (this.top = top);
  }
  create() {
    imageWrapper.style.width = toPX(width);
    imageWrapper.style.height = "400px";
    imageWrapper.style.display = "flex";
    imageWrapper.style.left = toPX(this.left);
    imageWrapper.style.top = toPX(this.top);
    imageWrapper.style.position = "absolute";

    radiodiv.style.width = toPX(50);
    radiodiv.style.height = "40px";
    radiodiv.style.display = "flex";
    radiodiv.style.left = toPX(260);
    radiodiv.style.top = toPX(370);
    radiodiv.style.position = "absolute";
    carouselContainer.appendChild(radiodiv);
    radiobutn1.style.marginRight = "10px";
    // radiobutn1.checked = "true";
    radiobutn2.style.marginRight = "10px";
    radiobutn3.style.marginRight = "10px";
    radiobutn4.style.marginRight = "10px";
    radiodiv.appendChild(radiobutn1);
    radiodiv.appendChild(radiobutn2);
    radiodiv.appendChild(radiobutn3);
    radiodiv.appendChild(radiobutn4);
  }
  animateleft(value) {
    if (this.left > -value) {
      this.left = this.left - 20;
      imageWrapper.style.left = toPX(this.left);
    }
    if (leftdata == width) {
      this.left = 600;
      const leftu = this.left;

      var interval = setInterval(() => {
        if (this.left == leftu - imageWrapper.children[0].width) {
          leftdata = 20;
          rightdata = 0;

          clearInterval(interval);
          return;
        }
        this.left = this.left - 20;

        imageWrapper.style.left = toPX(this.left);
      }, 15);

      cancelAnimationFrame(r1);
    }
    rightdata = leftdata - imageWrapper.children[0].width;
    if (this.left < 0) {
      rightdata = rightdata * -1;
    }

    if (this.left == -value) {
      cancelAnimationFrame(r1);
    }
  }
  animateright() {
    if (
      parseInt(this.left) == rightdata ||
      this.left == 0 ||
      this.leftdata == -imageWrapper.children[0].width
    ) {
      this.left = -2400;
      const leftuu = this.left;

      var interval1 = setInterval(() => {
        if (this.left == leftuu + imageWrapper.children[0].width - 30) {
          this.left = this.left + 30;
          leftdata = width - 600;
          rightdata = -1200;
          clearInterval(interval1);
          imageWrapper.style.left = toPX(this.left);
          return;
        }
        this.left = this.left + 20;

        imageWrapper.style.left = toPX(this.left);
      }, 15);

      cancelAnimationFrame(r2);
    }
    if (parseInt(this.left) + 20 < rightdata) {
      this.left = this.left + 30;

      imageWrapper.style.left = toPX(this.left);
    }
    if (parseInt(this.left) == rightdata) {
      cancelAnimationFrame(r2);
      rightdata = rightdata + imageWrapper.children[0].width;
      leftdata = leftdata - imageWrapper.children[0].width;
    }
  }
}
var r1 = null;
var r2 = null;
let leftdata = 0;
let rightdata = 0;
const car = new Carasol();
car.create();
function playleft() {
  r1 = window.requestAnimationFrame(() => {
    playleft();
    car.animateleft(leftdata);
  });
}

function playright() {
  r2 = window.requestAnimationFrame(() => {
    playright();
  });
  car.animateright();
}
butn1.addEventListener("click", (event) => {
  playright();
  
  event.stopPropagation();
});
butn2.addEventListener("click", (event) => {
  for (let i = 1; i < imageWrapper.children.length; i++) {
    if (leftdata < i * imageWrapper.children[0].width) {
      leftdata = i * parseInt(imageWrapper.children[0].width);

      playleft();
      return;
    }

    if (i + 1 == imageWrapper.children.length) {
      leftdata = width;

      playleft();
      return;
    }
  }

  event.stopPropagation();
});
var check = 0;
radiobutn1.addEventListener("click", () => {
  console.log(radiobutn1.value + ", " + check);
  if (check > radiobutn1.value) {
    playright();

    if (check - parseInt(radiobutn1.value) == 3) {
      console.log("nononon");
      playright();
      playright();
    }
    if (check - parseInt(radiobutn1.value) == 2) {
      console.log("hohohoho");
      playright();
    }

    check = parseInt(radiobutn1.value);
    return;
  }
  check = parseInt(radiobutn1.value);
});

radiobutn2.addEventListener("click", () => {
  console.log(radiobutn2.checked);
  if (check > radiobutn2.value) {
    playright();
    if (check - parseInt(radiobutn2.value) == 2) {
      playright();
    }

    console.log("hello" + check + radiobutn2.value);
    check = parseInt(radiobutn2.value);
    return;
  }

  leftdata = 1 * parseInt(imageWrapper.children[0].width);

  playleft();

  check = parseInt(radiobutn2.value);
});
radiobutn3.addEventListener("click", () => {
  if (check > radiobutn3.value) {
    playright();
    check = parseInt(radiobutn3.value);
    return;
  }
  leftdata = 2 * parseInt(imageWrapper.children[0].width);

  playleft();
  console.log(radiobutn3.value);
  check = parseInt(radiobutn3.value);
});
radiobutn4.addEventListener("click", () => {
  console.log(radiobutn4.value);
  if (check > radiobutn4.value) {
    playright();
    check = parseInt(radiobutn4.value);
    return;
  }
  leftdata = 3 * parseInt(imageWrapper.children[0].width);

  playleft();
  check = parseInt(radiobutn4.value);
});
