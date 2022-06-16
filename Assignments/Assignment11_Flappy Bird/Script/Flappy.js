class Flappy {
  constructor(x = 100, y = 400) {
    (this.x = x), (this.y = y);
  }
  create() {
    this.element = document.createElement("div");
    this.element.style.height = toPX(24);
    this.element.style.width = toPX(34);
    this.element.style.position = "absolute";
    this.element.style.left = toPX(this.x);
    this.element.style.top = toPX(this.y);
    this.element.style.backgroundSize = "cover";
    this.element.style.backgroundPosition = "center";
    this.element.style.backgroundRepeat = "no-repeat";
    
    this.element.style.backgroundImage = "url('../bluebirdupflap.png')";
    gamecontainer.appendChild(this.element);
  }
  moveup() {
    if (this.y < 10) {
      velocity = 0;
      this.y = 0;
      val=this.y-20
      this.element.style.backgroundImage = "url('../birdupflap.png')";
      cancelAnimationFrame(reqAnimation1);
      return;
    } else {
      velocity = -9;
      
      this.y = this.y - velocity;
      console.log(this.y + "HEHEHEHEHEHEHEHEHEHHEHEHE");
      val=this.y-50
      valcheck=this.y-48
      this.element.style.backgroundImage = "url('../bluebirdupflap.png')";
      this.element.style.top = toPX(this.y);
 
      cancelAnimationFrame(reqAnimation1);
    }
  }
  movedown() {
    if (this.y > 480) {
      velocity = 0;
      this.y = 485;
    
       console.log("+++++++++++++++++++++++++++++"+val);
      this.element.style.top = toPX(this.y);
      cancelAnimationFrame(reqAnimation1);

      return;
    } else {
        if(this.y<=valcheck){
          this.element.style.backgroundImage = "url('../bluebird-midflap.png')";
        }
       else if(this.y<=val){
     
        this.element.style.backgroundImage = "url('../bluebirdupflap.png')";

      }else{
      this.element.style.backgroundImage = "url('../bluebird-downflap.png')";}
      velocity = velocity + 0.5;
      this.y = this.y + velocity;
  
      this.element.style.top = toPX(this.y);
    }
  }
}

var reqAnimation1 = null;
var velocity = 0;
var val=null
var valcheck=null
var keys = {
  Space: false,
};
var bird = null;
var birdcreate = function () {
  bird = new Flappy();
  bird.create();
  function playdown() {
    reqAnimation1 = window.requestAnimationFrame(() => {
      playdown();
    });
    bird.movedown();
  }

  window.addEventListener("keydown", (event) => {
    keys[event.code] = true;

    if (keys["Space"]) {
      keys["Space"] = false;
      bird.moveup();
      playdown();

      return;
    }
  });

  window.addEventListener("click", (event) => {
    keys[event.code] = true;

    bird.moveup();
    playdown();

    return;
  });
};
