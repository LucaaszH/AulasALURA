function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("darkred");
    fill("white");
    textSize(60);
    textAlign(CENTER, CENTER)
    
    let maximo = width;
    let minimo = 0;
    let palavra = "<-------->";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
    
  //  if(mouseX < 50){
  //    let palavra = "C";
  //    text(palavra, 200, 200);
  //  } else {
  //    let palavra = "Caminhante";
  //    text(palavra, 200, 200);
  //  }
  }