class Table {
  constructor() {}
  create() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 950;
    this.canvas.height = 520;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawImage(img, x, y, rotation = 0, ox = 0, oy = 0) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.drawImage(img, -ox, -oy);
    this.ctx.restore();
  }
  drawBall(img, x, y, height, width) {
    this.ctx.drawImage(img, x, y, width, height);
  }
  drawCircle(x, y, radius = ballDiameter / 2) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
  drawLine(ballx, bally, circlex, circley) {
    this.ctx.beginPath();
    this.ctx.moveTo(ballx, bally);
    this.ctx.lineTo(circlex, circley);
    this.ctx.stroke();
  }
}

const newTable = new Table();
newTable.create();
