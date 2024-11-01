let Palavra;

function setup() {
  createCanvas(400, 400);
  Palavra = PalavraAleatória();
}

function PalavraAleatória() {
  let Palavras = ["Exdrúxulo", "Anormal", "Normal", "Estranho"];
  return random(Palavras);
}

function Basic() {
  background("black");
  textSize (40);
  textAlign (CENTER, CENTER);
  fill ("white");
}

function PalavraParcial(Min, Max) {
  let Quantidade = map(mouseX, Min , Max, 1, Palavra.length);
  let Parcial = Palavra.substring(0, Quantidade);
  return Parcial;
}

function draw() {
  Basic();

  Texto = PalavraParcial (0, width);
  text(Texto, 200, 200)

}
