const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dinoImg = new Image();
dinoImg.src = `dino.png`;

const dino = {
  x: 10,
  y: 200,
  width: 40,
  height: 50,
  draw() {
    // ctx.fillStyle = `green`;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(dinoImg, this.x, this.y)
  }
}



class Cactus {
  constructor() {
    this.x = 300;
    this.y = 200;
    this.width = 10;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = `red `;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let timer = 0;
let 점프timer = 0;
const cactus여러개 = [];
var animation;


function 프레임마다실행할거() {
  animation = requestAnimationFrame(프레임마다실행할거);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) {
    const cactus = new Cactus();
    cactus여러개.push(cactus);
  }
  cactus여러개.forEach((a, i, o) => {
    // x좌표가 0 미만이면 제거
    if (a.x < 0) {
      o.splice(i, 1)
    }
    a.x-=3;
    충돌(dino, a);
    a.draw();
  })

  // 점프기능 
  if (점프중 == true) {
    dino.y-=5;
    점프timer+=4;
  }
  if(점프중 == false){
    if(dino.y < 200)
    dino.y+=5;
  }
  if(점프timer > 100){
    점프중 = false;
    점프timer = 0;
  }

  dino.draw();
}




프레임마다실행할거();

// 충돌확인 

function 충돌(dino, cactus) {
  var x축 = cactus.x - (dino.x + dino.width);
  var y축 = cactus.y - (dino.y + dino.height);
  if(x축 < 0 && y축 < 0){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  cancelAnimationFrame(animation)
  }
}




var 점프중 = false;
document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    점프중 = true;
  }
});
