function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imgEstrada);
  mostraAtor()
  mostraCarro()
  movimentaCarro()
  movimentaAtor()
  voltaPosicaoInicial()
  verificaColisao()
  incluiPontos()
  marcaPonto()
  console.log('ué carai')
}



