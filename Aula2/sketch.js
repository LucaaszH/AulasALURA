let Cor; 
// Let é "Faça Existir", uma VAR.
let PosX;
let PosY;
// Ambos Let "POS" são para as posições do Circle

function setup() {
  createCanvas(400, 400);
  background("white");
  Cor = color(random (0, 250), random(0, 250), random (0, 250));
// Aqui está dizendo que a VAR "Cor" é igual a intensidade de cor nos numero designados. Dessa forma mesclando eles

// O primeiro é Vermelho, Segundo Verde, e o Terceiro Azul

// Como foi utilizado o comando "Random", os números estão sendo escolhidos de forma aleatória

  PosX = 200;
  PosY = 200;
}

function draw() {
  circle (PosX,PosY,200) 
// 2 Primeiros = localização, último digito é o tamanho
  stroke ("black");
  fill (Cor) ;

  if (mouseX < PosX) {
  PosX = PosX -1 ;
  }
  if (mouseX > PosX) {
  PosX = PosX +1 ;
  }
  if (mouseY < PosY) {
  PosY -- ;
  }
  if (mouseY > PosY) {
  PosY ++ ;
} // Os If's fizeram com que o Mouse andasse de acordo com o local do ponteiro do mouse em relação as cordenadas da tela

  if (mouseIsPressed) {
  Cor = color(random (0, 250), random(0, 250), random (0, 250));
}
// Caso o Mouse estive pressionado a cor do Circle ira mudar também.


}