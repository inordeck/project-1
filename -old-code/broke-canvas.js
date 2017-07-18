console.log("hello");

var canvas = $('#GameBoardCanvas');


// use images for players instead of circles
// player 1
var p1Ready = false;
var p1Image = new Image();
p1Image.onload = function() {
    p1Ready = true;
    p1Image.src = "images/player1.svg";
    p1Image.width = '40px';
    p1Image.height = '40px';
};


// player 2
var p2Ready = false;
var p2Image = new Image();
p1Image.onload = function() {
    p2Ready = true;
    p2Image.src = "images/player2.svg";
    p2Image.width = '40px';
    p2Image.height = '40px';
};


/* NOT WORKING
    var imageRepository = function() {
    // define images
    this.p1Image = Image();
    this.p2Image = Image();
    // ensure all images are loaded before game starts
    var numImages = 2;
    var numLoaded = 0;
    function imagesLoaded() {
        numLoaded++;
        if (numLoaded === numImages) {
            window.init();
        }
    }
    this.p1Image.onload = function() {
        imagesLoaded();
    };
    this.p2Image.onload = function() {
        imagesLoaded();
    };
    // set image src 

    this.p1Image.src = "images/p1Image.png";
    this.p2Image.src = "images/p2Image.png";
};
*/

// the game board: 1 = walls, 0 = free space, and -1 = the goal
var board = [
    [ -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
    [ 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0], // 2
    [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1], // 3
    [ 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0], // 4
    [ 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0], // 5
    [ 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0], // 6
    [ 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1], // 7
    [ 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0], // 8
    [ 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0], // 9
    [ 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0], // 10
    [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, -1], // 11
];
// player scores
var p1Score = 0;
var p2Score = 0;

// set the player positions
var player1 = {
    x: 0,
    y: 0
};
var player2 = {
    x: 10,
    y: 10
};

// draw the game board
function draw(){
    var width = canvas.width();
    var blockSize = width/board.length;
    var ctx = canvas[0].getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, width, width);
    ctx.fillStyle="gray";
    // loop through the board array drawing the walls and the goal
    for(var y = 0; y < board.length; y++){
        for(var x = 0; x < board[y].length; x++){
            // draw the walls
            if(board[y][x] === 1){
                ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
            }
            // draw the goals
            else if(board[y][x] === -1){
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = "gold";
                ctx.moveTo(x*blockSize, y*blockSize);
                ctx.lineTo((x+1)*blockSize, (y+1)*blockSize);
                ctx.moveTo(x*blockSize, (y+1)*blockSize);
                ctx.lineTo((x+1)*blockSize, y*blockSize);
                ctx.stroke();
            }
        }
    }
/* draw players using images

*/
    var renderPlayers = function() {
        var half = blockSize/2;
        if (p1Ready) {
            ctx.drawImage(p1Image, player1.x, player1.y);
        }
        if (p2Ready) {
            ctx.drawImage(p2Image, player2.x, player2.y);
        }
    };
    renderPlayers();

    // draw the players
    /*
    var drawP1 = function() {
        ctx.beginPath();
        var half = blockSize/2;
        ctx.fillStyle = "#33cc99";
        ctx.arc(p1Image.x*blockSize+half, p1Image.y*blockSize+half, half, 0, 2*Math.PI);
        ctx.fill();
    };
    drawP1();

    var drawP2 = function() {
        ctx.beginPath();
        var half = blockSize/2;
        ctx.fillStyle = "#006666";
        ctx.arc(p2Image.x*blockSize+half, p2Image.y*blockSize+half, half, 0, 2*Math.PI);
        ctx.fill();
    };
    drawP2();
    */
}

// check for a winner
function checkWinner () {
    if (player1.x === 10 && player1.y === 10) {
        setWinState(player1);
    } 
    if (player2.x === 0 && player2.y === 0) {
        setWinState(player2);
    }
}

// check to see if the new space is inside the board and not a wall
function canMove(x, y){
    return (y>=0) && (y<board.length) && (x >= 0) && (x < board[y].length) && (board[y][x] != 1);
}

// announce winner
function setWinState(checkWinner) {
    var node = document.createElement("h2");
    node.setAttribute("id", "winner");
    if (checkWinner == player1) {
        var textNode1 = document.createTextNode("Player 1 Wins!");
        node.appendChild(textNode1);
        }
    else if (checkWinner == player2) {
        var textNode2 = document.createTextNode("Player 2 Wins!");
        node.appendChild(textNode2);
        }
    var winner = document.getElementById("game");
    winner.appendChild(node);
    $(document).unbind("keyup"); // stop movement after win
    }

// player 1 keys
$(document).keyup(function(e){
    if((e.which == 87) && canMove(p1Image.x, p1Image.y-1))// w = up
        p1Image.y--;
    else if((e.which == 90) && canMove(p1Image.x, p1Image.y+1)) // z = down
        p1Image.y++;
    else if((e.which == 65) && canMove(p1Image.x-1, p1Image.y)) // a = left
        p1Image.x--;
    else if((e.which == 83) && canMove(p1Image.x+1, p1Image.y)) // s = right
        p1Image.x++;
    draw();
    checkWinner();
    e.preventDefault();
});

// p2Image keys
$(document).keyup(function(e){
    if((e.which == 38) && canMove(p2Image.x, p2Image.y-1))//Up arrow
        p2Image.y--;
    else if((e.which == 40) && canMove(p2Image.x, p2Image.y+1)) // down arrow
        p2Image.y++;
    else if((e.which == 37) && canMove(p2Image.x-1, p2Image.y))
        p2Image.x--;
    else if((e.which == 39) && canMove(p2Image.x+1, p2Image.y))
        p2Image.x++;
    draw();
    checkWinner();
    e.preventDefault();
});


draw();