var gamecontainerHeight=600;
 
var gamecontainerWidth=800;
 var roadspeed=1;
var playing=false;
var gamecontainer=document.getElementById("gamecontainer");

gamecontainer.style.backgroundColor="#85C1E9";
gamecontainer.style.height=toPX(gamecontainerHeight);
gamecontainer.style.width=toPX(gamecontainerWidth);
gamecontainer.style.margin="0 auto"
gamecontainer.style.marginTop="20px"
gamecontainer.style.position='relative'
gamecontainer.style.border="5px black solid" 
gamecontainer.style.overflow='hidden'


var road=document.createElement('div');
road.style.width=toPX(gamecontainerWidth/1.9)
road.style.height=toPX(gamecontainerHeight);
road.style.position="absolute";
road.style.left=toPX(gamecontainerWidth-gamecontainerWidth/1.3);
road.style.animation=`animatedBackground ${roadspeed}s linear infinite`
road.style.backgroundImage="url('../road3.png')";
road.style.backgroundRepeat="repeat-y";


const keyFrames = document.createElement("style");

keyFrames.innerHTML = `
  @keyframes animatedBackground {
    0% {
      background-position:0 10px;
    }
    100% {
        background-position:0 600px;
    }
  }
`;



var startingdiv=document.createElement('div')
startingdiv.style.width='100%'
startingdiv.style.height="100%";
startingdiv.style.backgroundColor="#85C1E9 ";
startingdiv.style.display='flex'
startingdiv.style.position="absolute";

var starringdiv1=document.createElement('div')
starringdiv1.style.width='50%'
starringdiv1.style.height="100%";
starringdiv1.style.padding="50px 40px"


var startimg=document.createElement('img')
startimg.height='600'
startimg.width="400"
startimg.src='../unnamed.png'

var starringdiv1_box=document.createElement('div')
starringdiv1_box.style.width='100%';
starringdiv1_box.style.height="50%";
starringdiv1_box.style.marginTop='80px';
starringdiv1_box.style.marginLeft="20px";

starringdiv1_box.style.border="2px black solid "
starringdiv1_box.style.cursor="pointer"
starringdiv1_box.innerHTML="Click Here To Play";
starringdiv1_box.style.color="white"
starringdiv1_box.style.paddingLeft="10px"
starringdiv1_box.style.fontSize="80px"
starringdiv1_box.style.borderRadius="25px"


gamecontainer.appendChild(startingdiv);
startingdiv.appendChild(startimg);
startingdiv.appendChild(starringdiv1);
starringdiv1.appendChild(starringdiv1_box);
  
var blast=document.createElement('img')
blast.height='140'
blast.width="150"
blast.style.position="absolute";
blast.src='../blast.png'

var replay=document.createElement("div")
replay.style.height=toPX(150)
replay.style.width=toPX(400)
replay.style.top=toPX(250)
replay.style.left=toPX(100)
replay.style.display='none'
replay.style.position="absolute";
replay.style.fontSize="40px"
replay.style.borderRadius="25px"
replay.style.backgroundColor='black'
replay.style.padding='5px 100px'
replay.innerHTML=`Game over!`
replay.style.cursor='pointer'

replay.style.color="white"
 var txt1=document.createElement('div')
 txt1.innerHTML=`Final score: 20`
 txt1.style.fontSize="36px"

 var txt2=document.createElement('div')
 txt2.innerHTML=`Click here to play again.`
 txt2.style.fontSize="33px"

 
