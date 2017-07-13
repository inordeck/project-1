console.log("is there anybody, out there...");

var canvas = document.querySelector('canvas');

canvas.width =  1080px;
canvas.height = 420px;

var c = canvas.getContext('2d');
/* player */
c.fillStyle = "#375";
c.fillRect(100, 100, 100, 100);

//lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "#fc3";
c.stroke();

// arc / circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

for (var i = 0; i < 10; i++) {
	var x = Math.random() * window.innerwidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(300, 300, 30, 0, Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();
}


