//Create variables here
var dog, happyDog, database, foodS, foodStock;
var food;
function preload()
{
	happyDog= loadImage("images/dogImg.png");
    backgroundImg = loadImage("images/Dog(1).png");

}

function setup() {
	createCanvas(500,500);
  
}


function draw() {  
background(46, 139, 87);
  
 foodStock=database.ref('food');
 foodStock.on("value",readStock);

if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happyDog);
}
 drawSprites();
 textSize(40);
 fill('red');
 stroke(black);
 text("press up arrow key to feed drago");

function readStock(data) {
  foodS=data.val();

}
function writeStock(x) {
  database.ref('/').update({


  )}

  
}


