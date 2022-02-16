var ball = {
  x: 100,
  y: 0,
  xspeed: 0,
  yspeed: 10,
  color: ["yellow","blue","red","green"],
  r:10,
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
circle(ball.x,ball.y,ball.r);
fill(ball.color[3]);
ball.yspeed=1;
ball.y=ball.y+ball.yspeed;
}