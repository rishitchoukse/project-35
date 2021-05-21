
var bgImg;
var hotAirBallon,hotAirBallonImg;
var database,positions;

function preload(){
  hotAirBallonImg=loadAnimation("ballon1.png","ballon2.png","ballon3.png");
  bgImg=loadImage("bgImage.png");
}
function setup() {
  createCanvas(1350,600);

  //database=firebase.database();

  hotAirBallon = createSprite(400, 200, 50, 50);
  hotAirBallon.addAnimation("ground",hotAirBallonImg);
  hotAirBallon.scale=0.5;

 // var hotAirBallonposition=database.ref("hotAirBallon/height");
 // hotAirBallonposition.on("value",showError)
}

function draw() {
  background(bgImg); 
  if(keyDown(LEFT_ARROW)){
     changePosition(-1,0);
    hotAirBallon.x = hotAirBallon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
     changePosition(1,0);
    hotAirBallon.x = hotAirBallon.x +10;
}
else if(keyDown(UP_ARROW)){

  hotAirBallon.addAnimation("ground",hotAirBallonImg);
  hotAirBallon.scale=hotAirBallon.scale -0.01;
  hotAirBallon.y = hotAirBallon.y -10;
}
else if(keyDown(DOWN_ARROW)){
     changePosition(0,+1);
    hotAirBallon.addAnimation("ground",hotAirBallonImg);
    hotAirBallon.scale=hotAirBallon.scale +0.01;

    hotAirBallon.y = hotAirBallon.y +10;

}
  drawSprites();
}
function updateHeight(x,y){
database.ref('hotAirBallon/height').set({
  'x' : height.x + x ,
  'y' : height.y + y
})

}

function showError(){
console.log("error");

}
function changePosition(x,y){
  hotAirBallon.x = hotAirBallon.x + x;
  hotAirBallon.y = hotAirBallon.y + y;
}