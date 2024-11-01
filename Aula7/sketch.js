let Palavra; // Ela fora das chaves, pode fazer com que o computador indentifique aonde quer q ela esteja.

function setup() {
  createCanvas(400, 400);
  Palavra = PalavraAleatória();

// Aqui chamamos a função que randomiza para abreviar e deixar mais fácil de entender o Code
// Dessa forma em Setup, isso só vai acontecer 1 vez
}

function PalavraAleatória() {
  let Palavras = ["Exdrúxulo", "Anormal", "Normal", "Estranho"];
  return random(Palavras);

// O Return server para retornar algo para nós, aqui ele está retornando o valor aleatório e quando é pedido esse função ele retona algo a ela

// Aqui foi criado uma Array, e abaixo uma randomizador para aparecer uma palavra diferente a cada vez que rodar.
}


function Basic() {
  background("black");
  textSize (40); //Tamanho da frase
  textAlign (CENTER, CENTER); //Centraliza a Frase
  fill ("white");
}

function draw() {
  Basic();

  let Max = width ;
  let Min = 0 ;

  let Quantidade = map(mouseX, Min , Max, 1, Palavra.length);
  let Parcial = Palavra.substring(0, Quantidade);
  text(Parcial, 200, 200)


}
