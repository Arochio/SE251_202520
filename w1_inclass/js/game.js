var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);
var fps = 1000/60;
var timer = setInterval(main, fps);

var p1x, p1y, p2x, p2y;



function main() {
    ctx.fillStyle = `hotpink`;
    ctx.fillRect(p1x, p1y, p2x, p2y);

    
}

c.addEventListener(`mousedown`, e => {
    console.log(e);
    p1x = 0; p1y = 0; p2x = 0; p2y = 0;
    p1x = e.clientX - 9;
    p1y = e.clientY - 9;
    console.log(p1x, p1y);
});

c.addEventListener(`mouseup`, e2 => {
    console.log(e2);
    p2x = (e2.clientX - p1x) - 9;
    p2y = (e2.clientY - p1y) - 9;
    console.log(p2x, p2y);
});