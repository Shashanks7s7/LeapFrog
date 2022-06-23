class Stick {
  constructor(
    x = 280,
    y = 250,
    rotation = 0,
    isLeftClick = false,
    isLeftRelease = false,
    ox = 970,
    oy = 10,
    power = 0,
    isshot = false
  ) {
    (this.x = x),
      (this.y = y),
      (this.rotation = rotation),
      (this.isLeftClick = isLeftClick),
      (this.isLeftRelease = isLeftRelease),
      (this.ox = ox),
      (this.oy = oy),
      (this.power = power),
      (this.isshot = isshot);
  }
  update() {
    if (this.isshot) {
      return;
    }
    newTable.canvas.onmousemove = function (e) {
      console.log(e.offsetX+", "+e.offsetY);
      if (stick.isshot) {
        e.stopPropagation;
        return;
      }
      let h = e.offsetX - stick.x;
      let b = e.offsetY - stick.y;
      stick.rotation = Math.atan2(b, h);
    };
    newTable.canvas.onmousedown = function (e) {
      if (stick.isshot) {
        e.stopPropagation;
        return;
      }
      if (e.button == 0) {
        stick.isLeftClick = true;
      }
    };
    newTable.canvas.onmouseup = function (e) {
      if (stick.isshot) {
        e.stopPropagation;
        return;
      }
      if (e.button == 0) {
        stick.isLeftClick = false;
        stick.isLeftRelease = true;
        whiteball.shoot(stick.power, stick.rotation);
        stick.ox = 950;
        stick.isshot = true;
        //  stick.power=0
      }
    };
    if (stick.isLeftClick) {
      stick.ox = stick.ox + 5;
      stick.power = stick.power + 150;
    }
  }
  draw() {
    if (this.isshot) {
      return;
    }
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
