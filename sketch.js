// Console.Log serve para registrar algo
function setup() {
    createCanvas(400, 400); // Cria uma espécie de tela
  }
  
  function draw() {
    background("#8B0000"); // Mudar fundo do Canvas
  
    stroke ("#DC143C"); // Mudar cor da linha do Rect
    fill ("#000000"); // Mudar fundo do Rect
  
  if (mouseIsPressed) { 
  // if, significa "se"
  // Se o Mouse estiver pressionado
  
    rect (mouseX, mouseY, 200, 100); }
  // Cria um Retangulo, seus 2 primeiros digitos são o local e os 2 últimos a largura e tamanho
  //Se os 2 primeiros digitos forem Mouse(Cordenada) ele segue o mouse segundo a cordenada
  
  }