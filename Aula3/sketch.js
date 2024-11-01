let Cor; 

let CircleX;
let CircleY;

function setup() {
  createCanvas(400, 400);
  background("white");

  Cor = color(random (0, 250), random(0, 250), random (0, 250));

  CircleX = [0, 0];
  CircleY = [random (height), random(height)];
// os [] server para formar uma Array, nesse caso, guardando informações para ambos os Circles
// A propriedade height determina a altura da área do conteúdo de um elemento.
  }

function draw() {
  
  stroke ("black");
  fill (Cor) ;

  for(let Contador in CircleX) {
  circle(CircleX[Contador], CircleY[Contador],70);
  CircleX [Contador] += random(0,3);
  CircleY [Contador] -= random(-3,3);

  if (CircleX[Contador] >= width) {
    CircleX[Contador] = 0;
    CircleY[Contador] = random(height);
// Esse "If", faz com que o circulo volte para a esquerda quando chega ao final do "For"
  }
}
//For é "para"
// O random Faz com que ande aleatoriamente entre as cordenadas em ()
// Já esse For está fazendo com que os Circles sejam criados até um número específico, dessa forma ele fica repetindo esse laço até a hora que eu mandar

  if (mouseIsPressed) {
  Cor = color(random (0, 250), random(0, 250), random (0, 250));
  }

}