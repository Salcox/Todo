function setup(){
    createCanvas(640, 480);
    describe('canvas with grey background');
}

let posX = 50;
let posY = 50;

function draw(){

    if(keyIsDown(RIGHT_ARROW)){
        console.log("flèche de droite appuyée");
        posX = posX + 5;
     } else {
        console.log("pas appuyée");
     }
     if(keyIsDown(UP_ARROW)){
        console.log("flèche du haut appuyée");
        posY = posY - 5;
     } else {
        console.log("pas appuyée");
     }
     if(keyIsDown(LEFT_ARROW)){
        console.log("flèche de gauche appuyée");
        posX = posX - 5;
     } else {
        console.log("pas appuyée");
     }
     if(keyIsDown(DOWN_ARROW)){
        console.log("flèche du bas appuyée");
        posY = posY + 5;
     } else {
        console.log("pas appuyée");
     }
    clear();
    background(220);
    circle(posX, posY, 50);
    describe('red circle with black outline in mid of gray canvas');
}

function testOutOfScreen(){
   
}