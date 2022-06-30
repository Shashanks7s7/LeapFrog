const socket = io("http://localhost:3000", {
  withCredentials: true,
});



let data={}
 class Multiplayer extends Stick{
    constructor(
        x = 258,
        y = 250,
        rotation = 0,
        isLeftClick = false,
        isLeftRelease = false,
        ox = 965,
        oy = 9,
        offX = undefined,
        offY = undefined,
        power = 0,
        isShot = false,
        ismoving = false
      ){
        super(x,y,rotation,isLeftClick,isLeftRelease,ox,oy,offX,offY,power,isShot,ismoving)
      }
    listen(){
        const socket = io("http://localhost:3000", {
            withCredentials: true,
          });
        socket.on("receive", handleReceiveData); 
        function handleReceiveData(playername,power,rotation,) {
      
         
            player1.playerName=playername
           stick.rotation=rotation
           stick.power=power
          console.log(stick.rotation);
           whiteball.shoot(stick.power, stick.rotation);
           strikeAudio.volume = 1;
           strikeAudio.play();
           stick.ox = 900;
           stick.isShot = true;     
           stick.isLeftRelease=true    
          }
    }
    update(playername,power,rotation){
        const socket = io("http://localhost:3000", {
            withCredentials: true,
          });
        socket.emit("send",playername,power,rotation); 
        
       
    }
}