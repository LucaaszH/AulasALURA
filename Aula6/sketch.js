let Palavra; // Ela fora das chaves, pode fazer com que o computador indentifique aonde quer q ela esteja.

function setup() {
  createCanvas(400, 400);

  let Palavras = ["Exdrúxulo", "Anormal", "Normal", "Estranho"];
  Palavra = random(Palavras);

// Aqui foi criado uma Array, e abaixo uma randomizador para aparecer uma palavra diferente a cada vez que rodar.
// Dessa forma em Setup, isso só vai acontecer 1 vez, se estivesse em "DRAW" ela ficaria infinitamente rodando
}

function draw() {
  background("black");
  textSize (40); //Tamanho da frase
  textAlign (CENTER, CENTER); //Centraliza a Frase
  fill ("white");

  let Max = width ;
  let Min = 0 ;

  let Quantidade = map(mouseX, Min , Max, 1, Palavra.length);
  let Parcial = Palavra.substring(0, Quantidade);
  text(Parcial, 200, 200)


}
