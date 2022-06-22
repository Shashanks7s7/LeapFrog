// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
// canvas.height = window.innerHeight - 10;
// canvas.width = window.innerWidth - 10;
// canvas.style.position="relative"
// let tableImage2 = new Image();

// tableImage2.src = "./images/tablecloth.png";
// tableImage2.onload = function () {
//   ctx.drawImage(tableImage2, 280, 150, 800, 400);

// };

// let tableImage = new Image();

// tableImage.src = "./images/full.png";
// tableImage.onload = function () {
//   ctx.drawImage(tableImage, 180, 40, 1000, 600);
//    ctx.beginPath();
// ctx.moveTo(492,165);
// ctx.lineTo(492,525);
// ctx.strokeStyle="white"
// ctx.stroke();
// };
 

// let tableImage3 = new Image();

// tableImage3.src = "./images/corner.svg";
// tableImage3.onload = function () {
//   ctx.drawImage(tableImage3, 256, 125, 60, 60);
// };
// let tableImage4 = new Image();

// tableImage4.src = "./images/corner.svg";
// tableImage4.onload = function () {
//   ctx.drawImage(tableImage4, 1000+256-194, 124, 62, 61);
// };
// let tableImage5 = new Image();

// tableImage5.src = "./images/corner.svg";
// tableImage5.onload = function () {
//     ctx.translate(1000,124)
//     ctx.rotate(degToRad(90))
//   ctx.drawImage(tableImage5, 2,-120, 62, 62);
// };
// let tableImage6 = new Image();

// tableImage6.src = "./images/corner.svg";
// tableImage6.onload = function () {
//     ctx.translate(1080,424)
//     ctx.rotate(degToRad(180))
//   ctx.drawImage(tableImage6, 2,-120, 62, 62);
// };
// let tableImage3 = new Image();

// tableImage3.src = "./images/white_ball.png";
// tableImage3.position="absolute"
// tableImage3.onload = function () {
//   ctx.drawImage(tableImage3, 478, 330, 30, 30);
// };




function degToRad(deg){
    return (Math.PI * deg) / 180;
}
// let gameframe=document.getElementById("gameframe")
// let tablecloth=document.createElement('div')
// tablecloth.style.width="800px"
// tablecloth.style.height="400px"
// tablecloth.style.position="absolute"
// tablecloth.style.top="100px"
// tablecloth.style.left="200px"
// tablecloth.style.backgroundImage="url('./images/tablecloth.png')"
// tablecloth.style.backgroundSize = "cover";
// tablecloth.style.backgroundPosition = "center";
// tablecloth.style.backgroundRepeat = "no-repeat";
// gameframe.appendChild(tablecloth)
// let table=document.createElement('div')
// table.style.width="1000px"
// table.style.height="500px"
// table.style.position="absolute"
// table.style.top="50px"
// table.style.left="100px"
// table.style.backgroundImage="url('./images/full.png')"
// table.style.backgroundSize = "cover";
// table.style.backgroundPosition = "center";
// table.style.backgroundRepeat = "no-repeat";
// gameframe.appendChild(table)

class Table{
    constructor(){}
    create(){
        this.canvas= document.querySelector("canvas");
          this.ctx = this.canvas.getContext("2d");
          this.canvas.width=950
          this.canvas.height=520
    }
    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    drawImage(img,x,y,rotation=0,ox=0,oy=0){
        this.ctx.save();
        this.ctx.translate(x,y)
        this.ctx.rotate(rotation)
        this.ctx.drawImage(img,-ox,-oy);
        this.ctx.restore();
    }

}
const newTable=new Table();
newTable.create()
console.log(newTable.canvas.getBoundingClientRect())

