var dog, happyDog, database, foodS, foodStock;

function preload()
{
 loadImage ("images/dogImg.png")
 loadImage ("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  
  dog = createSprite(250,250,15,15)
  image = (this.dog,250,250)
  image = (this.happyDog,250,250)

   database = firebase.database();

   if(keyDown(UP_ARROW)){
   foodStock=foodStock-1
}
if(keyDown(UP_ARROW)){
 writeStock(foodS);
 dog.addImage(doghappy)
}

   foodStock = database.ref('food');
   foodStock.on("value",readStock);
}


function draw() { 
  background(46, 139, 87)
  

  drawSprites();
  //add styles here

}



