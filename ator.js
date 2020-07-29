//Ator
let xAtor = 100
let yAtor = 366
let colisao = false

let ponto = 0;

function mostraAtor() {
  image(imgAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2
  }
  if (keyIsDown(DOWN_ARROW) && podeSeMover(yAtor,366)) {
    yAtor += 2
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 2
  }
  if (keyIsDown(RIGHT_ARROW) ) {
    xAtor += 2
  }
}

function verificaColisao() {
  for (let i in xCarros) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], wCarro, hCarro, xAtor, yAtor, 15)
    if (colisao) {
      voltaInicio()
      if(maiorQueZero(ponto)){
        ponto -= 1
      }
    }
  }
}

function voltaInicio() {
  yAtor = 366;
}

function incluiPontos() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240, 0))
  text(ponto, width / 2, 25)
}

function marcaPonto() {
  if (yAtor < 15) {
    ponto +=1
    voltaInicio()
  }
}

function maiorQueZero(x){
    return x > 0
}

function podeSeMover(valor,max){
  return valor < max
}