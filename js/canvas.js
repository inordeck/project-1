console.log("hello");

var canvas = $('#GameBoardCanvas');
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

    // draw the players
    var drawP1 = function() {
        ctx.beginPath();
        var half = blockSize/2;
        ctx.fillStyle = "orange";
        ctx.arc(player1.x*blockSize+half, player1.y*blockSize+half, half, 0, 2*Math.PI);
        ctx.fill();
    };
    drawP1();

    var drawP2 = function() {
        ctx.beginPath();
        var half = blockSize/2;
        ctx.fillStyle = "teal";
        ctx.arc(player2.x*blockSize+half, player2.y*blockSize+half, half, 0, 2*Math.PI);
        ctx.fill();
    };
    drawP2();
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
function setWinState() {
    var node = document.createElement("h2");
    node.setAttribute("id", "winner");
    var textNode = document.createTextNode("Winner!");
    node.appendChild(textNode);
    document.body.appendChild(node);
    $(document).unbind("keyup"); // stop movement after win
    }

// player 1 keys
$(document).keyup(function(e){
    if((e.which == 87) && canMove(player1.x, player1.y-1))// w = up
        player1.y--;
    else if((e.which == 90) && canMove(player1.x, player1.y+1)) // z = down
        player1.y++;
    else if((e.which == 65) && canMove(player1.x-1, player1.y)) // a = left
        player1.x--;
    else if((e.which == 83) && canMove(player1.x+1, player1.y)) // s = right
        player1.x++;
    draw();
    checkWinner();
    e.preventDefault();
});

// player2 keys
$(document).keyup(function(e){
    if((e.which == 38) && canMove(player2.x, player2.y-1))//Up arrow
        player2.y--;
    else if((e.which == 40) && canMove(player2.x, player2.y+1)) // down arrow
        player2.y++;
    else if((e.which == 37) && canMove(player2.x-1, player2.y))
        player2.x--;
    else if((e.which == 39) && canMove(player2.x+1, player2.y))
        player2.x++;
    draw();
    checkWinner();
    e.preventDefault();
});


draw();