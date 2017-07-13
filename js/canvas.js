console.log("is there anybody, out there...");

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

/* load google fonts into canvas */
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://fonts.googleapis.com/css?family=Bungee+Inline|Bungee+Outline|Raleway:300,800';
document.getElementsByTagName('head')[0].appendChild(link);

/* MAZE */
/* maze start */
var font, x, y;
font = 100;
x = 130;
y = 90;
this.ctx.font = font + 'px "Bungee Outline"';
this.ctx.fillStyle = 'gray';
this.ctx.save();
this.ctx.translate(x, y);
this.ctx.rotate(Math.PI / 2);
this.ctx.textAlign = 'center';
this.ctx.fillText('start', x, y);
this.ctx.restore();

/* maze finish */
var font, x, y;
font = 90;
x = 590;
y = -380;
this.ctx.font = font + 'px "Bungee Outline"';
this.ctx.fillStyle = 'gray';
this.ctx.save();
this.ctx.translate(x, y);
this.ctx.rotate(Math.PI / 2);
this.ctx.textAlign = 'center';
this.ctx.fillText('finish', x, y);
this.ctx.restore();

/* maze frame */
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1080, 20); // top wall
ctx.fillRect(0, 400, 1080, 20); // bottom wall
ctx.fillRect(0, 0, 20, 420); // left wall
ctx.fillRect(1060, 0, 20, 420); // right wall
ctx.fillRect(130, 0, 20, 260); // inner left top
ctx.fillRect(130, 320, 20, 100); // inner left bottom
ctx.fillRect(930, 0, 20, 260); // inner right top
ctx.fillRect(930, 320, 20, 100); // inner right bottom

/* vertical maze walls */
ctx.fillRect(210, 80, 20, 100);
ctx.fillRect(290, 0, 20, 100);
ctx.fillRect(290, 160, 20, 100);
ctx.fillRect(370, 80, 20, 100);
ctx.fillRect(370, 320, 20, 100);
ctx.fillRect(450, 160, 20, 180);
ctx.fillRect(530, 80, 20, 180);
ctx.fillRect(610, 80, 20, 100);
ctx.fillRect(850, 80, 20, 180);

/* horizontal maze walls */
ctx.fillRect(210, 80, 100, 20);
ctx.fillRect(370, 80, 180, 20);
ctx.fillRect(610, 80, 260, 20);
ctx.fillRect(610, 160, 180, 20);
ctx.fillRect(130, 240, 180, 20);
ctx.fillRect(370, 240, 100, 20);
ctx.fillRect(530, 240, 420, 20);
ctx.fillRect(130, 320, 180, 20);
ctx.fillRect(450, 320, 500, 20);

/* PLAYER 1 */
/*
var p1x = 75;
var p1y = 50;
var p1Radius = 20;

var p1Eyex = 82;
var p1Eyey = 46;
var p1EyeRadius = 10;

var p1Highlightx = 86;
var p1Highlighy = 42;
var p1HighlightRadius = 3;

drawP1();
*/
/*
function drawP1() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	/* body
	ctx.beginPath();
	ctx.arc(p1x, p1y, p1Radius, 0, Math.PI * 2, false);
	ctx. closePath();
	ctx.fillStyle = 'orange';
	ctx.fill();
	/
	
	/* eye
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(p1Eyex, p1Eyey, p1EyeRadius, 0, Math.PI * 2, false);
	ctx. closePath();
	ctx.fillStyle = 'black';
	ctx.fill();
	*/

	/* highlight
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(p1Highlightx, p1Highlighy, p1HighlightRadius, 0, Math.PI * 2, false);
	ctx.fillStyle = 'white';
	ctx.fill();
	*/

	/* mouth
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.lineCap = 'round';
	ctx.moveTo(80, 62);
	ctx.lineTo(88, 62);
	ctx.lineWidth = 2; 
	ctx.stroke();
} */

/*
window.addEventListener("keyDown", keyDownHandler, true); 
    // Here we just handle command keys
function keyDownHandler(event) {
	// get which key the user pressed
	var key=event.which;
	// Let keypress handle displayable characters
	if(key>46){ return; }
	switch(key){
		case 37:  // left key
		// move the ball 1 left by subtracting 1 from p1X
        p1X -= 1;
        break;

        case 39:  // right key
        // move the ball 1 right by adding 1 to p1X
        p1X += 1;
        break;

    default:
        break;
    }
	drawP1();

}
window.addEventListener("keydown", keyDownHandler, true);
*/

/* PLAYER 2 */
function drawP2(){
	/* body */
	ctx.beginPath();
	ctx.arc(75, 50, 20, 0, Math.PI * 2, false);
	ctx.fillStyle = 'yellow';
	ctx.fill();

	/* eye */
	ctx.beginPath();
	ctx.arc(82, 46, 10, 0, Math.PI * 2, false);
	ctx.fillStyle = 'black';
	ctx.fill();

	/* highlight */
	ctx.beginPath();
	ctx.arc(86, 42, 3, 0, Math.PI * 2, false);
	ctx.fillStyle = 'white';
	ctx.fill();

	/* mouth */
	ctx.beginPath();
	ctx.lineCap = 'round';
	ctx.moveTo(80, 62);
	ctx.lineTo(88, 62);
	ctx.lineWidth = 2; 
	ctx.stroke();
}

function animation() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	console.log('animation test');
}


