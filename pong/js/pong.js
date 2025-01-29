//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

var player = [];
var pad = [];
var upKeys = [`w`,`ArrowUp`];
var downKeys = [`s`, `ArrowDown`];

for (let i = 0; i < 2; i++) {
    player[i] = new Player();
    player[i].pad = new Box();
    pad[i] = player[i].pad;
}

player[0].multiplier = 1
player[1].multiplier = -1

//pad setup
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2

pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width - pad[1].w/2

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

var scoreBoard = document.querySelectorAll("#score");

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)

    for (let i = 0; i < upKeys.length; i++) {
        if(keys[upKeys[i]])
        {
            pad[i].vy += -pad[i].force
        }

        if(keys[downKeys[i]])
        {
            pad[i].vy += pad[i].force
        }

        pad[i].vy *= fy

        if(pad[i].y < 0 + (pad[i].h/2) || pad[i].y > 800 - (pad[i].h/2)) {
            var mult1 = (pad[i].y - (pad[i].h/2)) / Math.abs(pad[i].y - (pad[i].h/2))
            pad[i].y = (400 + (400 * mult1)) - ((pad[i].h / 2) * mult1)
        }

        if(ball.y < 0 + (ball.h/2) || ball.y > 800 - (ball.h/2))
        {
            var mult2 = (pad[i].y  + (ball.h/2)) / Math.abs(pad[i].y - (ball.h/2))
            ball.y = 400 + (400 * mult2) - (ball.h / 2 * mult2)
            ball.vy = -ball.vy
        }
        
        scoreBoard[0].children[i].innerHTML = player[i].score;
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        player[1].score += 1;
        console.log(`${player[0].score} | ${player[1].score}`);
    }
    if(ball.x > c.width)
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        player[0].score += 1;
        console.log(`${player[0].score} | ${player[1].score}`);
    }

    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    pad[0].move();
    pad[1].move();
    ball.move();

    //draw the objects

    pad[0].draw()
    pad[1].draw()
    ball.draw()
}
