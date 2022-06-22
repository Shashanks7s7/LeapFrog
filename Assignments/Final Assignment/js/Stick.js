class Stick {
  constructor(
    x = 280,
    y = 250,
    rotation = 0,
    isLeftClick = false,
    isLeftRelease = false,
    ox = 970,
    oy = 10,
    power = 0
  ) {
    (this.x = x),
      (this.y = y),
      (this.rotation = rotation),
      (this.isLeftClick = isLeftClick),
      (this.isLeftRelease = isLeftRelease),
      (this.ox = ox),
      (this.oy = oy),
      (this.power = power),
      (this.onshoot = this.onshoot);
  }
  update() {
    newTable.canvas.onmousemove = function (e) {
      let h = e.pageX - stick.x;
      let b = e.pageY - stick.y;
      stick.rotation = Math.atan2(b, h);
    };
    newTable.canvas.onmousedown = function (e) {
      if (e.button == 0) {
        stick.isLeftClick = true;
      }
    };
    newTable.canvas.onmouseup = function (e) {
      if (e.button == 0) {
        stick.isLeftClick = false;
        stick.isLeftRelease = true;
        whiteball.shoot(stick.power,stick.rotation)
        stick.ox = 950;
       
      //  stick.power=0
      }
    };
    if (stick.isLeftClick) {
      stick.ox = stick.ox + 5;
      stick.power = stick.power + 100;
    }
  }
  draw() {
    newTable.drawImage(
      assets.stick,
      this.x,
      this.y,
      stick.rotation,
      this.ox,
      this.oy
    );
  }
}
const stick = new Stick();
