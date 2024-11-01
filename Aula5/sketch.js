function setup() {
  createCanvas(400, 400);
}

function FundoAuto() { // Aqui se cria algo que pode ser chamado várias vezes ao code
  background("black");
  circle(200, 200, 200);
  fill ("darkred");
  stroke ("white");
}

function draw() {
  FundoAuto(); // Aqui eu chamo a Função que foi requisitada
}
