//carro
let yCarros = [40,96,150,215,265,320]
let xCarros = [400,400,400,400,400,400]
let velocidadeCarros = [3,6,9,3,7,12]
let wCarro = 50
let hCarro = 30

let random = 0

function mostraCarro(){
  for (let i in xCarros){
    image(imgCarros[i],xCarros[i],yCarros[i], wCarro,hCarro)
  } 
}

function movimentaCarro(){
  for (let i in xCarros){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  random = Math.floor((2 - 0) * Math.random());
  for (let i in xCarros){
    if (xCarros[i] < -50 || xCarros[i] > 600){
      if(random === 1){
        xCarros[i] = 600
      }
      else{
        velocidadeCarros[i] *= -1
      }
    }
  }
} 