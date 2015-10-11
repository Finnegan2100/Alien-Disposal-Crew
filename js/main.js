var canvas = document.getElementById("theCanvas");  //LEFT CANVAS
var context = canvas.getContext("2d");

var canvas2 = document.getElementById("theCanvas2");  //RIGHT CANVAS
var context2 = canvas2.getContext("2d");

var spriteObject =    //MAIN OBJECT
{
width: 20,
height: 20,
x: 0,
y: 0,
vx: 3,
vy: 0,
sourceX: 0,
sourceY: 0,
sourceWidth: 0,
sourceHeight: 0,
gravity: 2.1,
explode: false,
canShoot: true,
visible: true,
disappear: false,

centerX: function()
{
return this.x + (this.width / 2);
},
centerY: function()
{
return this.y + (this.height / 2);
},
halfWidth: function()
{
return this.width / 2;
},
halfHeight: function()
{
return this.height / 2;
}
};

var theme = document.querySelector("#theme");  
theme.load();


var zombies = [];  //ARRAY FOR ZOMBIES
var pieces = [];   //ARRAY FOR DESTROYED ZOMBIES PIECES

var topSwitcherRandom1 = 235;   //TEMPORARILY AT 235 UNTIL RANDOMNESS ASSIGNED
var crusher1On = false;
var zombieRight = true;
var gotZombie = false;
var shootZombie = false;

var level = 0;
var levelWon = false;
var gameOver = false;

var droidAlive = false;

var out = 1;


var backgroundTitle = Object.create(spriteObject);
backgroundTitle.x = 0;
backgroundTitle.y = 5;
backgroundTitle.width = 550;
backgroundTitle.height = 400;

var backgroundTitleImage = new Image();
backgroundTitleImage.src = "steel.jpg";

var backgroundGame = Object.create(spriteObject);
backgroundGame.x = 0;
backgroundGame.y = 0;
backgroundGame.width = 550;
backgroundGame.height = 400;

var backgroundGameImage = new Image();
backgroundGameImage.src = "backgroundnew.png";

var backgroundGameRight = Object.create(spriteObject);
backgroundGameRight.x = 0;
backgroundGameRight.y = 0;
backgroundGameRight.width = 300;
backgroundGameRight.height = 400;

var backgroundGameRightImage = new Image();
backgroundGameRightImage.src = "disposalwithshoot.png";



var glassOverlay = Object.create(spriteObject);
glassOverlay.x = 0;
glassOverlay.y = 0;
glassOverlay.width = 300;
glassOverlay.height = 400;

var glassOverlayImage = new Image();
glassOverlayImage.src = "glassoverlay.png";

var backgroundTop = Object.create(spriteObject);
backgroundTop.x = 0;
backgroundTop.y = 5;
backgroundTop.width = 550;
backgroundTop.height = 150;

var backgroundTopImage = new Image();
backgroundTopImage.src = "alienWall.jpg";

var backgroundBottom = Object.create(spriteObject);
backgroundBottom.x = 0;
backgroundBottom.y = 165;
backgroundBottom.width = 550;
backgroundBottom.height = 190;

var backgroundBottomImage = new Image();
backgroundBottomImage.src = "alienWall.jpg";

var backgroundSide = Object.create(spriteObject);
backgroundSide.x = 0;
backgroundSide.y = 165;
backgroundSide.width = 550;
backgroundSide.height = 190;

var backgroundSideImage = new Image();
backgroundSideImage.src = "alienWall2.jpg";

var backgroundSide2 = Object.create(spriteObject);
backgroundSide2.x = 0;
backgroundSide2.y = 0;
backgroundSide2.width = 550;
backgroundSide2.height = 400;

var backgroundSide2Image = new Image();
backgroundSide2Image.src = "rustyWall.jpg";

var spaceBackground1 = Object.create(spriteObject);
spaceBackground1.x = 370;
spaceBackground1.y = 180;
spaceBackground1.width = 100;
spaceBackground1.height = 100;

var spaceBackground1Image = new Image();
spaceBackground1Image.src = "space.jpg";

var spaceBackground2 = Object.create(spriteObject);
spaceBackground2.x = 70;
spaceBackground2.y = 180;
spaceBackground2.width = 100;
spaceBackground2.height = 100;

var spaceBackground2Image = new Image();
spaceBackground2Image.src = "space.jpg";

var spaceBackground3 = Object.create(spriteObject);
spaceBackground3.x = 250;
spaceBackground3.y = 30;
spaceBackground3.width = 120;
spaceBackground3.height = 40;

var spaceBackground3Image = new Image();
spaceBackground3Image.src = "space.jpg";

var tread1 = Object.create(spriteObject);
tread1.x = 0;
tread1.y = 149;
tread1.width = 550;
tread1.height = 20;
tread1.sourceX = 0;
tread1.sourceWidth = 550;
tread1.sourceHeight = 20;

var tread1Image = new Image();
tread1Image.src = "tredsheet.png";

var tread2 = Object.create(spriteObject);
tread2.x = 0;
tread2.y = 350;
tread2.width = 550;
tread2.height = 20;
tread2.sourceX = 0;
tread2.sourceWidth = 550;
tread2.sourceHeight = 20;

var tread2Image = new Image();
tread2Image.src = "tredsheet.png";


//var floorTop = Object.create(spriteObject);
//floorTop.x = 0;
//floorTop.y = 150;
//floorTop.width = 550;
//floorTop.height = 20;

//var floorTopImage = new Image();
//floorTopImage.src = "platform.jpg";

//var floorBottom = Object.create(spriteObject);
//floorBottom.x = 0;
//floorBottom.y = 350;
//floorBottom.width = 550;
//floorBottom.height = 20;

//var floorBottomImage = new Image();
//floorBottomImage.src = "platform.jpg";

//SCAN LINES

var scanLines1 = Object.create(spriteObject);
scanLines1.x = 0;
scanLines1.y = 0;
scanLines1.width = 550;
scanLines1.height = 400;

var scanLines1Image = new Image();
scanLines1Image.src = "scanlines10per.png";

var scanLines2 = Object.create(spriteObject);
scanLines2.x = 0;
scanLines2.y = 0;
scanLines2.width = 550;
scanLines2.height = 400;

var scanLines2Image = new Image();
scanLines2Image.src = "scanlines20per.png";

var scanLines3 = Object.create(spriteObject);
scanLines3.x = 0;
scanLines3.y = 0;
scanLines3.width = 550;
scanLines3.height = 400;

var scanLines3Image = new Image();
scanLines3Image.src = "scanlinesstatic.png";

var scanLines4 = Object.create(spriteObject);
scanLines4.x = 0;
scanLines4.y = 0;
scanLines4.width = 550;
scanLines4.height = 400;

var scanLines4Image = new Image();
scanLines4Image.src = "staticlines.png";

var scanLines5 = Object.create(spriteObject);
scanLines5.x = 0;
scanLines5.y = 0;
scanLines5.width = 550;
scanLines5.height = 400;

var scanLines5Image = new Image();
scanLines5Image.src = "superstaticlines1.png";

//VARIABLES FOR V-HOLD

var centerScale = 0;
var range = Math.random() * 2;
var angle = 100;
var speed = 4;

var acid = Object.create(spriteObject);
acid.x = 0;
acid.y = 5;
acid.width = 550;
acid.height = 400;

var acidImage = new Image();
acidImage.src = "acid.png";

//HUMAN COMPONENTS
var rect1 = Object.create(spriteObject);
rect1.x = 290;
rect1.y = 230;
rect1.width = 40;
rect1.height = 55;
rect1.sourceX = 120;
rect1.sourceWidth = 30;
rect1.sourceHeight = 40;


var rect1Image = new Image();
rect1Image.src = "playerhead.png";

var rect2 = Object.create(spriteObject);
rect2.x = 290;
rect2.y = 270;
rect2.width = 40;
rect2.height = 55;
rect2.sourceX = 120;
rect2.sourceWidth = 30;
rect2.sourceHeight = 40;

var rect2Image = new Image();
rect2Image.src = "playertorso.png";

var rect3 = Object.create(spriteObject);
rect3.x = 290;
rect3.y = 310;
rect3.width = 40;
rect3.height = 55;
rect3.sourceX = 120;
rect3.sourceWidth = 30;
rect3.sourceHeight = 40;

var rect3Image = new Image();
rect3Image.src = "playerlegs.png";


//ZOMBIE COMPONENTS
for(var i = 0; i < 15; i++)
{
var rect4 = Object.create(spriteObject);
rect4.x = 137;
rect4.y = 30;
rect4.width = 40;
rect4.height = 55;
rect4.sourceX = 90;
rect4.sourceWidth = 30;
rect4.sourceHeight = 40;
rect4.gravity = 7;
rect4.vx = 3;
zombies.push(rect4);
var rect4Image = new Image();
rect4Image.src = "alientop.png";

var rect5 = Object.create(spriteObject);
rect5.x = 130;
rect5.y = 70;
rect5.width = 40;
rect5.height = 55;
rect5.sourceX = 90;
rect5.sourceWidth = 30;
rect5.sourceHeight = 40;
zombies.push(rect5);
var rect5Image = new Image();
rect5Image.src = "alienmid.png";

var rect6 = Object.create(spriteObject);
rect6.x = 130;
rect6.y = 110;
rect6.width = 40;
rect6.height = 55;
rect6.sourceX = 90;
rect6.sourceWidth = 30;
rect6.sourceHeight = 40;
zombies.push(rect6);
var rect6Image = new Image();
rect6Image.src = "alienbot.png";
}


//DROID COMPONENTS

var rect7 = Object.create(spriteObject);
rect7.x = 40;
rect7.y = 30;
rect7.sourceX = 90;
rect7.sourceWidth = 30;
rect7.sourceHeight = 40;
rect7.width = 40;
rect7.height = 55;
rect7.vx = 3.5;

var rect7Image = new Image();
rect7Image.src = "droidhead.png";

var rect8 = Object.create(spriteObject);
rect8.x = 40;
rect8.y = 70;
rect8.sourceX = 90;
rect8.sourceWidth = 30;
rect8.sourceHeight = 40;
rect8.width = 40;
rect8.height = 55;
rect8.vx = 3.5;

var rect8Image = new Image();
rect8Image.src = "droidbody.png";

var rect9 = Object.create(spriteObject);
rect9.x = 40;
rect9.y = 110;
rect9.sourceX = 90;
rect9.sourceWidth = 30;
rect9.sourceHeight = 40;
rect9.width = 40;
rect9.height = 55;
rect9.vx = 3.5;

var rect9Image = new Image();
rect9Image.src = "droidlegs.png";

var rect7b = Object.create(spriteObject);
rect7b.x = 40;
rect7b.y = 30;
rect7b.sourceX = 90;
rect7b.sourceWidth = 30;
rect7b.sourceHeight = 40;
rect7b.width = 40;
rect7b.height = 55;
rect7b.vx = 3.5;

var rect7bImage = new Image();
rect7bImage.src = "droidsleephead.png";

var rect8b = Object.create(spriteObject);
rect8b.x = 40;
rect8b.y = 70;
rect8b.sourceX = 90;
rect8b.sourceWidth = 30;
rect8b.sourceHeight = 40;
rect8b.width = 40;
rect8b.height = 55;
rect8b.vx = 3.5;

var rect8bImage = new Image();
rect8bImage.src = "droidsleepbody.png";

var rect9b = Object.create(spriteObject);
rect9b.x = 40;
rect9b.y = 110;
rect9b.sourceX = 90;
rect9b.sourceWidth = 30;
rect9b.sourceHeight = 40;
rect9b.width = 40;
rect9b.height = 55;
rect9b.vx = 3.5;

var rect9bImage = new Image();
rect9bImage.src = "droidsleeplegs.png";



//RAT
var rat = Object.create(spriteObject);
rat.x = 20;
rat.y = 120;
rat.width = 30;
rat.height = 30;
rat.sourceX = 20;
rat.sourceWidth = 20;
rat.sourceHeight = 20;
rat.vx = 4;
rat.left = false;

var ratImage = new Image();
ratImage.src = "mouse.png";



//RAT 2
var rat2 = Object.create(spriteObject);
rat2.x = canvas.width / 2;
rat2.y = 120;
rat2.vx = 4.3;
rat2.width = 30;
rat2.height = 30;
rat2.sourceX = 20;
rat2.sourceWidth = 20;
rat2.sourceHeight = 20;
rat2.left = true;

var rat2Image = new Image();
rat2Image.src = "mouse.png";

//ACID DRIP 1
var drip1 = Object.create(spriteObject);
drip1.x = 80;
drip1.y = 170;
drip1.width = 10;
drip1.height = 10;
drip1.vy = 2;

var drip1Image = new Image();
drip1Image.src = "acid.png";

//ACID DRIP 2
var drip2 = Object.create(spriteObject);
drip2.x = 320;
drip2.y = 60;
drip2.width = 10;
drip2.height = 10;
drip2.vy = 2;

var drip2Image = new Image();
drip2Image.src = "acid.png";

//DRIP 1 FOR LEVEL 7
var drip71 = Object.create(spriteObject);
drip71.x = 80;
drip71.y = 170;
drip71.width = 10;
drip71.height = 10;
drip71.vy = 2;

var drip71Image = new Image();
drip71Image.src = "acid.png";

//DRIP 2 FOR LEVEL 7
var drip72 = Object.create(spriteObject);
drip72.x = 320;
drip72.y = 60;
drip72.width = 10;
drip72.height = 10;
drip72.vy = 2;

var drip72Image = new Image();
drip72Image.src = "acid.png";

//DRIP 3 FOR LEVEL 7
var drip73 = Object.create(spriteObject);
drip73.x = 427;
drip73.y = 190;
drip73.width = 10;
drip73.height = 10;
drip73.vy = 2;

var drip73Image = new Image();
drip73Image.src = "acid.png";

//DRIP 4 FOR LEVEL 7
var drip74 = Object.create(spriteObject);
drip74.x = 190;
drip74.y = 290;
drip74.width = 10;
drip74.height = 10;
drip74.vy = 2;

var drip74Image = new Image();
drip74Image.src = "acid.png";

//DRIP 5 FOR LEVEL 7
var drip75 = Object.create(spriteObject);
drip75.x = 410;
drip75.y = 240;
drip75.width = 10;
drip75.height = 10;
drip75.vy = 2;

var drip75Image = new Image();
drip75Image.src = "acid.png";



//TRASH DISPOSAL UNIT
var trashCan = Object.create(spriteObject);
trashCan.x = 400;
trashCan.y = 90;
trashCan.width = 50;
trashCan.height = 60;

var trashCanImage = new Image();
trashCanImage.src = "unit.png";


//HOLE FOR INSERING TRASH
var trashHole = Object.create(spriteObject);
trashHole.x = 410;
trashHole.y = 105;
trashHole.width = 30;
trashHole.height = 20;

//LIGHT ABOVE TRASH DISPOSAL UNIT
var trashLight1 = Object.create(spriteObject);
trashLight1.x = 419;
trashLight1.y = 45;
trashLight1.width = 15;
trashLight1.height = 15;

var trashLight1Image = new Image();
trashLight1Image.src = "alarmred.png";

var trashLight2 = Object.create(spriteObject);
trashLight2.x = 419;
trashLight2.y = 45;
trashLight2.width = 15;
trashLight2.height = 15;

var trashLight2Image = new Image();
trashLight2Image.src = "alarmbrightred.png";

//PUSHING EXPLODED ZOMBIE PIECES INTO AN ARRAY

for (var j = 0; j < 10; j++)
{
var piece1 = Object.create(spriteObject);
piece1.x = 20;
piece1.y = 40;
pieces.push(piece1);

var piece1Image = new Image();
piece1Image.src = "alientopcompact.png";

var piece2 = Object.create(spriteObject);
piece2.x = 20;
piece2.y = 40;
pieces.push(piece2);

var piece2Image = new Image();
piece2Image.src = "alienmidcompact.png";

var piece3 = Object.create(spriteObject);
piece3.x = 20;
piece3.y = 40;
pieces.push(piece3);

var piece3Image = new Image();
piece3Image.src = "alienbotcompact.png";
}

//SWITCHER FOR ACTIVATING LASER
var switcher1 = Object.create(spriteObject);
switcher1.x = 235;
switcher1.y = 129;
switcher1.width = 50;

var switcher1Image = new Image();
switcher1Image.src = "button_red.png";

var switcher2 = Object.create(spriteObject);
switcher2.x = 235;
switcher2.y = 129;
switcher2.width = 50;

var switcher2Image = new Image();
switcher2Image.src = "buttongreen.png";

//CRUSHER WHICH KILLS ZOMBIE
var crusher1 = Object.create(spriteObject);
crusher1.x = 250;
crusher1.y = 170;

var crusher1Image = new Image();
crusher1Image.src = "laser.png";

//GUN FOR PULVERIZING ZOMBIE PIECES
var gun = Object.create(spriteObject);
gun.x = 20;
gun.y = 0;
gun.width = 40;
gun.vx = 5;

var gunImage = new Image();
gunImage.src = "cannon.png";

//LASER WHICH IS SHOT FROM GUN
var bullet = Object.create(spriteObject);
bullet.x = 30;
bullet.y = 0;
bullet.vy = 0;

staticTimer();
staticTimer2();

//KEY LISTENERS
window.addEventListener("keydown",onKeyDown,false);
window.addEventListener("keyup",onKeyUp,false);

function onKeyDown(event)
{event.preventDefault();
if(event.keyCode == 37)  //MOVE LEFT
{
rect1.vx = -5;
rect2.vx = -5;
rect3.vx = -5;

rect1.sourceX = 0;
rect2.sourceX = 0;
rect3.sourceX = 0;

//rect1.sourceX += 30;
//rect2.sourceX += 30;
//rect3.sourceX += 30;

if(rect1.sourceX > 120)
{
rect1.sourceX = 0;
}
if(rect2.sourceX > 120)
{
rect2.sourceX = 0;
}
if(rect3.sourceX > 120)
{
rect3.sourceX = 0;
}

}
if(event.keyCode == 39) //MOVE RIGHT
{
event.preventDefault();
rect1.vx = 13;
rect2.vx = 13;
rect3.vx = 13;

rect1.sourceX = 120;
rect2.sourceX = 120;
rect3.sourceX = 120;

//rect1.sourceX += 30;
//rect2.sourceX += 30;
//rect3.sourceX += 30;

if(rect1.sourceX > 200)
{
rect1.sourceX = 120;
}
if(rect2.sourceX > 200)
{
rect2.sourceX = 120;
}
if(rect3.sourceX > 200)
{
rect3.sourceX = 120;
}

}
if(event.keyCode == 40 && bullet.canShoot === true && shootZombie === true) //SHOOTING LASER FROM GUN
{
event.preventDefault();
bullet.vy = 16;
}

if(event.keyCode === 32) //SPACE BAR
{
event.preventDefault();
if(level === 0)    
{
level = 1;
gameOver = false;
}
if(gameOver === true && rect3.y > 370 || rect3.x > canvas.width) // RESETTING EVERYTHING FOR GAME OVER
{

if(level === 10 || level === 7 || level === 8 || level === 9)
{

zombies[0].explode = false;
zombies[1].explode = false;
zombies[2].explode = false;
zombies[0].vx = 3;
zombies[1].vx = 3;
zombies[2].vx = 3;
gotZombie = false;
}

levelWon = false;
piece1.disappear = false;
piece2.disappear = false;
piece3.disappear = false;
gameOver = false;
level = level;
bullet.canShoot = false;
gotZombie = false;
shootZombie = false;
pieces.push(piece1);
pieces.push(piece2);
pieces.push(piece3);
zombies.splice(0,3);
zombies.push(rect4);
zombies.push(rect5);
zombies.push(rect6);
pieces.splice(0,3);
rect1.explode = false;
rect2.explode = false;
rect3.explode = false;
zombies[0].explode = false;
zombies[1].explode = false;
zombies[2].explode = false;
zombies[0].visible = true;
zombies[1].visible = true;
zombies[2].visible = true;
gun.x = 20;
rect1.x = 290;
rect1.y = 230;
rect2.x = 290;
rect2.y = 270;
rect3.x = 290;
rect3.y = 310;
zombies[0].x = 132;
zombies[0].y = 30;
zombies[1].x = 130;
zombies[1].y = 70;
zombies[2].x = 130;
zombies[2].y = 110;
gun.vx = 5;
piece1.x = 20;
piece1.y = 40;
piece2.x = 20;
piece2.y = 40;
piece3.x = 20;
piece3.y = 40;
piece1.vx = 0;
piece1.vy = 0;
piece2.vx = 0;
piece2.vy = 0;
piece3.vx = 0;
piece3.vy = 0;
out = 1;

}
if(level >= 1 && levelWon === true && piece1.disappear === true) //RESETTING EVERYTHING AFTER WINNING A LEVEL
{


if(level === 10 || level === 7 || level === 8 || level === 9)
{

zombies[0].explode = false;
zombies[1].explode = false;
zombies[2].explode = false;
zombies[0].vx = 3;
zombies[1].vx = 3;
zombies[2].vx = 3;
zombies[0].x = 132;
zombies[0].y = 30;
zombies[1].x = 130;
zombies[1].y = 70;
zombies[2].x = 130;
zombies[2].y = 110;
gotZombie = false;
}

level++;
levelWon = false;
piece1.disappear = false;
piece2.disappear = false;
piece3.disappear = false;
bullet.canShoot = false;
gotZombie = false;
shootZombie = false;
pieces.push(piece1);
pieces.push(piece2);
pieces.push(piece3);
zombies.splice(0,3);
zombies.push(rect4);
zombies.push(rect5);
zombies.push(rect6);
pieces.splice(0,3);
zombies[0].explode = false;
zombies[1].explode = false;
zombies[2].explode = false;
zombies[0].visible = true;
zombies[1].visible = true;
zombies[2].visible = true;
gun.x = 20;
piece1.x = 20;
piece1.y = 40;
piece2.x = 20;
piece2.y = 40;
piece3.x = 20;
piece3.y = 40;
piece1.vx = 0;
piece1.vy = 0;
piece2.vx = 0;
piece2.vy = 0;
piece3.vx = 0;
piece3.vy = 0
out = 1;
}
}
}

function onKeyUp(event)
{
if(event.keyCode == 37) //LEFT
{
event.preventDefault();
rect1.vx = 3;
rect2.vx = 3;
rect3.vx = 3;
}
if(event.keyCode == 39) //RIGHT
{
event.preventDefault();
rect1.vx = 3;
rect2.vx = 3;
rect3.vx = 3;
}
if(event.keyCode === 40) //RETRACTING LASER
{
event.preventDefault();
bullet.vy = -20;
}
}

function staticTimer()
{
context.drawImage(scanLines1Image,scanLines1.x,scanLines1.y,scanLines1.width,scanLines1.height);
window.setTimeout(staticTimer,Math.random() * 1000);
}
function staticTimer2()
{
context.drawImage(scanLines5Image,scanLines5.x,scanLines5.y,scanLines5.width,scanLines5.height);
window.setTimeout(staticTimer2,Math.random() * 2000);
}

window.setInterval(lightsOut,1200); //TIMER FOR LEVELS WHERE THE LIGHTS FLICKER


function lightsOut()  //LIGHT FLICKERING FOR LEVELS 6 + 9
{
if(level === 6 || level === 9)
{
out++;  //1 ADDED TO OUT
}
}


//MAIN LOOP

main();

function main()
{

context.clearRect(0,0,canvas.width,canvas.height);   //CLEARING CANVAS 1
context2.clearRect(0,0,canvas2.width,canvas2.height); //CLEARING CANVAS 2
window.setTimeout(main,21); //TIMEOUT MAIN LOOP


if(level === 0)   //IF THE TITLE SCREEN IS VISIBLE
{

context.drawImage(backgroundTitleImage,backgroundTitle.x,backgroundTitle.y,backgroundTitle.width,backgroundTitle.height);
context2.drawImage(backgroundTitleImage,backgroundTitle.x,backgroundTitle.y,backgroundTitle.width,backgroundTitle.height);

//DRAWING THE SCI-FI DOOR ON THE LEFT CANVAS

context.lineWidth = 5;   
context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(canvas.width / 2, 0);
context.lineTo(275,40);
context.lineTo(275,80);
context.lineTo(225,120);
context.lineTo(225,160);
context.lineTo(275,200);
context.lineTo(275,240);
context.lineTo(225,280);
context.lineTo(225,320);
context.lineTo(275,360);
context.lineTo(275,400);
context.stroke();
context.closePath();

//DRAWING THE SCI-FI DOOR ON THE RIGHT CANVAS

context2.lineWidth = 5;
context2.strokeStyle = "#000000";
context2.beginPath();
context2.moveTo(canvas.width / 2, 0);
context2.lineTo(275,40);
context2.lineTo(275,80);
context2.lineTo(225,120);
context2.lineTo(225,160);
context2.lineTo(275,200);
context2.lineTo(275,240);
context2.lineTo(225,280);
context2.lineTo(225,320);
context2.lineTo(275,360);
context2.lineTo(275,400);
context2.stroke();
context.closePath();

//DRAWING THE BLACK AND YELLOW LINES ON THE LEFT CANVAS

for(var i = 0; i < 600; i += 80)
{

context.beginPath();
context.fillStyle = "#ff0";
context.moveTo(-40 + i,20);
context.lineTo(0 + i,0);
context.lineTo(40 + i,0);
context.lineTo(0 + i,20);
context.lineTo(-40 + i,20);
context.fill();
context.closePath();

context.fillStyle = "#000";
context.beginPath();
context.moveTo(0 + i,20);
context.lineTo(40 + i,0);
context.lineTo(80 + i,0);
context.lineTo(40 + i,20);
context.lineTo(0 + i,20);
context.fill();
context.closePath();
}

//DRAWING THE BLACK AND YELLOW LINES ON THE RIGHT CANVAS

for(var i = 0; i < 460; i += 80)
{
context2.fillStyle = "#ff0";
context2.beginPath();
context2.moveTo(-40 + i,20);
context2.lineTo(0 + i,0);
context2.lineTo(40 + i,0);
context2.lineTo(0 + i,20);
context2.lineTo(-40 + i,20);
context2.fill();
context.closePath();

context2.fillStyle = "#000";
context2.beginPath();
context2.moveTo(0 + i,20);
context2.lineTo(40 + i,0);
context2.lineTo(80 + i,0);
context2.lineTo(40 + i,20);
context2.lineTo(0 + i,20);
context2.fill();
context.closePath();
}

//TITLE SCREEN TEXT

context.fillStyle = "#ffffff";
context.font = " 44px Orator Std";
context.fillText("ALIEN DISPOSAL CREW",6,140);
context.font = " 26px Orator Std";

context.fillText("Press SPACE to begin",116,360);
context.fillStyle = "rgba(51,51,51,.9)";
context.fillRect(0,180,canvas.width,100);
context.fillStyle = "#000000";
context.font = "bold 26px verdana";
context.fillText("A game by Ben W. Savage",86,220);
context.fillText("Art By Brian Callahan",112,260);
context.closePath();

context2.fillStyle = "#ffffff";
context2.font = "bold 18px verdana";
context2.fillText("MADE FOR THE",16,330);
context2.font = "bold 18px verdana";
context2.fillText("JS13K COMPETITION",16,360);
context2.fillStyle = "rgba(51,51,51,.9)";
context2.fillRect(0,180,canvas.width,100);
context.closePath();

}


if(level > 0)  //IF THE SCREEN IS ANYTHING BUT THE TITLE SCREEN
{
context.drawImage(backgroundGameImage,backgroundGame.x,backgroundGame.y,backgroundGame.width,backgroundGame.height);
context2.drawImage(backgroundGameRightImage,backgroundGameRight.x,backgroundGameRight.y,backgroundGameRight.width,backgroundGameRight.height);
//context2.drawImage(glassOverlayImage,glassOverlay.x,glassOverlay.y,glassOverlay.width,glassOverlay.height);
//context.drawImage(backgroundTopImage,backgroundTop.x,backgroundTop.y,backgroundTop.width,backgroundTop.height);
//context.drawImage(backgroundBottomImage,backgroundBottom.x,backgroundBottom.y,backgroundBottom.width,backgroundBottom.height);
//context2.drawImage(backgroundSide2Image,backgroundSide2.x,backgroundSide2.y,backgroundSide2.width,backgroundSide2.height);

//theme.play();
context.lineWidth = "1";
context.strokeStyle = "000";
context.fillStyle = "#000";
context.font = "bold 20px verdana";
context.fillText("LVL: " + level,10,390)   //LEVEL INDICATOR ON BOTTOM-LEFT
context.fillStyle = "#222";
context.font = "bold 14px Zado";
context.fillText("SeCT0R 5c 3-11-2075 recON ///TemTech Surveillance ",100,390) 

context.fillStyle = "#333";      //DRAWING THE PIPE IN THE LEFT CANVAS
context.fillRect(0,0,550,20);
context.closePath();

/*
context2.fillStyle = "#000";		// DRAWING THE GRADIENT LINES ON THE RIGHT CANVAS
context2.fillRect(0,380,300,20);
context2.fillStyle = "#111";
context2.fillRect(0,360,300,20);
context2.fillStyle = "#222";
context2.fillRect(0,340,300,20);
context2.fillStyle = "#333";
context2.fillRect(0,320,300,20);
context2.fillStyle = "#444";
context2.fillRect(0,300,300,20);
context2.fillStyle = "#555";
context2.fillRect(0,280,300,20);
context2.fillStyle = "#666";
context2.fillRect(0,260,300,20);
context2.fillStyle = "#777";
context2.fillRect(0,240,300,20);
context2.fillStyle = "#888";
context2.fillRect(0,220,300,20);
context2.fillStyle = "#aaa";
context2.fillRect(0,200,300,20);
context2.fillStyle = "#bbb";
context2.fillRect(0,180,300,20);
*/
context2.fillStyle = "#ccc";			//WRITING THE TEXT ON THE RIGHT CANVAS
context2.font = "bold 52px verdana";
context2.fillText("95-AC4",47,135)

/*
for(var i = 0; i < 460; i += 80)	//YELLOW AND BLACK LINES ON THE RIGHT CANVAS
{

context2.fillStyle = "#ff0";
context2.beginPath();
context2.moveTo(-40 + i,200);
context2.lineTo(0 + i,180);
context2.lineTo(40 + i,180);
context2.lineTo(0 + i,200);
context2.lineTo(-40 + i,200);
context2.fill();
context.closePath();

context2.fillStyle = "#000";
context2.beginPath();
context2.moveTo(0 + i,200);
context2.lineTo(40 + i,180);
context2.lineTo(80 + i,180);
context2.lineTo(40 + i,200);
context2.lineTo(0 + i,200);
context2.fill();
context.closePath();
}
*/

//HUMAN MOVE

rect1.x += rect1.vx;
rect2.x += rect1.vx;
rect3.x += rect1.vx;

//ZOMBIE MOVE

zombies[0].x += zombies[0].vx;
zombies[1].x += zombies[0].vx;
zombies[2].x += zombies[0].vx;



//MAKING AOMBIE'S HEAD STICK OUT

zombies[0].x = zombies[1].x + 5;  

//TREADMILL MOVE

tread1.sourceX += 550;
tread2.sourceX += 550;

if(tread1.sourceX > 1100)
{
tread1.sourceX = 0;
}
if(tread2.sourceX > 1100)
{
tread2.sourceX = 0;
}


//ACTIVATE CRUSHER

if(crusher1On === true)
{
if(crusher1.height < 180)  //IF LASER HAS NOT REACHED BOTTOM, CONTINUE GROWING
{
crusher1.height += 8;
}
}

if(crusher1On === false)  //IF LASER IS OFF, RECTRACT
{
crusher1.height = 20;
context.drawImage(switcher1Image,switcher1.x,switcher1.y,switcher1.width,switcher1.height);
droidAlive = false;  //ACTIVATE DROID
}

if(crusher1On === true || bullet.height > 20)  //IF LASER IS ON AND IS 
{
droidAlive = true; // DISACTIVATE DROID
//context.fillStyle = "#4EA12F";
context.drawImage(switcher2Image,switcher2.x,switcher2.y,switcher2.width,switcher2.height);
}

//context.fillRect(topSwitcherRandom1,130,switcher1.width,switcher1.height); //DRAW SWITCH
//context.drawImage(switcher2Image,switcher2.x,switcher2.y,switcher2.width,switcher2.height);
crusher1On = false; //CRUSHER IS OFF

//context.drawImage(spaceBackground1Image,spaceBackground1.x,spaceBackground1.y,spaceBackground1.width,spaceBackground1.height);
//context.drawImage(spaceBackground2Image,spaceBackground2.x,spaceBackground2.y,spaceBackground2.width,spaceBackground2.height);
//context.drawImage(spaceBackground3Image,spaceBackground3.x,spaceBackground3.y,spaceBackground3.width,spaceBackground3.height);

/*
context.fillStyle = "#000000";        //DRAWING WINDOW 1 IN THE LEFT CANVAS
context.fillRect(70,180,100,100);
context.fillStyle = "#ffffff";
context.fillRect(100,200,4,4);		//STARS
context.fillRect(160,230,4,4);
context.fillRect(127,260,4,4);
context.fillRect(87,245,4,4);
context.fillRect(140,203,4,4);
*/
//context.lineWidth = 6;
//context.strokeStyle = "#aaa";
//context.strokeRect(70,180,100,100);
//context.closePath();

/*
context.fillStyle = "#000000";		//DRAWING WINDOW 2 IN THE LEFT CANVAS
context.fillRect(370,180,100,100);
context.fillStyle = "#ffffff";
context.fillRect(400,225,4,4); 		//STARS
context.fillRect(460,230,4,4);
context.fillRect(427,260,4,4);
context.fillRect(387,245,4,4);
context.fillRect(423,203,4,4);
*/
//context.lineWidth = 6;
//context.strokeStyle = "#aaa";
//context.strokeRect(370,180,100,100);
//context.closePath();

/*
context.fillStyle = "#000000";		//DRAWING WINDOW 3 IN THE LEFT CANVAS
context.fillRect(250,30,120,40);
context.fillStyle = "#ffffff";
context.fillRect(270,50,4,4);		//STARS
context.fillRect(298,43,4,4);
context.fillRect(350,57,4,4);
*/
//context.lineWidth = 6;
//context.strokeStyle = "#aaa";
//context.strokeRect(250,30,120,40);
//context.closePath();



//THROW ZOMBIES OUT OF CHUTE

if (shootZombie === true)
{

piece1.vx = 1.3;   //ZOMBIE PIECES FALLING VELOCITIES
piece1.vy = 5;
piece2.vx = 2;
piece2.vy = 5;
piece3.vx = 3;
piece3.vy = 5;

if(piece1.y < 380)   //IF PIECES HAVEN'T HIT BOTTOM YET
{
piece1.x += piece1.vx;  //MAKE PIECES FALL
piece1.y += piece1.vy;

piece2.x += piece2.vx;
piece2.y += piece2.vy;

piece3.x += piece3.vx;
piece3.y += piece3.vy;
}
}


//ZOMBIE MOVEMENT

if(zombies[2].explode === false)
{
  if (zombies[0].x > (canvas.width - zombies[0].width) && zombies[0].y === 30) //MOVING FROM TOP-RIGHT TO LOWER-LEFT OF SCREEN
  {
  zombies[0].x = 0;
  zombies[0].y = 230;
  zombies[1].x = 0;
  zombies[1].y = 270;
  zombies[2].x = 0;
  zombies[2].y = 310;
  }
  
  if (zombies[0].x > (canvas.width - zombies[0].width) && zombies[0].y === 230) //MOVING FROM BOTTOM-RIGHT TO TOP-LEFT OF SCREEN
  {
  zombies[0].x = 0;
  zombies[0].y = 30;
  zombies[1].x = 0;
  zombies[1].y = 70;
  zombies[2].x = 0;
  zombies[2].y = 110;
  }
  if (zombies[0].x < 0 &&  zombies[0].y === 30) //MOVING FROM TOP-LEFT TO BOTTOM-RIGHT OF SCREEN
  {
  zombies[0].x = 530;
  zombies[0].y = 230;
  zombies[1].x = 530;
  zombies[1].y = 270;
  zombies[2].x = 530;
  zombies[2].y = 310;
  }
  if (zombies[0].x < 0 &&  zombies[0].y === 230) //MOVING FROM BOTTOM-LEFT TO TOP-RIGHT OF SCREEN
  {
  zombies[0].x = 530;
  zombies[0].y = 30;
  zombies[1].x = 530;
  zombies[1].y = 70;
  zombies[2].x = 530;
  zombies[2].y = 310;
  }
 }
 
//WRITING "TRASH" ABOVE TRASH CAN 
//context.fillStyle = "#000000";
//context.font = "bold 10px ferdana";
//context.fillText("TRASH",407,85)

//DRAWING TRASH CAN
context.fillStyle = "#CF311F";
//context.fillRect(trashCan.x,trashCan.y,trashCan.width,trashCan.height);

//context.drawImage(trashCanImage,trashCan.x,trashCan.y,trashCan.width,trashCan.height);

//DRAWING TRASH CAN HOLE
//context.fillStyle = "#000000";
//context.fillRect(trashHole.x,trashHole.y,trashHole.width,trashHole.height);

//DRAWING CHUTE PIECES
//context.fillStyle = "#cccccc";
//context.fillRect(450,100,60,20);

//context.fillStyle = "#cccccc";
//context.fillRect(490,40,20,60);

//context.fillStyle = "#cccccc";
//context.fillRect(490,40,60,20);


//ZOMBIE PIECES

if(piece1.disappear === false)  //IF ZOMBIE PIECES HAVE NOT BEEN PULVERIZED, DRAW THEM
{
//context2.fillStyle = "#4EA12F";
//context2.fillRect(piece1.x,piece1.y,piece1.width,piece1.height);
context2.drawImage(piece1Image,piece1.x,piece1.y,piece1.width,piece1.height);
}

if(piece2.disappear === false)
{
//context2.fillStyle = "#ffffff";
//context2.fillRect(piece2.x,piece2.y,piece2.width,piece2.height);
context2.drawImage(piece2Image,piece2.x,piece2.y,piece2.width,piece2.height);
}

if(piece3.disappear === false)
{
//context2.fillStyle = "#333333";
//context2.fillRect(piece3.x,piece3.y,piece3.width,piece3.height);
context2.drawImage(piece3Image,piece3.x,piece3.y,piece3.width,piece3.height);
}

if(level === 1)
{

if(Math.abs(rect1.x - crusher1.x) < 150 && rect1.y === 30 && zombies[2].explode === false)
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("STEP ON THE SWITCH TO DESTROY ALIEN WITH LASER.",110,15);
}
else if (zombies[2].explode === true && gotZombie === false)
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("COLLECT ALIEN REMAINS FOR DISPOSAL.",130,15);
}
else if(gotZombie === true && piece1.y !== 380)
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("PLACE ALIEN REMAINS IN TRASH REMOVAL SYSTEM.",130,15);
}
else if(piece1.y === 380 && levelWon === false)
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("HOLD THE DOWN KEY WHILE TOUCHING TRASH REMOVAL SYSTEM TO PULVERIZE TRASH.",10,15);
}

else if (levelWon === false)
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("PRESS LEFT AND RIGHT KEYS TO MOVE. AVOID ENEMIES.",90,15);
}
}


if(level === 2 || level === 3 || level === 5 || level === 6 || level === 9 || level === 10) //IF LEVEL INCLUDES RAT
{


//DRAWING RAT
//context.fillStyle = "#664400";
//context.fillRect(rat.x,rat.y,rat.width,rat.height);

context.drawImage(ratImage,rat.sourceX,rat.sourceY,rat.sourceWidth,rat.sourceHeight,rat.x,rat.y,rat.width,rat.height);

//RAT MOVEMENT

if(rat.left === false)
{
rat.sourceX = 20;
rat.x += rat.vx;
}
if(rat.left === true)
{
rat.sourceX = 0;
rat.x += -rat.vx;
}
if(rat.x >= 500 && rat.left === false)  //DEFINING RAT BOUNDARIES
{
rat.left = true;
}
if(rat.x <= 20 && rat.left === true)
{
rat.left = false;
}
if(level === 2 && levelWon === false)   //WRITING NOTES ON BOTTOM OF SCREEN FOR LEVEL TWO
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("MICE CANNOT HARM YOU, BUT CAN ACTVATE LASER.",90,15);
}

//ALLOWING RAT TO TRIGGER LASER

var vx10 = (topSwitcherRandom1 + 20) - rat.centerX();      
var combinedHalfWidths10 = switcher1.halfWidth() + rat.halfWidth();
if(Math.abs(vx10) < combinedHalfWidths10 && rat.y === 120) 
{
crusher1On = true;
}
}

if(level === 3 || level === 5 || level === 9 || level === 10)  //IF LEVEL INCLUDES TWO RATS
{

//DRAWING RAT 2
//context.fillStyle = "#664400";
//context.fillRect(rat2.x,rat2.y,rat2.width,rat2.height);

context.drawImage(rat2Image,rat2.sourceX,rat2.sourceY,rat2.sourceWidth,rat2.sourceHeight,rat2.x,rat2.y,rat2.width,rat2.height);

//RAT 2 MOVEMENT

if(rat2.left === false)
{
rat2.sourceX = 20;
rat2.x += rat2.vx;
}
if(rat2.left === true)
{
rat2.sourceX = 0;
rat2.x += -rat2.vx;
}
if(rat2.x >= 500 && rat2.left === false)  //RAT 2 BOUNDARIES
{
rat2.left = true;
}
if(rat2.x <= 20 && rat2.left === true)
{
rat2.left = false;
}

//ALLOWING RAT 2 TO TRIGGER LASER

var vx11 = (topSwitcherRandom1 + 20) - rat2.centerX();
var combinedHalfWidths11 = switcher1.halfWidth() + rat2.halfWidth();
if(Math.abs(vx11) < combinedHalfWidths11 && rat2.y === 120) 
{
crusher1On = true;
}


if(level === 3 && levelWon === false)
{
context.fillStyle = "#fff";	// TEXT FOR LEVEL 3
context.font = "bold 12px ferdana";
context.fillText("TWO MICE THIS TIME AROUND.",190,15);
}
}


if(level === 4 || level === 5)   //IF LEVEL INCLUDES DRIPS
{
//DRAWING DRIPS
//context.fillStyle = "#61C83B";
//context.fillRect(drip1.x,drip1.y,drip1.width,drip1.height);
context.drawImage(drip1Image,drip1.x,drip1.y,drip1.width,drip1.height);

//context.fillStyle = "#61C83B";
//context.fillRect(drip2.x,drip2.y,drip2.width,drip2.height);
context.drawImage(drip2Image,drip2.x,drip2.y,drip2.width,drip2.height);

drip1.y += drip1.vy;  //DRIP VELOCITIES
drip2.y += drip2.vy;

if(drip1.y > 360)   //DRIP RESPAWNING
{
drip1.y = 170;
}
if(drip2.y > 150)
{
drip2.y = 0;
}

  //HUMAN AND DRIP 1 COLLISION
  
  var vx12 = rect1.centerX() - drip1.centerX();
  var vy12 = rect1.centerY() - drip1.centerY();
  var combinedHalfWidths12 = rect1.halfWidth() + drip1.halfWidth();
  var combinedHalfHeights12 = rect1.halfHeight() + drip1.halfHeight();
    
  if(Math.abs(vx12) < combinedHalfWidths12) 
  {
  if(Math.abs(vy12) < combinedHalfHeights12)
   { 
      rect1.explode = true; 
	  rect2.explode = true;
	  rect3.explode = true;
   }
  }
  
  //HUMAN AND DRIP 2 COLLISION
   
  var vx13 = rect1.centerX() - drip2.centerX();
  var vy13 = rect1.centerY() - drip2.centerY();
  var combinedHalfWidths13 = rect1.halfWidth() + drip2.halfWidth();
  var combinedHalfHeights13 = rect1.halfHeight() + drip2.halfHeight();
    
  if(Math.abs(vx13) < combinedHalfWidths13) 
  {
  if(Math.abs(vy13) < combinedHalfHeights13)
   { 
      rect1.explode = true; 
	  rect2.explode = true;
	  rect3.explode = true;
   }
  }
}

if(level === 4)
{
if(level === 4 && levelWon === false) //TEXT FOR LEVEL 4
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("BEWARE OF DRIPPING ACID.",190,15);
}
}
  
if(level === 5)  
 {

if(level === 5 && levelWon === false) //TEXT FOR LEVEL 5
 {
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("TWO MICE AND DRIPPING ACID.",190,15);
}
}

if(level === 6)
{

if(level === 6 && levelWon === false) // TEXT FOR LEVEL 6
 {
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("ELECTRICAL MALFUNCTIONS REPORTED IN MAIN BUILDING.",80,15);
}
}

if(level === 7 || level === 10)   //IF LEVEL INCLUDES  5 DRIPS
{

//DRAWING DRIPS

//context.fillStyle = "#61C83B";
//context.fillRect(drip71.x,drip71.y,drip71.width,drip71.height);
context.drawImage(drip71Image,drip71.x,drip71.y,drip71.width,drip71.height);
//context.fillStyle = "#61C83B";
//context.fillRect(drip72.x,drip72.y,drip72.width,drip72.height);
context.drawImage(drip72Image,drip72.x,drip72.y,drip72.width,drip72.height);
//context.fillStyle = "#61C83B";
//context.fillRect(drip73.x,drip73.y,drip73.width,drip73.height);
context.drawImage(drip73Image,drip73.x,drip73.y,drip73.width,drip73.height);
//context.fillStyle = "#61C83B";
//context.fillRect(drip74.x,drip74.y,drip74.width,drip74.height);
context.drawImage(drip74Image,drip74.x,drip74.y,drip74.width,drip74.height);
//context.fillStyle = "#61C83B";
//context.fillRect(drip75.x,drip75.y,drip75.width,drip75.height);
context.drawImage(drip75Image,drip75.x,drip75.y,drip75.width,drip75.height);

//DRIP VELOCITIES

drip71.y += drip71.vy;
drip72.y += drip72.vy;
drip73.y += drip73.vy;
drip74.y += drip74.vy;
drip75.y += drip75.vy;

//RESPAWNING DRIPS

if(drip71.y > 360)
{
drip71.y = 170;
}
if(drip72.y > 150)
{
drip72.y = 0;
}
if(drip73.y > 360)
{
drip73.y = 170;
}
if(drip74.y > 150)
{
drip74.y = 0;
}
if(drip75.y > 150)
{
drip75.y = 0;
}

  //HUMAN AND DRIP 71 COLLISION
  
  var vx12 = rect1.centerX() - drip71.centerX();
  var vy12 = rect1.centerY() - drip71.centerY();
  var combinedHalfWidths12 = rect1.halfWidth() + drip71.halfWidth();
  var combinedHalfHeights12 = rect1.halfHeight() + drip71.halfHeight();
    
  if(Math.abs(vx12) < combinedHalfWidths12) 
  {
  if(Math.abs(vy12) < combinedHalfHeights12)
   { 
      rect1.explode = true; 
	  rect2.explode = true;
	  rect3.explode = true;
   }
  }
  
   //HUMAN AND DRIP 72 COLLISION
   
  var vx13 = rect1.centerX() - drip72.centerX();
  var vy13 = rect1.centerY() - drip72.centerY();
  var combinedHalfWidths13 = rect1.halfWidth() + drip72.halfWidth();
  var combinedHalfHeights13 = rect1.halfHeight() + drip72.halfHeight();
    
  if(Math.abs(vx13) < combinedHalfWidths13) 
  {
  if(Math.abs(vy13) < combinedHalfHeights13)
   { 
      rect1.explode = true; 
	  rect2.explode = true;
	  rect3.explode = true;
   }
  }
  
   //HUMAN AND DRIP 73 COLLISION
  
  var vx12 = rect1.centerX() - drip73.centerX();
  var vy12 = rect1.centerY() - drip73.centerY();
  var combinedHalfWidths12 = rect1.halfWidth() + drip73.halfWidth();
  var combinedHalfHeights12 = rect1.halfHeight() + drip73.halfHeight();
    
  if(Math.abs(vx12) < combinedHalfWidths12) 
  {
  if(Math.abs(vy12) < combinedHalfHeights12)
   { 
      rect1.explode = true; 
	  rect2.explode = true;
	  rect3.explode = true;
   }
  }
  
   //HUMAN AND DRIP 74 COLLISION
  
  var vx13 = rect1.centerX() - drip74.centerX();
  var vy13 = rect1.centerY() - drip74.centerY();
  var combinedHalfWidths13 = rect1.halfWidth() + drip74.halfWidth();
  var combinedHalfHeights13 = rect1.halfHeight() + drip74.halfHeight();
    
  if(Math.abs(vx13) < combinedHalfWidths13) 
  {
  if(Math.abs(vy13) < combinedHalfHeights13)
   { 
      rect1.explode = true; 
	  rect2.explode = true;
	  rect3.explode = true;
   }
  }
  
   //HUMAN AND DRIP 75 COLLISION
  
  var vx13 = rect1.centerX() - drip75.centerX();
  var vy13 = rect1.centerY() - drip75.centerY();
  var combinedHalfWidths13 = rect1.halfWidth() + drip75.halfWidth();
  var combinedHalfHeights13 = rect1.halfHeight() + drip75.halfHeight();
    
  if(Math.abs(vx13) < combinedHalfWidths13) 
  {
  if(Math.abs(vy13) < combinedHalfHeights13)
   { 
      rect1.explode = true; 
	  rect2.explode = true;
	  rect3.explode = true;
   }
  }


if(level === 7 && levelWon === false) // TEXT FOR LEVEL 6
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("ACID LEAKS MORE SEVERE.",210,15);
}
}

if(level === 8 || level === 10) //IF LEVEL INCLUDES DROID
{
if(droidAlive === false) 
{
//context.fillStyle = "#A69E1B";   //DEACTIVATED DROID HEAD
//context.drawImage(rect7bImage,rect7b.sourceX,rect7b.sourceY,rect7b.sourceWidth,rect7b.sourceHeight,rect7b.x,rect7b.y,rect7b.width,rect7b.height);
context.drawImage(rect7Image,rect7.sourceX,rect7.sourceY,rect7.sourceWidth,rect7.sourceHeight,rect7.x,rect7.y,rect7.width,rect7.height);
}
else
{
//context.fillStyle = "#F2E727";   //ACTIVATED DROID HEAD 
context.drawImage(rect7Image,rect7.sourceX,rect7.sourceY,rect7.sourceWidth,rect7.sourceHeight,rect7.x,rect7.y,rect7.width,rect7.height);
}
//context.fillRect(rect7.x,rect7.y,rect7.width,rect7.height);  //DRAWING DROID 


if(droidAlive === false)
{
//context.drawImage(rect8bImage,rect8b.sourceX,rect8b.sourceY,rect8b.sourceWidth,rect8b.sourceHeight,rect8b.x,rect8b.y,rect8b.width,rect8b.height);
context.drawImage(rect8Image,rect8.sourceX,rect8.sourceY,rect8.sourceWidth,rect8.sourceHeight,rect8.x,rect8.y,rect8.width,rect8.height);
//context.fillStyle = "#9C8983";   //DEACTIVATED DROID BODY
}
else
{
//context.fillStyle = "#DBBEB8";   //ACTIVATED DROID BODY
context.drawImage(rect8Image,rect8.sourceX,rect8.sourceY,rect8.sourceWidth,rect8.sourceHeight,rect8.x,rect8.y,rect8.width,rect8.height);
}
//context.fillRect(rect8.x,rect8.y,rect8.width,rect8.height);


if(droidAlive === false)
{
//context.fillStyle = "#7F8F8A";   //DEACTIVATED DROID LEGS
context.drawImage(rect9Image,rect9.sourceX,rect9.sourceY,rect9.sourceWidth,rect9.sourceHeight,rect9.x,rect9.y,rect9.width,rect9.height);
//context.drawImage(rect9bImage,rect9b.sourceX,rect9b.sourceY,rect9b.sourceWidth,rect9b.sourceHeight,rect9b.x,rect9b.y,rect9b.width,rect9b.height);
}
else
{
//context.fillStyle = "#C3DBD4";   //ACTIVATED DROID LEGS
context.drawImage(rect9Image,rect9.sourceX,rect9.sourceY,rect9.sourceWidth,rect9.sourceHeight,rect9.x,rect9.y,rect9.width,rect9.height);
}
//context.fillRect(rect9.x,rect9.y,rect9.width,rect9.height);


if(droidAlive === true) //IF DROID IS ALIVE, IT MOVES
{
rect7.x += rect7.vx;   
rect8.x += rect8.vx;
rect9.x += rect9.vx;


  //HUMAN AND DROID COLLISION

  var vx12 = rect1.centerX() - rect7.centerX();
  var vy12 = rect1.centerY() - rect7.centerY();
  var combinedHalfWidths12 = rect1.halfWidth() + rect7.halfWidth();
  var combinedHalfHeights12 = rect1.halfHeight() + rect7.halfHeight();
    
  if(Math.abs(vx12) < combinedHalfWidths12) 
  {
  if(Math.abs(vy12) < combinedHalfHeights12)
   { 
      rect1.explode = true; //IF HIT, HUMAN EXPLODES
	  rect2.explode = true;
	  rect3.explode = true;
   }
  }

}
else    //IF DROID IS NOT ACTIVATED, IT RETURNS
{
rect7.x += -rect7.vx;
rect8.x += -rect8.vx;
rect9.x += -rect9.vx;
}

if(rect7.x < 40)  //DROID BOUNDARIES
{
rect7.x = 40;
rect8.x = 40;
rect9.x = 40;
}

}

if(level === 8)
{
if(level === 8 && levelWon === false) //LEVEL 8 TEXT
 {
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("DROIDS COME TO LIFE WHEN LASERS ARE ACTIVATED.",80,15);
}
}

if(level === 9)
{

if(level === 9 && levelWon === false) //LEVEL 9 TEXT
 {

context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("ELECTRICAL MALFUNCTIONS HAVE RETURNED.",150,15);
}
}

if(level === 10)
{

if(level === 10 && levelWon === false) //LEVEL 10 TEXT
 {
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("COMPLETE CHAOS ABOARD SHIP.",190,15);
}
}



//DRAWING CHUTE PIECE ON CANVAS 2

context2.fillStyle = "#f0f3f3";
context2.fillRect(10,40,40,20);

//DRAWING LASER ON CANVAS 2

context2.fillStyle = "rgba(255,0,0,.7)";
context2.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);

//DRAWING GUN ON CANVAS 2

//context2.fillStyle = "#7F8F8A";
//context2.fillRect(gun.x,gun.y,gun.width,gun.height);

context2.drawImage(gunImage,gun.x,gun.y,gun.width,gun.height);

//MOVING THE GUN BACK AND FORTH

gun.x += gun.vx;
bullet.x = gun.x + 10;

//LASER VELOCITY

bullet.height += bullet.vy;

//LASER BOUNDARIES

if(bullet.height < 0)
{
bullet.height = 0;
}

if(bullet.height > canvas.height)
{
bullet.height = canvas.height;
}


if(bullet.y > 20)  //AVOIDING SHOOTING TWICE
{
bullet.canShoot = false;
}
if(bullet.y > canvas.height)
{
bullet.canShoot = true;
bullet.y = 0;
bullet.vy = 0;
}

//GUN BOUNCES OFF BOTH SIDES

if(gun.x > canvas2.width - gun.width)
{
gun.vx *= -1;
}
if(gun.x < 0)
{
gun.vx *= -1;
}

//context.fillStyle = "#CF1D14";  //TRASH LIGHT BECOMES RED
context.drawImage(trashLight1Image,trashLight1.x,trashLight1.y,trashLight1.width,trashLight1.height);

//IF PLAYER IS HOLDING ZOMBIE PIECES + IS IN CONTACT WITH TRASH DSPOSAL UNIT

if(gotZombie === true && rect1.y === 30 && rect1.x > 400 && rect1.x < 450) 
{
context.drawImage(trashLight2Image,trashLight2.x,trashLight2.y,trashLight2.width,trashLight2.height);
//context.fillStyle = "#4EA12F"; //TRASH LIGHT BECOMES GREEN
shootZombie = true; //ZOMBIE CAN BE SHOT THROUGH CHUTE
bullet.canShoot = true; //LASER CAN BE ACTIVATED
}
//context.fillRect(trashLight2.x,trashLight.y,trashLight.width,trashLight.height); //DRAWING TRASH LIGHT
//context.drawImage(trashLight1Image,trashLight1.x,trashLight1.y,trashLight1.width,trashLight1.height);


//DRAWING HUMAN PIECES

//context.fillStyle = "#E8E6D1";
//context.fillRect(rect1.x,rect1.y,rect1.width,rect1.height);
//context.fill();
//context.fillStyle = "#FFD745";
//context.fillRect(rect2.x,rect2.y,rect2.width,rect2.height);
//context.fillStyle = "#5038CF";
//context.fillRect(rect3.x,rect3.y,rect3.width,rect3.height);

context.drawImage(rect1Image,rect1.sourceX,rect1.sourceY,rect1.sourceWidth,rect2.sourceHeight,rect1.x,rect1.y,rect1.width,rect1.height);
context.drawImage(rect2Image,rect2.sourceX,rect2.sourceY,rect2.sourceWidth,rect2.sourceHeight,rect2.x,rect2.y,rect2.width,rect2.height);
context.drawImage(rect3Image,rect2.sourceX,rect2.sourceY,rect2.sourceWidth,rect2.sourceHeight,rect3.x,rect3.y,rect3.width,rect3.height);

//DRAWING ZOMBIE PIECES

if(zombies[0].visible === true)
{

context.drawImage(rect4Image,zombies[0].sourceX,zombies[0].sourceY,zombies[0].sourceWidth,zombies[0].sourceHeight,zombies[0].x,zombies[0].y,zombies[0].width,zombies[0].height);
context.drawImage(rect5Image,zombies[1].sourceX,zombies[1].sourceY,zombies[1].sourceWidth,zombies[1].sourceHeight,zombies[1].x,zombies[1].y,zombies[1].width,zombies[1].height);
context.drawImage(rect6Image,zombies[2].sourceX,zombies[2].sourceY,zombies[2].sourceWidth,zombies[2].sourceHeight,zombies[2].x,zombies[2].y,zombies[2].width,zombies[2].height);
/*

context.beginPath();
context.fillStyle = "#61C83B";
context.fillRect(zombies[0].x,zombies[0].y,zombies[0].width,zombies[0].height);

context.beginPath();
context.fillStyle = "#ffffff";
context.fillRect(zombies[1].x,zombies[1].y,zombies[1].width,zombies[1].height);

context.beginPath();
context.fillStyle = "#333333";
context.fillRect(zombies[2].x,zombies[2].y,zombies[2].width,zombies[2].height);
*/
}

//DRAWING FLOORS

//context.fillStyle = "#7F8F8A";
//context.fillRect(0,350,canvas.width,20);
//context.fillRect(0,150,canvas.width,20);
//context.fill();
context.drawImage(tread1Image,tread1.sourceX,tread1.sourceY,tread1.sourceWidth,tread1.sourceHeight,tread1.x,tread1.y,tread1.width,tread1.height);
context.drawImage(tread2Image,tread2.sourceX,tread2.sourceY,tread2.sourceWidth,tread2.sourceHeight,tread2.x,tread2.y,tread2.width,tread2.height);

//DRAWING CRUSHER

context.fillStyle = "rgba(255,0,0,.7)";
context.fillRect(crusher1.x,crusher1.y,crusher1.width,crusher1.height);
//context.drawImage(crusher1Image,crusher1.x,crusher1.y,crusher1.width,crusher1.height);
context.fill();

	//QUESTION MARK APPEARS OVER ZOMBIE'S HEAD
	
	if (zombies[0].y === 230 && crusher1.height === 180 && zombies[0].x > 167 && zombies[0].x < 350)
	{
	context.beginPath();
	context.lineWidth = 3;
	context.lineJoin = "round";
	context.strokeStyle = "#000";
	context.moveTo(zombies[0].x,zombies[0].y - 50);
	context.quadraticCurveTo(zombies[0].x + 30,zombies[0].y - 50,zombies[0].x + 5,zombies[0].y - 30);
	context.lineTo(zombies[0].x + 5, zombies[0].y - 25);
	context.stroke();
	context.moveTo(zombies[0].x + 2,zombies[0].y - 35);
	context.fillStyle = "#000";
	context.fillRect(zombies[0].x + 2, zombies[0].y - 18, 5,5);
	}


//DRAWING LAMP 1

context.fillStyle = "rgba(242,255,112,.7)";
context.beginPath()
context.moveTo(130,20);
context.lineTo(100,150);
context.lineTo(200,150);
context.lineTo(170,20);
context.fill();

//DRAWING LAMP 2
context.fillStyle = "rgba(242,255,112,.7)";
context.beginPath()
context.moveTo(330,170);
context.lineTo(300,350);
context.lineTo(400,350);
context.lineTo(370,170);
context.fill();


//DRAWING ARROWS
context.fillStyle = "#ffffff";

context.beginPath()
context.moveTo(500,200);
context.lineTo(520,220);
context.lineTo(500,240);
context.lineTo(500,200);
context.fill();
context.closePath();

context.beginPath()
context.moveTo(520,200);
context.lineTo(540,220);
context.lineTo(520,240);
context.lineTo(520,200);
context.fill();
context.closePath();

context.beginPath()
context.moveTo(0,220);
context.lineTo(20,200);
context.lineTo(20,240);
context.lineTo(0,220);
context.fill();
context.closePath();

context.beginPath()
context.moveTo(20,220);
context.lineTo(40,200);
context.lineTo(40,240);
context.lineTo(20,220);
context.fill();
context.closePath();


if(out % 2 === 0)  //IF THE CURRENT VALUE FOR OUT IS ODD...
{

context.fillStyle = "#000000";
context.fillRect(0,0,canvas.width,350); //LIGHTS GO OUT

context.fillStyle = "#ffffff";
context.fillRect(270,50,4,4);		//STARS
context.fillRect(298,43,4,4);
context.fillRect(350,57,4,4);

context.fillStyle = "#ffffff";
context.fillRect(400,225,4,4); 		//STARS
context.fillRect(460,230,4,4);
context.fillRect(427,260,4,4);
context.fillRect(387,245,4,4);
context.fillRect(423,203,4,4);

context.fillRect(100,200,4,4);		//STARS
context.fillRect(160,230,4,4);
context.fillRect(127,260,4,4);
context.fillRect(87,245,4,4);
context.fillRect(140,203,4,4);
context.closePath();

context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("ELECTRICAL MALFUNCTIONS REPORTED IN MAIN BUILDING.",80,15);

}



//HUMAN EXPLODE

if(rect1.explode === true)
{
gameOver = true; //GAME OVER
rect1.x += 6;   //SHOOT HUMAN PIECES IN DIFFERENT DIRECTIONS
rect1.y += -2;
rect2.x += -8;
rect2.y += -6;
rect3.x += 5;
rect3.y += 3;

/*
for(var i = 0; i < zombies.length; i++)
{
//zombies[i].vx = 0; //ZOMBIES STOP MOVING
}
*/
gun.vx = 0;  //GUN STOPS MOVING

//DRAWING GAME OVER WINDOW

context.strokeStyle = "#333";
context.lineWidth = 8;
context.strokeRect(120,100,300,200);

//WRITING GAME OVER TEXT

context.fillStyle = "rgba(255,255,255,.9)";
context.fillRect(120,100,300,200);
context.fillStyle = "rgba(0,0,0,.9)";
context.font = "bold 38px ferdana";
context.fillText("GAME OVER",148,185);
context.font = "bold 20px ferdana";
context.fillText("PRESS SPACE TO RESTART",137,255);
context.lineWidth = 1;
}


//IF ALL PIECES HAVE BEEN PULVERIZED

if(piece1.disappear === true && piece2.disappear === true && piece3.disappear === true && bullet.height === 0 && gameOver === false)
{
levelWon = true;  //LEVEL HAS BEEN WON
droidAlive = false;  //TURNING OFF DROID IMMEDIATELY
}

//LEVEL COMPLETE

if(levelWon === true)  
{
context.fillStyle = "#fff";
context.font = "bold 12px ferdana";
context.fillText("WELL DONE.    PRESS THE SPACE KEY TO ADVANCE TO THE NEXT LEVEL",60,15);

//DRAWING NEXT LEVEL WINDOW

context.beginPath();
context.strokeStyle = "#333";
context.lineWidth = 8;
context.strokeRect(120,100,300,200);
context.stroke();
context.closePath();

//WRITING NEXT LEVEL TEXT

if(level < 10)
{
context.fillStyle = "rgba(255,255,255,.9)";
context.fillRect(120,100,300,200);
context.fillStyle = "rgba(0,0,0,.8)";
context.font = "bold 22px verdana";
context.fillText("LEVEL COMPLETE!",155,185);
context.font = "bold 14px verdana";
context.fillText("PRESS SPACE TO CONTINUE",154,225);
}
if(level >= 10)  //IF GAME IS WON
{
context.fillStyle = "rgba(255,255,255,.9)";  //GAME ENDING WINDOW
context.fillRect(120,100,300,200);
context.fillStyle = "rgba(0,0,0,.8)";
context.font = "bold 24px verdana";
context.fillText("CONGRATULATIONS!",129,205);


window.removeEventListener("keydown",onKeyDown,false);  //REMOVING EVENT LISTENERS
window.removeEventListener("keyup",onKeyUp,false);
}
}


//WHEN ZOMBIES ARE DESTROYED BY LASER

if(zombies[2].explode === true)
{
if(zombies[0].y < 310)   //IF ZOMBIE PARTS HAVE NOT YET TOUCHED THE GROUND, MAKE THEM MOVE
{
zombies[0].x += -10;
zombies[0].y += -.2;
zombies[0].sourceX = 150;
}
if(zombies[1].y < 310)
{
zombies[1].x += -3;
zombies[1].y += -4.8;
zombies[1].sourceX = 150;
}
if(zombies[2].y < 310)
{
zombies[2].x += 5;
zombies[2].y += -2;

}

zombies[0].y += zombies[0].gravity;  // ADD GRAVITY TO ZOMBIE PARTS
zombies[1].y += zombies[0].gravity;
zombies[2].y += zombies[0].gravity;

if(zombies[0].y >= 310)   // IF ZOMBIE PARTS HIT GROUND, THEY STOP MOVING
{
zombies[0].y = 310;
zombies[0].vx = 0;
zombies[0].vy = 0;
zombies[0].sourceX = 150;
}
if(zombies[1].y >= 310)
{
zombies[1].y = 310;
zombies[1].vx = 0;
zombies[1].vy = 0;
zombies[1].sourceX = 150;
}
if(zombies[2].y >= 310)
{
zombies[2].y = 310;
zombies[2].vx = 0;
zombies[2].vy = 0;
zombies[2].sourceX = 150;
}
}


   //HUMAN MOVEMENT


   if(rect1.explode === false)  //IF HUMAN HAS NOT BEEN KILLED....
   {
   
  //MOVING TO THE UPPER-RIGHT FROM BOTTOM-LEFT
  
  if (rect1.x < 0 && rect1.y === 230)
  {
  rect1.x = 550;
  rect1.y = 30;
  rect2.x = 550;
  rect2.y = 70;
  rect3.x = 550;
  rect3.y = 110;
  }
  
  //MOVING TO THE BOTTOM-RIGHT FROM TOP-LEFT
  
  if (rect1.x < 0 && rect1.y === 30)
  {
  rect1.x = 530;
  rect1.y = 230;
  rect2.x = 530;
  rect2.y = 270;
  rect3.x = 530;
  rect3.y = 310;
  }
  
  //MOVING TO THE BOTTOM-LEFT FROM TOP-RIGHT

    if (rect1.x > 550 && rect1.y === 30)
  {
  rect1.x = 0;
  rect1.y = 230;
  rect2.x = 0;
  rect2.y = 270;
  rect3.x = 0;
  rect3.y = 310;
  }
  
  //MOVING TO THE TOP-LEFT FROM THE BOTTOM-RIGHT
  
    if (rect1.x > 550 && rect1.y === 230)
  {
  rect1.x = 0;
  rect1.y = 30;
  rect2.x = 0;
  rect2.y = 70;
  rect3.x = 0;
  rect3.y = 110;
  }
  }

  //HUMAN AND SWITCHER COLLISION 	
	
  var vx2 = (topSwitcherRandom1 + 20) - rect3.centerX();
  var combinedHalfWidths2 = switcher1.halfWidth() + rect3.halfWidth();
  if(Math.abs(vx2) < combinedHalfWidths2 && rect3.y === 110) 
  {
  crusher1On = true;
  }
	
	
  //ZOMBIE AND SWITCHER COLLISION 	
  
  var vx7 = ((topSwitcherRandom1 - 10) + 20) - zombies[2].centerX();
  var combinedHalfWidths7 = switcher1.halfWidth() + zombies[2].halfWidth();
  if(Math.abs(vx7) < combinedHalfWidths7 && zombies[2].y === 110) 
  {
  crusher1On = true;
  }
  
  //HUMAN AND ZOMBIE COLLISION
	
  var vx3 = rect3.centerX() - zombies[2].centerX();
  var vy3 = rect3.centerY() - zombies[2].centerY();

  var combinedHalfWidths3 = rect3.halfWidth() + zombies[2].halfWidth();
  var combinedHalfHeights3 = rect3.halfHeight() + zombies[2].halfHeight();
    
  if(Math.abs(vx3) < combinedHalfWidths3) 
  {
  
  if(Math.abs(vy3) < combinedHalfHeights3)
   {
	  if(zombies[2].explode === false)  // IF THE ZOMBIE IS STILL ALIVE
	  {
      rect1.explode = true;    // HUMAN EXPLODES
	  rect2.explode = true;
	  rect3.explode = true;
	  }
	  if(zombies[2].explode === true) //IF THE ZOMBIE IS DEAD
	  {
	  zombies[0].visible = false; //PICK PIECES UP
	  zombies[1].visible = false;
	  zombies[2].visible = false;
	 
	  gotZombie = true;
	  }
   }
  }

	

	

  //ZOMBIE AND LASER COLLISION
	
  if(zombies[0].y === 230 && gameOver === false)
  {   	
  var vx4 = zombies[0].centerX() - crusher1.centerX();
  var vy4 = zombies[0].centerY() - crusher1.centerY();
  var combinedHalfWidths4 = zombies[0].halfWidth() + crusher1.halfWidth();
  var combinedHalfHeights4 =zombies[0].halfHeight() + crusher1.halfHeight();
    
  if(Math.abs(vx4) < combinedHalfWidths4) 
  {
  if(Math.abs(vy4) < combinedHalfHeights4)
   {
	if(crusher1.height > 20)
	{
	if(zombies[0].x > 150 && zombies[0].x < 250)  //VERIFY THAT ZOMBIE IS IN RANGE OF CRUSHER
	{
	zombies[0].x = zombies[1].x - 5;
	zombies[0].vx = -.4;
	zombies[1].vx = -.4;
	zombies[2].vx = -.4;
	zombies[2].explode = true;
	}	   
	  }
     }
    }
   }
  
 //HUMAN AND LASER COLLISION
    
  var vx9 = rect1.centerX() - crusher1.centerX();
  var vy9 = rect1.centerY() - crusher1.centerY();
  var combinedHalfWidths9 = rect1.halfWidth() + crusher1.halfWidth();
  var combinedHalfHeights9 =rect1.halfHeight() + crusher1.halfHeight();
   
  if(Math.abs(vx9) < combinedHalfWidths9) 
  {
  if(Math.abs(vy9) < combinedHalfHeights9)
   {
	if(crusher1.height > 20)
	{
	  rect1.explode = true;   //HUMAN EXPLODES
	  rect2.explode = true;
	  rect3.explode = true;
     }
    }
   }
  
   //LASER AND ZOMBIE PIECES COLLISION
   
   for (var i = 0; i < pieces.length; i++)
   {
 
  var vx5 = bullet.centerX() - pieces[i].centerX();
  var vy5 = bullet.centerY() - pieces[i].centerY();

  var combinedHalfWidths5 = bullet.halfWidth() + pieces[i].halfWidth();
  var combinedHalfHeights5 = bullet.halfHeight() + pieces[i].halfHeight();
    

  if(Math.abs(vx5) < combinedHalfWidths5) 
  {
  
  if(Math.abs(vy5) < combinedHalfHeights5)
   {
	pieces[i].disappear = true;  //ZOMBIE PIECE DISAPPEARS
    } 
   }
  }
   

   } //CLOSING TAG OF IF LEVEL > 0
   
  }

