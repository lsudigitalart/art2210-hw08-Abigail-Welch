let generateCreature = false;
let creatureW = 0;
let creatureH = 0;
let creatureM = 50;


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  translate(width/2, height/2);

  if(generateCreature){
    creatureBuilder(creatureW, creatureH, creatureM);
  }
  

}

function creatureBuilder(creatureWidth, creatureHeight, creatureMouth) {
 
  // EARS
  fill (255)
  noStroke();
  ellipse (creatureWidth/5, -creatureHeight/2, 70, 100) 
  ellipse (-creatureWidth/5, -creatureHeight/2, 70, 100) 

  //INNER EARS
  fill (245, 140, 175)
  noStroke();
  ellipse (creatureWidth/5, -creatureHeight/2, 40, 70) 
  ellipse (-creatureWidth/5, -creatureHeight/2, 40, 70) 

  //NECK
  fill (255);
  noStroke();
  ellipse (0, 120, 100, 300);
  

  // HEAD
  noStroke();
  fill(255)
  ellipse(0, 0, creatureWidth, creatureHeight);

    // WHISKERS
    stroke (0);
    line (-40, 10, -creatureWidth/3, -creatureHeight/8)
    line (40, 10, creatureWidth/3, -creatureHeight/8)
    line (-40, 10, -creatureWidth/3, -creatureHeight/100)
    line (40, 10, creatureWidth/3, -creatureHeight/100)

  //EYES
  fill(0)
  circle(-creatureWidth/8, -creatureHeight/4, 30)
  circle(creatureWidth/8, -creatureHeight/4, 30)

  // MOUTH
  fill (245, 140, 175);
  circle(0, creatureHeight/4, creatureMouth);

  //NOSE
  fill (0)
  ellipse(0, 5, 30, 20)

}

function mousePressed() {
  generateCreature = true;
  
  if(mouseX > width/2) {
    creatureM = random(25, 50);

  }
  if(mouseX < width/2) {
    creatureM = random(0, 25);
  }

  creatureW = 250

  if(mouseY < height/2) {
    creatureH = random(250, 500)
  }

  if(mouseY > height/2) {
    creatureH = random(50, 250)
  }

}


