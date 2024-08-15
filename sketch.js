let xb = 300;
let yb = 200;
let vxb = 6;
let vyb = 6;
let diametro = 15;
let raio = diametro/2;

let xr = 585;
let yr = 150;
let lr = 7;
let ar = 80;

let xri = 5;
let yri = 150;

let colidiu = false;

let pontosoponente = 0;
let meuspontos = 0;

let trilha; 
let raquetada;
let ponto; 


function setup() {
  createCanvas(600, 400);
}

function preloand (){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquete")
  
}

function draw() {
  background(0);
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraquete();
  mexeraqueteinimiga();
  quicaraquetebola(xr,yr);
  quicaraquetebola(xri, yri);
  placar();
  pontos();
  letras();
  stroke("grey");
  rect(300, 0, 1, 400);

  
}
function mostrabola() {
  circle (xb,yb,diametro);
}
function mexebola(){
  xb += vxb;
  yb += vyb;
}
function quicabola(){
  if (xb + raio > width || xb - raio < 0){
    vxb *= -1;
  }
  if (yb + raio > height || yb - raio < 0){
    vyb *= -1;
  }


}
function mostraraquete(x,y){
  rect (x,y,lr,ar);
}
function mexeraquete(){
  if(keyIsDown(DOWN_ARROW))
     yr += 10;
     
     if(keyIsDown(UP_ARROW))
     yr -= 10;
  
}
function mexeraqueteinimiga(){
  if(keyIsDown(83))
     yri += 10;
     
if(keyIsDown(87))
     yri -= 10;
  
} 
function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xb,yb,raio);
  
  if(colidiu){
     vxb *= -1
     }
}


function placar(){
  stroke("white");
  textAlign(CENTER);
  textSize(16);
  fill("violet");
  rect(150,10,40,20);
  fill("white");
  text(meuspontos,170,15);
  
  stroke("white");
  textAlign(CENTER);
  textSize(16);
  fill("lightblue");
  rect(430,10,40,20);
  fill("white");
  text(pontosoponente, 450,15);
        
}
function pontos (){
  if (xb > 590){
  meuspontos += 1;
  }
  if (xb < 11){
    pontosoponente += 1;
  }
}


function letras (){ 
  let frase = "MEUS PONTOS";
  let frase2 = "PONTOS OPONENTE";
  textSize(20);
  textAlign (LEFT,TOP);
  fill("white");
  text(frase, 95, 40);
  
  textSize(20);
  textAlign (LEFT,TOP);
  fill("white");
  text(frase2, 340, 40);
}