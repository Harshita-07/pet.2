//Create variables here
var dog, happyDog, foodS, foodStock, database, foodObj, lastfed, fedtime

function preload(){ 
  dogImg=loadImage("dogImg.png"); 
  dogImg1=loadImage("dogImg1.png"); 
}

function setup() {
	createCanvas(500, 650);
  dog = createSprite(250, 550, 20, 20)
  dog.addImage(dogImg);
  dog.scale=0.3;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);



  foodObj = new Food()
var Addfood = createButton("Add Food")
Addfood.position(380, 120)
Addfood.mousePressed(addfoods)
var feed = createButton(" Feed Dargo ")
feed.position (470, 120)
feed.mousePressed(feedDog)
 
}


function draw() {  
  background(46, 139, 87)
  fedtime = database.ref('feedTime');
fedtime.on("value", function(data){
  lastfed = data.val();
})

foodObj.display();

fill(255, 255, 254)
textSize (15)
if(lastfed>=12){
  text("last fed : "+lastfed%12 +"PM", 350, 30)
}
else if(lastfed===0){
  text( "last fed : 12 AM", 350, 30)
}
else {
  text("last fed : "+lastfed +"AM", 350, 30)
}

  drawSprites();
  //add styles here
textSize(18)
fill('black')
stroke(4)
text ('food remaining : '+ foodS, 10, 40)
}

function readStock(data) {
  foodS = data.val();
  foodObj.updateFoodStock(foodS)
}


function feedDog(){
  dog.addImage(dogImg1);
  
  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addfoods(){
    foodS=foodS+1;
    database.ref('/').update({
    Food:foodS
  })
}


