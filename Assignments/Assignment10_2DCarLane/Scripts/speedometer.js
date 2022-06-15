var gamecontainer = document.getElementById("gamecontainer");
var speedometer = document.createElement("div");
speedometer.style.backgroundColor = "grey";
speedometer.style.height = toPX(120);
speedometer.style.width = toPX(170);
speedometer.style.left = toPX(620);
speedometer.style.top = toPX(20);

speedometer.style.boxSizing = "border-Box";
speedometer.style.position = "absolute";
speedometer.style.border = "0px black solid";
speedometer.style.overflow = "hidden";
speedometer.style.borderRadius = "20px";
speedometer.style.padding = "20px";

var scoredata = document.createElement("div");
scoredata.innerHTML = `Score: ${scorepoints}`;
scoredata.style.color = "white";
scoredata.style.fontSize = "25px";
speedometer.appendChild(scoredata);

var speeddata = document.createElement("div");
speeddata.style.marginTop = "20px";
speeddata.innerHTML = `Speed: ${speedmeter}`;
speeddata.style.color = "white";
speeddata.style.fontSize = "25px";
speedometer.appendChild(speeddata);

