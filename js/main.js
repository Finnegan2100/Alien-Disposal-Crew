
(function() {

	var canvas = document.getElementById("theCanvas"),
		context = canvas.getContext("2d"),
	
		canvas2 = document.getElementById("theCanvas2"),
		context2 = canvas2.getContext("2d"),

		theme = document.querySelector("#theme");  
		theme.load();

	var zombies = [],
		pieces = [],
		topSwitcherRandom1 = 235,
		crusher1On = false,
		zombieRight = true,
		gotZombie = false,
		shootZombie = false,
		droidAlive = false,
		out = 1,
		level = 0,
		levelWon = false,
		gameOver = false;
		
	var backgroundTitle = Object.create(spriteObject);
	backgroundTitle.x = 0;
	backgroundTitle.y = 5;
	backgroundTitle.width = 550;
	backgroundTitle.height = 400;

	var backgroundTitleImage = new Image();
	backgroundTitleImage.src = "images/steel.jpg";

	var backgroundGame = Object.create(spriteObject);
	backgroundGame.x = 0;
	backgroundGame.y = 0;
	backgroundGame.width = 550;
	backgroundGame.height = 400;

	var backgroundGameImage = new Image();
	backgroundGameImage.src = "images/backgroundnew.png";

	var backgroundGameRight = Object.create(spriteObject);
	backgroundGameRight.x = 0;
	backgroundGameRight.y = 0;
	backgroundGameRight.width = 300;
	backgroundGameRight.height = 400;

	var backgroundGameRightImage = new Image();
	backgroundGameRightImage.src = "images/disposalwithshoot.png";



	var glassOverlay = Object.create(spriteObject);
	glassOverlay.x = 0;
	glassOverlay.y = 0;
	glassOverlay.width = 300;
	glassOverlay.height = 400;

	var glassOverlayImage = new Image();
	glassOverlayImage.src = "images/glassoverlay.png";

	var backgroundTop = Object.create(spriteObject);
	backgroundTop.x = 0;
	backgroundTop.y = 5;
	backgroundTop.width = 550;
	backgroundTop.height = 150;

	var backgroundTopImage = new Image();
	backgroundTopImage.src = "images/alienWall.jpg";

	var backgroundBottom = Object.create(spriteObject);
	backgroundBottom.x = 0;
	backgroundBottom.y = 165;
	backgroundBottom.width = 550;
	backgroundBottom.height = 190;

	var backgroundBottomImage = new Image();
	backgroundBottomImage.src = "images/alienWall.jpg";

	var backgroundSide = Object.create(spriteObject);
	backgroundSide.x = 0;
	backgroundSide.y = 165;
	backgroundSide.width = 550;
	backgroundSide.height = 190;

	var backgroundSideImage = new Image();
	backgroundSideImage.src = "images/alienWall2.jpg";

	var backgroundSide2 = Object.create(spriteObject);
	backgroundSide2.x = 0;
	backgroundSide2.y = 0;
	backgroundSide2.width = 550;
	backgroundSide2.height = 400;

	var backgroundSide2Image = new Image();
	backgroundSide2Image.src = "images/rustyWall.jpg";

	var spaceBackground1 = Object.create(spriteObject);
	spaceBackground1.x = 370;
	spaceBackground1.y = 180;
	spaceBackground1.width = 100;
	spaceBackground1.height = 100;

	var spaceBackground1Image = new Image();
	spaceBackground1Image.src = "images/space.jpg";

	var spaceBackground2 = Object.create(spriteObject);
	spaceBackground2.x = 70;
	spaceBackground2.y = 180;
	spaceBackground2.width = 100;
	spaceBackground2.height = 100;

	var spaceBackground2Image = new Image();
	spaceBackground2Image.src = "images/space.jpg";

	var spaceBackground3 = Object.create(spriteObject);
	spaceBackground3.x = 250;
	spaceBackground3.y = 30;
	spaceBackground3.width = 120;
	spaceBackground3.height = 40;

	var spaceBackground3Image = new Image();
	spaceBackground3Image.src = "images/space.jpg";

	var tread1 = Object.create(spriteObject);
	tread1.x = 0;
	tread1.y = 149;
	tread1.width = 550;
	tread1.height = 20;
	tread1.sourceX = 0;
	tread1.sourceWidth = 550;
	tread1.sourceHeight = 20;

	var tread1Image = new Image();
	tread1Image.src = "images/tredsheet.png";

	var tread2 = Object.create(spriteObject);
	tread2.x = 0;
	tread2.y = 350;
	tread2.width = 550;
	tread2.height = 20;
	tread2.sourceX = 0;
	tread2.sourceWidth = 550;
	tread2.sourceHeight = 20;

	var tread2Image = new Image();
	tread2Image.src = "images/tredsheet.png";

	var scanLines1 = Object.create(spriteObject);
	scanLines1.x = 0;
	scanLines1.y = 0;
	scanLines1.width = 550;
	scanLines1.height = 400;

	var scanLines1Image = new Image();
	scanLines1Image.src = "images/scanlines10per.png";

	var scanLines2 = Object.create(spriteObject);
	scanLines2.x = 0;
	scanLines2.y = 0;
	scanLines2.width = 550;
	scanLines2.height = 400;

	var scanLines2Image = new Image();
	scanLines2Image.src = "images/scanlines20per.png";

	var scanLines3 = Object.create(spriteObject);
	scanLines3.x = 0;
	scanLines3.y = 0;
	scanLines3.width = 550;
	scanLines3.height = 400;

	var scanLines3Image = new Image();
	scanLines3Image.src = "images/scanlinesstatic.png";

	var scanLines4 = Object.create(spriteObject);
	scanLines4.x = 0;
	scanLines4.y = 0;
	scanLines4.width = 550;
	scanLines4.height = 400;

	var scanLines4Image = new Image();
	scanLines4Image.src = "images/staticlines.png";

	var scanLines5 = Object.create(spriteObject);
	scanLines5.x = 0;
	scanLines5.y = 0;
	scanLines5.width = 550;
	scanLines5.height = 400;

	var scanLines5Image = new Image();
	scanLines5Image.src = "images/superstaticlines1.png";

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
	acidImage.src = "images/acid.png";

	var rect1 = Object.create(spriteObject);
	rect1.x = 290;
	rect1.y = 230;
	rect1.width = 40;
	rect1.height = 55;
	rect1.sourceX = 120;
	rect1.sourceWidth = 30;
	rect1.sourceHeight = 40;

	var rect1Image = new Image();
	rect1Image.src = "images/playerhead.png";

	var rect2 = Object.create(spriteObject);
	rect2.x = 290;
	rect2.y = 270;
	rect2.width = 40;
	rect2.height = 55;
	rect2.sourceX = 120;
	rect2.sourceWidth = 30;
	rect2.sourceHeight = 40;

	var rect2Image = new Image();
	rect2Image.src = "images/playertorso.png";

	var rect3 = Object.create(spriteObject);
	rect3.x = 290;
	rect3.y = 310;
	rect3.width = 40;
	rect3.height = 55;
	rect3.sourceX = 120;
	rect3.sourceWidth = 30;
	rect3.sourceHeight = 40;

	var rect3Image = new Image();
	rect3Image.src = "images/playerlegs.png";

	for (var i = 0; i < 15; i++) {
	
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
		rect4Image.src = "images/alientop.png";

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
		rect5Image.src = "images/alienmid.png";

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
		rect6Image.src = "images/alienbot.png";
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
	rect7Image.src = "images/droidhead.png";

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
	rect8Image.src = "images/droidbody.png";

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
	rect9Image.src = "images/droidlegs.png";

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
	rect7bImage.src = "images/droidsleephead.png";

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
	rect8bImage.src = "images/droidsleepbody.png";

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
	rect9bImage.src = "images/droidsleeplegs.png";

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
	ratImage.src = "images/mouse.png";

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
	rat2Image.src = "images/mouse.png";

	var drip1 = Object.create(spriteObject);
	drip1.x = 80;
	drip1.y = 170;
	drip1.width = 10;
	drip1.height = 10;
	drip1.vy = 2;

	var drip1Image = new Image();
	drip1Image.src = "images/acid.png";

	var drip2 = Object.create(spriteObject);
	drip2.x = 320;
	drip2.y = 60;
	drip2.width = 10;
	drip2.height = 10;
	drip2.vy = 2;

	var drip2Image = new Image();
	drip2Image.src = "images/acid.png";

	var drip71 = Object.create(spriteObject);
	drip71.x = 80;
	drip71.y = 170;
	drip71.width = 10;
	drip71.height = 10;
	drip71.vy = 2;

	var drip71Image = new Image();
	drip71Image.src = "images/acid.png";

	//DRIP 2 FOR LEVEL 7
	var drip72 = Object.create(spriteObject);
	drip72.x = 320;
	drip72.y = 60;
	drip72.width = 10;
	drip72.height = 10;
	drip72.vy = 2;

	var drip72Image = new Image();
	drip72Image.src = "images/acid.png";

	//DRIP 3 FOR LEVEL 7
	var drip73 = Object.create(spriteObject);
	drip73.x = 427;
	drip73.y = 190;
	drip73.width = 10;
	drip73.height = 10;
	drip73.vy = 2;

	var drip73Image = new Image();
	drip73Image.src = "images/acid.png";

	//DRIP 4 FOR LEVEL 7
	var drip74 = Object.create(spriteObject);
	drip74.x = 190;
	drip74.y = 290;
	drip74.width = 10;
	drip74.height = 10;
	drip74.vy = 2;

	var drip74Image = new Image();
	drip74Image.src = "images/acid.png";

	//DRIP 5 FOR LEVEL 7
	var drip75 = Object.create(spriteObject);
	drip75.x = 410;
	drip75.y = 240;
	drip75.width = 10;
	drip75.height = 10;
	drip75.vy = 2;

	var drip75Image = new Image();
	drip75Image.src = "images/acid.png";

	
	//TRASH DISPOSAL UNIT
	var trashCan = Object.create(spriteObject);
	trashCan.x = 400;
	trashCan.y = 90;
	trashCan.width = 50;
	trashCan.height = 60;

	var trashCanImage = new Image();
	trashCanImage.src = "images/unit.png";


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
	trashLight1Image.src = "images/alarmred.png";

	var trashLight2 = Object.create(spriteObject);
	trashLight2.x = 419;
	trashLight2.y = 45;
	trashLight2.width = 15;
	trashLight2.height = 15;

	var trashLight2Image = new Image();
	trashLight2Image.src = "images/alarmbrightred.png";

	//PUSHING EXPLODED ZOMBIE PIECES INTO AN ARRAY

	for (var j = 0; j < 10; j++) {
		
		var piece1 = Object.create(spriteObject);
		piece1.x = 20;
		piece1.y = 40;
		pieces.push(piece1);

		var piece1Image = new Image();
		piece1Image.src = "images/alientopcompact.png";

		var piece2 = Object.create(spriteObject);
		piece2.x = 20;
		piece2.y = 40;
		pieces.push(piece2);

		var piece2Image = new Image();
		piece2Image.src = "images/alienmidcompact.png";

		var piece3 = Object.create(spriteObject);
		piece3.x = 20;
		piece3.y = 40;
		pieces.push(piece3);

		var piece3Image = new Image();
		piece3Image.src = "images/alienbotcompact.png";
	}

	//SWITCHER FOR ACTIVATING LASER
	var switcher1 = Object.create(spriteObject);
	switcher1.x = 235;
	switcher1.y = 129;
	switcher1.width = 50;

	var switcher1Image = new Image();
	switcher1Image.src = "images/button_red.png";

	var switcher2 = Object.create(spriteObject);
	switcher2.x = 235;
	switcher2.y = 129;
	switcher2.width = 50;

	var switcher2Image = new Image();
	switcher2Image.src = "images/buttongreen.png";

	//CRUSHER WHICH KILLS ZOMBIE
	var crusher1 = Object.create(spriteObject);
	crusher1.x = 250;
	crusher1.y = 170;

	var crusher1Image = new Image();
	crusher1Image.src = "images/laser.png";

	//GUN FOR PULVERIZING ZOMBIE PIECES
	var gun = Object.create(spriteObject);
	gun.x = 20;
	gun.y = 0;
	gun.width = 40;
	gun.vx = 5;

	var gunImage = new Image();
	gunImage.src = "images/cannon.png";

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

	function onKeyDown(event) {
		
		event.preventDefault();
	
		if (event.keyCode == 37) {
	
			rect1.vx = -5;
			rect2.vx = -5;
			rect3.vx = -5;

			rect1.sourceX = 0;
			rect2.sourceX = 0;
			rect3.sourceX = 0;

		if (rect1.sourceX > 120) {
	
			rect1.sourceX = 0;
		}
		if (rect2.sourceX > 120) {
	
			rect2.sourceX = 0;
		}
		if (rect3.sourceX > 120) {
	
			rect3.sourceX = 0;
		}
	}
	
	if (event.keyCode == 39) {
	
		event.preventDefault();
		
		rect1.vx = 13;
		rect2.vx = 13;
		rect3.vx = 13;

		rect1.sourceX = 120;
		rect2.sourceX = 120;
		rect3.sourceX = 120;

		if (rect1.sourceX > 200) {
	
			rect1.sourceX = 120;
		}
		if (rect2.sourceX > 200) {
	
			rect2.sourceX = 120;
		}
		if (rect3.sourceX > 200) {
	
			rect3.sourceX = 120;
		}
	}
	
	if (event.keyCode === 40 && bullet.canShoot && shootZombie) {
	
		event.preventDefault();
		bullet.vy = 16;
	}

	if (event.keyCode === 32) {
	
		event.preventDefault();
		if (level === 0) {
	
			level = 1;
			gameOver = false;
		}
		
		if (gameOver && rect3.y > 370 || rect3.x > canvas.width)  {

			if (level === 10 || level === 7 || level === 8 || level === 9) {

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
	
			if (level >= 1 && levelWon && piece1.disappear) {

				if (level === 10 || level === 7 || level === 8 || level === 9) {

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

	function onKeyUp(event)	{
	
		if (event.keyCode == 37) {
		
			event.preventDefault();
			rect1.vx = 3;
			rect2.vx = 3;
			rect3.vx = 3;
		}
		if (event.keyCode == 39) {
	
		event.preventDefault();
		rect1.vx = 3;
		rect2.vx = 3;
		rect3.vx = 3;
		}
		if (event.keyCode === 40) {
	
			event.preventDefault();
			bullet.vy = -20;
		}
	}

	function staticTimer() {
	
		context.drawImage(scanLines1Image,scanLines1.x,scanLines1.y,scanLines1.width,scanLines1.height);
		window.setTimeout(staticTimer,Math.random() * 1000);
	}
	function staticTimer2() {
	
		context.drawImage(scanLines5Image,scanLines5.x,scanLines5.y,scanLines5.width,scanLines5.height);
		window.setTimeout(staticTimer2,Math.random() * 2000);
	}

	window.setInterval(lightsOut,1200); 

	function lightsOut() {
	
		if (level === 6 || level === 9) {
			
			out++; 
		}
	}

	main();

	function main() {

		context.clearRect(0,0,canvas.width,canvas.height);
		context2.clearRect(0,0,canvas2.width,canvas2.height); 
		window.setTimeout(main,21); 

		if (level === 0)  {

			context.drawImage(backgroundTitleImage,backgroundTitle.x,backgroundTitle.y,backgroundTitle.width,backgroundTitle.height);
			context2.drawImage(backgroundTitleImage,backgroundTitle.x,backgroundTitle.y,backgroundTitle.width,backgroundTitle.height);

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

			for (var i = 0; i < 600; i += 80) {

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

			for (var i = 0; i < 460; i += 80) {
				
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

		if (level > 0) {
		
			context.drawImage(backgroundGameImage,backgroundGame.x,backgroundGame.y,backgroundGame.width,backgroundGame.height);
			context2.drawImage(backgroundGameRightImage,backgroundGameRight.x,backgroundGameRight.y,backgroundGameRight.width,backgroundGameRight.height);

			context.lineWidth = "1";
			context.strokeStyle = "000";
			context.fillStyle = "#000";
			context.font = "bold 20px verdana";
			context.fillText("LVL: " + level,10,390);
			context.fillStyle = "#222";
			context.font = "bold 14px Zado";
			context.fillText("SeCT0R 5c 3-11-2075 recON ///TemTech Surveillance ",100,390); 

			context.fillStyle = "#333"; 
			context.fillRect(0,0,550,20);
			context.closePath();
			context2.fillStyle = "#ccc";
			context2.font = "bold 52px verdana";
			context2.fillText("95-AC4",47,135)

			rect1.x += rect1.vx;
			rect2.x += rect1.vx;
			rect3.x += rect1.vx;

			zombies[0].x += zombies[0].vx;
			zombies[1].x += zombies[0].vx;
			zombies[2].x += zombies[0].vx;

			zombies[0].x = zombies[1].x + 5;  

			tread1.sourceX += 550;
			tread2.sourceX += 550;

			if (tread1.sourceX > 1100) {
				
				tread1.sourceX = 0;
			}
			if (tread2.sourceX > 1100) {
				
				tread2.sourceX = 0;
			}

			if (crusher1On === true) {
				
				if (crusher1.height < 180) {
					
					crusher1.height += 8;
				}
			}

			if (crusher1On === false) {
		
				crusher1.height = 20;
				context.drawImage(switcher1Image,switcher1.x,switcher1.y,switcher1.width,switcher1.height);
				droidAlive = false; 
			}

			if (crusher1On === true || bullet.height > 20) {
			
				droidAlive = true; 
				context.drawImage(switcher2Image,switcher2.x,switcher2.y,switcher2.width,switcher2.height);
			}

			crusher1On = false; 

			if (shootZombie) {

				piece1.vx = 1.3; 
				piece1.vy = 5;
				piece2.vx = 2;
				piece2.vy = 5;
				piece3.vx = 3;
				piece3.vy = 5;

				if (piece1.y < 380) {
					
					piece1.x += piece1.vx;  
					piece1.y += piece1.vy;

					piece2.x += piece2.vx;
					piece2.y += piece2.vy;

					piece3.x += piece3.vx;
					piece3.y += piece3.vy;
				}
			}

			if (!zombies[2].explode) {
			  
				if (zombies[0].x > (canvas.width - zombies[0].width) && zombies[0].y === 30) {
					
					zombies[0].x = 0;
					zombies[0].y = 230;
					zombies[1].x = 0;
					zombies[1].y = 270;
					zombies[2].x = 0;
					zombies[2].y = 310;
				}
				if (zombies[0].x > (canvas.width - zombies[0].width) && zombies[0].y === 230) {
				  
					zombies[0].x = 0;
					zombies[0].y = 30;
					zombies[1].x = 0;
					zombies[1].y = 70;
					zombies[2].x = 0;
					zombies[2].y = 110;
				}
				if (zombies[0].x < 0 &&  zombies[0].y === 30) {
				  
					zombies[0].x = 530;
					zombies[0].y = 230;
					zombies[1].x = 530;
					zombies[1].y = 270;
					zombies[2].x = 530;
					zombies[2].y = 310;
				}
				if (zombies[0].x < 0 &&  zombies[0].y === 230) {
				  
					zombies[0].x = 530;
					zombies[0].y = 30;
					zombies[1].x = 530;
					zombies[1].y = 70;
					zombies[2].x = 530;
					zombies[2].y = 310;
				}
			}

			context.fillStyle = "#CF311F";

			if (!piece1.disappear) {

				context2.drawImage(piece1Image,piece1.x,piece1.y,piece1.width,piece1.height);
			}
			if (!piece2.disappear) {
		
				context2.drawImage(piece2Image,piece2.x,piece2.y,piece2.width,piece2.height);
			}
			if (!piece3.disappear) {

				context2.drawImage(piece3Image,piece3.x,piece3.y,piece3.width,piece3.height);
			}

			if (level === 1) {

				if (Math.abs(rect1.x - crusher1.x) < 150 && rect1.y === 30 && !zombies[2].explode) {
					
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("STEP ON THE SWITCH TO DESTROY ALIEN WITH LASER.",110,15);
				}
				else if (zombies[2].explode && !gotZombie) {
							
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("COLLECT ALIEN REMAINS FOR DISPOSAL.",130,15);
				}
				else if (gotZombie && piece1.y !== 380) {
			
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("PLACE ALIEN REMAINS IN TRASH REMOVAL SYSTEM.",130,15);
				}
				else if (piece1.y === 380 && !levelWon) {
			
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("HOLD THE DOWN KEY WHILE TOUCHING TRASH REMOVAL SYSTEM TO PULVERIZE TRASH.",10,15);
				}
				else if (!levelWon) {
			
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("PRESS LEFT AND RIGHT KEYS TO MOVE. AVOID ENEMIES.",90,15);
				}
			}


			if (level === 2 || level === 3 || level === 5 || level === 6 || level === 9 || level === 10) {

				context.drawImage(ratImage,rat.sourceX,rat.sourceY,rat.sourceWidth,rat.sourceHeight,rat.x,rat.y,rat.width,rat.height);

				if (!rat.left) {
					
					rat.sourceX = 20;
					rat.x += rat.vx;
				}
				if (rat.left) {
				
					rat.sourceX = 0;
					rat.x += -rat.vx;
				}
				if (rat.x >= 500 && !rat.left) {
				
					rat.left = true;
				}
				if (rat.x <= 20 && rat.left) {
				
					rat.left = false;
				}
				if (level === 2 && !levelWon) {
				
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("MICE CANNOT HARM YOU, BUT CAN ACTVATE LASER.",90,15);
				}

				var vx10 = (topSwitcherRandom1 + 20) - rat.centerX();      
				var combinedHalfWidths10 = switcher1.halfWidth() + rat.halfWidth();
			
				if (Math.abs(vx10) < combinedHalfWidths10 && rat.y === 120) {
			
					crusher1On = true;
				}
			}

			if(level === 3 || level === 5 || level === 9 || level === 10) {

				context.drawImage(rat2Image,rat2.sourceX,rat2.sourceY,rat2.sourceWidth,rat2.sourceHeight,rat2.x,rat2.y,rat2.width,rat2.height);

				if (!rat2.left) {
			
					rat2.sourceX = 20;
					rat2.x += rat2.vx;
				}
				if (rat2.left) {
			
					rat2.sourceX = 0;
					rat2.x += -rat2.vx;
				}
				if (rat2.x >= 500 && !rat2.left) {
			
					rat2.left = true;
				}
				if (rat2.x <= 20 && rat2.left) {
			
					rat2.left = false;
				}

				var vx11 = (topSwitcherRandom1 + 20) - rat2.centerX();
				var combinedHalfWidths11 = switcher1.halfWidth() + rat2.halfWidth();
			
				if (Math.abs(vx11) < combinedHalfWidths11 && rat2.y === 120) {
				
					crusher1On = true;
				}	


				if (level === 3 && !levelWon) {
			
					context.fillStyle = "#fff";	// TEXT FOR LEVEL 3
					context.font = "bold 12px ferdana";
					context.fillText("TWO MICE THIS TIME AROUND.",190,15);
				}
			}

			if (level === 4 || level === 5) {

				context.drawImage(drip1Image,drip1.x,drip1.y,drip1.width,drip1.height);
				context.drawImage(drip2Image,drip2.x,drip2.y,drip2.width,drip2.height);

				drip1.y += drip1.vy;  //DRIP VELOCITIES
				drip2.y += drip2.vy;

				if (drip1.y > 360) {
				
					drip1.y = 170;
				}
				if (drip2.y > 150) {
				
					drip2.y = 0;
				}

			  
				var vx12 = rect1.centerX() - drip1.centerX();
				var vy12 = rect1.centerY() - drip1.centerY();
				var combinedHalfWidths12 = rect1.halfWidth() + drip1.halfWidth();
				var combinedHalfHeights12 = rect1.halfHeight() + drip1.halfHeight();
				
				if (Math.abs(vx12) < combinedHalfWidths12) {
			  
					if (Math.abs(vy12) < combinedHalfHeights12) { 
					
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
					}
				}
			  
				var vx13 = rect1.centerX() - drip2.centerX();
				var vy13 = rect1.centerY() - drip2.centerY();
				var combinedHalfWidths13 = rect1.halfWidth() + drip2.halfWidth();
				var combinedHalfHeights13 = rect1.halfHeight() + drip2.halfHeight();
					
				if (Math.abs(vx13) < combinedHalfWidths13) {
				  
					if (Math.abs(vy13) < combinedHalfHeights13) { 
						
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
				   }
				}
			}

			if (level === 4) {
			
				if (level === 4 && !levelWon) {
				
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("BEWARE OF DRIPPING ACID.",190,15);
				}
			}
			  
			if (level === 5) {

				if (level === 5 && !levelWon) {
			
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("TWO MICE AND DRIPPING ACID.",190,15);
				}
			}

			if (level === 6) {

				if (level === 6 && !levelWon) {
			
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("ELECTRICAL MALFUNCTIONS REPORTED IN MAIN BUILDING.",80,15);
				}
			}

			if (level === 7 || level === 10) {

				context.drawImage(drip71Image,drip71.x,drip71.y,drip71.width,drip71.height);
				context.drawImage(drip72Image,drip72.x,drip72.y,drip72.width,drip72.height);
				context.drawImage(drip73Image,drip73.x,drip73.y,drip73.width,drip73.height);
				context.drawImage(drip74Image,drip74.x,drip74.y,drip74.width,drip74.height);
				context.drawImage(drip75Image,drip75.x,drip75.y,drip75.width,drip75.height);

				drip71.y += drip71.vy;
				drip72.y += drip72.vy;
				drip73.y += drip73.vy;
				drip74.y += drip74.vy;
				drip75.y += drip75.vy;

				if (drip71.y > 360) {
			
					drip71.y = 170;
				}
				if (drip72.y > 150) {
			
					drip72.y = 0;
				}
				if (drip73.y > 360) {
			
					drip73.y = 170;
				}
				if (drip74.y > 150) {
			
					drip74.y = 0;
				}
				if (drip75.y > 150) {
			
					drip75.y = 0;
				}
			  
				var vx12 = rect1.centerX() - drip71.centerX();
				var vy12 = rect1.centerY() - drip71.centerY();
				var combinedHalfWidths12 = rect1.halfWidth() + drip71.halfWidth();
				var combinedHalfHeights12 = rect1.halfHeight() + drip71.halfHeight();
				
				if (Math.abs(vx12) < combinedHalfWidths12) {
			  
					if (Math.abs(vy12) < combinedHalfHeights12) { 
				  
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
					}
				}

				var vx13 = rect1.centerX() - drip72.centerX();
				var vy13 = rect1.centerY() - drip72.centerY();
				var combinedHalfWidths13 = rect1.halfWidth() + drip72.halfWidth();
				var combinedHalfHeights13 = rect1.halfHeight() + drip72.halfHeight();
				
				if (Math.abs(vx13) < combinedHalfWidths13) {
			  
					if (Math.abs(vy13) < combinedHalfHeights13) { 
				  
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
					}
				}

				var vx12 = rect1.centerX() - drip73.centerX();
				var vy12 = rect1.centerY() - drip73.centerY();
				var combinedHalfWidths12 = rect1.halfWidth() + drip73.halfWidth();
				var combinedHalfHeights12 = rect1.halfHeight() + drip73.halfHeight();
				
				if (Math.abs(vx12) < combinedHalfWidths12) {
			  
					if (Math.abs(vy12) < combinedHalfHeights12) { 
				  
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
					}
				}
			  
				var vx13 = rect1.centerX() - drip74.centerX();
				var vy13 = rect1.centerY() - drip74.centerY();
				var combinedHalfWidths13 = rect1.halfWidth() + drip74.halfWidth();
				var combinedHalfHeights13 = rect1.halfHeight() + drip74.halfHeight();
				
				if (Math.abs(vx13) < combinedHalfWidths13) {
			  
					if (Math.abs(vy13) < combinedHalfHeights13) { 
				  
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
					}
				}
			
				var vx13 = rect1.centerX() - drip75.centerX();
				var vy13 = rect1.centerY() - drip75.centerY();
				var combinedHalfWidths13 = rect1.halfWidth() + drip75.halfWidth();
				var combinedHalfHeights13 = rect1.halfHeight() + drip75.halfHeight();
				
				if (Math.abs(vx13) < combinedHalfWidths13) {
			  
					if (Math.abs(vy13) < combinedHalfHeights13) { 
				 
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
					}
				}


				if (level === 7 && !levelWon) {
			
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("ACID LEAKS MORE SEVERE.",210,15);
				}
			}

			if (level === 8 || level === 10) {
			
				if (!droidAlive) {

					context.drawImage(rect7Image,rect7.sourceX,rect7.sourceY,rect7.sourceWidth,rect7.sourceHeight,rect7.x,rect7.y,rect7.width,rect7.height);
				} else {

					context.drawImage(rect7Image,rect7.sourceX,rect7.sourceY,rect7.sourceWidth,rect7.sourceHeight,rect7.x,rect7.y,rect7.width,rect7.height);
				}

				if (!droidAlive) {

					context.drawImage(rect8Image,rect8.sourceX,rect8.sourceY,rect8.sourceWidth,rect8.sourceHeight,rect8.x,rect8.y,rect8.width,rect8.height);
				} else {

					context.drawImage(rect8Image,rect8.sourceX,rect8.sourceY,rect8.sourceWidth,rect8.sourceHeight,rect8.x,rect8.y,rect8.width,rect8.height);
				}

				if (!droidAlive) {
				
					context.drawImage(rect9Image,rect9.sourceX,rect9.sourceY,rect9.sourceWidth,rect9.sourceHeight,rect9.x,rect9.y,rect9.width,rect9.height);
				} else {

					context.drawImage(rect9Image,rect9.sourceX,rect9.sourceY,rect9.sourceWidth,rect9.sourceHeight,rect9.x,rect9.y,rect9.width,rect9.height);
				}

				if (droidAlive) {
				
					rect7.x += rect7.vx;   
					rect8.x += rect8.vx;
					rect9.x += rect9.vx;

					var vx12 = rect1.centerX() - rect7.centerX();
					var vy12 = rect1.centerY() - rect7.centerY();
					var combinedHalfWidths12 = rect1.halfWidth() + rect7.halfWidth();
					var combinedHalfHeights12 = rect1.halfHeight() + rect7.halfHeight();
				
					if (Math.abs(vx12) < combinedHalfWidths12) {
			  
						if (Math.abs(vy12) < combinedHalfHeights12) { 
				  
							rect1.explode = true;
							rect2.explode = true;
							rect3.explode = true;
						}
					}
				}
				else  {
			
					rect7.x += -rect7.vx;
					rect8.x += -rect8.vx;
					rect9.x += -rect9.vx;
				}

				if (rect7.x < 40) {
			
					rect7.x = 40;
					rect8.x = 40;
					rect9.x = 40;
				}
			}

			if (level === 8) {
			
				if (level === 8 && !levelWon) {
			
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("DROIDS COME TO LIFE WHEN LASERS ARE ACTIVATED.",80,15);
				}
			}

			if (level === 9) {

				if (level === 9 && !levelWon) {

					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("ELECTRICAL MALFUNCTIONS HAVE RETURNED.",150,15);
				}
			}

			if (level === 10) {

				if (level === 10 && !levelWon) {
			
					context.fillStyle = "#fff";
					context.font = "bold 12px ferdana";
					context.fillText("COMPLETE CHAOS ABOARD SHIP.",190,15);
				}
			}

			context2.fillStyle = "#f0f3f3";
			context2.fillRect(10,40,40,20);

			context2.fillStyle = "rgba(255,0,0,.7)";
			context2.fillRect(bullet.x,bullet.y,bullet.width,bullet.height);

			context2.drawImage(gunImage,gun.x,gun.y,gun.width,gun.height);

			gun.x += gun.vx;
			bullet.x = gun.x + 10;
			
			bullet.height += bullet.vy;

			if (bullet.height < 0) {
			
				bullet.height = 0;
			}

			if (bullet.height > canvas.height) {
			
				bullet.height = canvas.height;
			}


			if (bullet.y > 20) {
			
				bullet.canShoot = false;
			}
			if (bullet.y > canvas.height) {
			
				bullet.canShoot = true;
				bullet.y = 0;
				bullet.vy = 0;
			}
			if (gun.x > canvas2.width - gun.width) {
			
				gun.vx *= -1;
			}
			if (gun.x < 0) {
			
				gun.vx *= -1;
			}

			context.drawImage(trashLight1Image,trashLight1.x,trashLight1.y,trashLight1.width,trashLight1.height);

			if (gotZombie && rect1.y === 30 && rect1.x > 400 && rect1.x < 450) {
			
				context.drawImage(trashLight2Image,trashLight2.x,trashLight2.y,trashLight2.width,trashLight2.height);
				shootZombie = true; 
				bullet.canShoot = true;
			}
			
			context.drawImage(rect1Image,rect1.sourceX,rect1.sourceY,rect1.sourceWidth,rect2.sourceHeight,rect1.x,rect1.y,rect1.width,rect1.height);
			context.drawImage(rect2Image,rect2.sourceX,rect2.sourceY,rect2.sourceWidth,rect2.sourceHeight,rect2.x,rect2.y,rect2.width,rect2.height);
			context.drawImage(rect3Image,rect2.sourceX,rect2.sourceY,rect2.sourceWidth,rect2.sourceHeight,rect3.x,rect3.y,rect3.width,rect3.height);

			if (zombies[0].visible) {

				context.drawImage(rect4Image,zombies[0].sourceX,zombies[0].sourceY,zombies[0].sourceWidth,zombies[0].sourceHeight,zombies[0].x,zombies[0].y,zombies[0].width,zombies[0].height);
				context.drawImage(rect5Image,zombies[1].sourceX,zombies[1].sourceY,zombies[1].sourceWidth,zombies[1].sourceHeight,zombies[1].x,zombies[1].y,zombies[1].width,zombies[1].height);
				context.drawImage(rect6Image,zombies[2].sourceX,zombies[2].sourceY,zombies[2].sourceWidth,zombies[2].sourceHeight,zombies[2].x,zombies[2].y,zombies[2].width,zombies[2].height);
			}

			context.drawImage(tread1Image,tread1.sourceX,tread1.sourceY,tread1.sourceWidth,tread1.sourceHeight,tread1.x,tread1.y,tread1.width,tread1.height);
			context.drawImage(tread2Image,tread2.sourceX,tread2.sourceY,tread2.sourceWidth,tread2.sourceHeight,tread2.x,tread2.y,tread2.width,tread2.height);

			context.fillStyle = "rgba(255,0,0,.7)";
			context.fillRect(crusher1.x,crusher1.y,crusher1.width,crusher1.height);
			context.fill();
			
			if (zombies[0].y === 230 && crusher1.height === 180 && zombies[0].x > 167 && zombies[0].x < 350) {
				
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

			context.fillStyle = "rgba(242,255,112,.7)";
			context.beginPath()
			context.moveTo(130,20);
			context.lineTo(100,150);
			context.lineTo(200,150);
			context.lineTo(170,20);
			context.fill();

			context.fillStyle = "rgba(242,255,112,.7)";
			context.beginPath()
			context.moveTo(330,170);
			context.lineTo(300,350);
			context.lineTo(400,350);
			context.lineTo(370,170);
			context.fill();

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

			if (out % 2 === 0) {

				context.fillStyle = "#000000";
				context.fillRect(0,0,canvas.width,350); 

				context.fillStyle = "#ffffff";
				context.fillRect(270,50,4,4);	
				context.fillRect(298,43,4,4);
				context.fillRect(350,57,4,4);

				context.fillStyle = "#ffffff";
				context.fillRect(400,225,4,4); 
				context.fillRect(460,230,4,4);
				context.fillRect(427,260,4,4);
				context.fillRect(387,245,4,4);
				context.fillRect(423,203,4,4);

				context.fillRect(100,200,4,4);	
				context.fillRect(160,230,4,4);
				context.fillRect(127,260,4,4);
				context.fillRect(87,245,4,4);
				context.fillRect(140,203,4,4);
				context.closePath();

				context.fillStyle = "#fff";
				context.font = "bold 12px ferdana";
				context.fillText("ELECTRICAL MALFUNCTIONS REPORTED IN MAIN BUILDING.",80,15)
			}

			if (rect1.explode) {
			
				gameOver = true;
				rect1.x += 6; 
				rect1.y += -2;
				rect2.x += -8;
				rect2.y += -6;
				rect3.x += 5;
				rect3.y += 3;

				gun.vx = 0;

				context.strokeStyle = "#333";
				context.lineWidth = 8;
				context.strokeRect(120,100,300,200);

				context.fillStyle = "rgba(255,255,255,.9)";
				context.fillRect(120,100,300,200);
				context.fillStyle = "rgba(0,0,0,.9)";
				context.font = "bold 38px ferdana";
				context.fillText("GAME OVER",148,185);
				context.font = "bold 20px ferdana";
				context.fillText("PRESS SPACE TO RESTART",137,255);
				context.lineWidth = 1;
			}

			if (piece1.disappear && piece2.disappear && piece3.disappear && bullet.height === 0 && !gameOver) {
			
				levelWon = true;
				droidAlive = false;
			}

			if (levelWon) {
			
				context.fillStyle = "#fff";
				context.font = "bold 12px ferdana";
				context.fillText("WELL DONE.    PRESS THE SPACE KEY TO ADVANCE TO THE NEXT LEVEL",60,15);

				context.beginPath();
				context.strokeStyle = "#333";
				context.lineWidth = 8;
				context.strokeRect(120,100,300,200);
				context.stroke();
				context.closePath();

				if (level < 10) {
			
					context.fillStyle = "rgba(255,255,255,.9)";
					context.fillRect(120,100,300,200);
					context.fillStyle = "rgba(0,0,0,.8)";
					context.font = "bold 22px verdana";
					context.fillText("LEVEL COMPLETE!",155,185);
					context.font = "bold 14px verdana";
					context.fillText("PRESS SPACE TO CONTINUE",154,225);
				}
				if (level >= 10) {
			
					context.fillStyle = "rgba(255,255,255,.9)";  //GAME ENDING WINDOW
					context.fillRect(120,100,300,200);
					context.fillStyle = "rgba(0,0,0,.8)";
					context.font = "bold 24px verdana";
					context.fillText("CONGRATULATIONS!",129,205);
			
					window.removeEventListener("keydown",onKeyDown,false);  //REMOVING EVENT LISTENERS
					window.removeEventListener("keyup",onKeyUp,false);
				}
			}

			if (zombies[2].explode) {
			
				if (zombies[0].y < 310) {
			
					zombies[0].x += -10;
					zombies[0].y += -.2;
					zombies[0].sourceX = 150;
				}
				if (zombies[1].y < 310) {
			
					zombies[1].x += -3;
					zombies[1].y += -4.8;
					zombies[1].sourceX = 150;
				}
				if (zombies[2].y < 310) {
			
					zombies[2].x += 5;
					zombies[2].y += -2;
				}

				zombies[0].y += zombies[0].gravity;  
				zombies[1].y += zombies[0].gravity;
				zombies[2].y += zombies[0].gravity;

				if (zombies[0].y >= 310) {
			
					zombies[0].y = 310;
					zombies[0].vx = 0;
					zombies[0].vy = 0;
					zombies[0].sourceX = 150;
				}
				if (zombies[1].y >= 310) {
			
					zombies[1].y = 310;
					zombies[1].vx = 0;
					zombies[1].vy = 0;
					zombies[1].sourceX = 150;
				}
				if (zombies[2].y >= 310) {
			
					zombies[2].y = 310;
					zombies[2].vx = 0;
					zombies[2].vy = 0;
					zombies[2].sourceX = 150;
				}
			}


			if (!rect1.explode) {
					  
				if (rect1.x < 0 && rect1.y === 230) {
			  
					rect1.x = 550;
					rect1.y = 30;
					rect2.x = 550;
					rect2.y = 70;
					rect3.x = 550;
					rect3.y = 110;
				}
			  
				if (rect1.x < 0 && rect1.y === 30) {
			  
					rect1.x = 530;
					rect1.y = 230;
					rect2.x = 530;
					rect2.y = 270;
					rect3.x = 530;
					rect3.y = 310;
				}
		
				if (rect1.x > 550 && rect1.y === 30) {
					
					rect1.x = 0;
					rect1.y = 230;
					rect2.x = 0;
					rect2.y = 270;
					rect3.x = 0;
					rect3.y = 310;
				}
			  
				if (rect1.x > 550 && rect1.y === 230) {
			  
					rect1.x = 0;
					rect1.y = 30;
					rect2.x = 0;
					rect2.y = 70;
					rect3.x = 0;
					rect3.y = 110;
				}
			}

			var vx2 = (topSwitcherRandom1 + 20) - rect3.centerX();
			var combinedHalfWidths2 = switcher1.halfWidth() + rect3.halfWidth();
			
			if (Math.abs(vx2) < combinedHalfWidths2 && rect3.y === 110) {
				
				crusher1On = true;
			}
				
	
			var vx7 = ((topSwitcherRandom1 - 10) + 20) - zombies[2].centerX();
			var combinedHalfWidths7 = switcher1.halfWidth() + zombies[2].halfWidth();
			
			if (Math.abs(vx7) < combinedHalfWidths7 && zombies[2].y === 110) {
			  
				crusher1On = true;
			}
				
			var vx3 = rect3.centerX() - zombies[2].centerX();
			var vy3 = rect3.centerY() - zombies[2].centerY();

			var combinedHalfWidths3 = rect3.halfWidth() + zombies[2].halfWidth();
			var combinedHalfHeights3 = rect3.halfHeight() + zombies[2].halfHeight();
				
			if (Math.abs(vx3) < combinedHalfWidths3) {
			  
				if (Math.abs(vy3) < combinedHalfHeights3) {
				  
					if (!zombies[2].explode) {
				  
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
					}
					if (zombies[2].explode) {
				  
						zombies[0].visible = false; 
						zombies[1].visible = false;
						zombies[2].visible = false;
				 
						gotZombie = true;
					}
				}
			}
				
			if (zombies[0].y === 230 && !gameOver) {   	
				
				var vx4 = zombies[0].centerX() - crusher1.centerX();
				var vy4 = zombies[0].centerY() - crusher1.centerY();
				var combinedHalfWidths4 = zombies[0].halfWidth() + crusher1.halfWidth();
				var combinedHalfHeights4 =zombies[0].halfHeight() + crusher1.halfHeight();
				
				if (Math.abs(vx4) < combinedHalfWidths4) {
				
					if(Math.abs(vy4) < combinedHalfHeights4) {
					
						if (crusher1.height > 20) {
				
							if (zombies[0].x > 150 && zombies[0].x < 250) {
				
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
				
			var vx9 = rect1.centerX() - crusher1.centerX();
			var vy9 = rect1.centerY() - crusher1.centerY();
			var combinedHalfWidths9 = rect1.halfWidth() + crusher1.halfWidth();
			var combinedHalfHeights9 =rect1.halfHeight() + crusher1.halfHeight();
			   
			if (Math.abs(vx9) < combinedHalfWidths9) {
			
				if (Math.abs(vy9) < combinedHalfHeights9) {
				
					if (crusher1.height > 20) {
				  
						rect1.explode = true; 
						rect2.explode = true;
						rect3.explode = true;
					}
				}
			}
					   
			for (var i = 0; i < pieces.length; i++) {
			 
				var vx5 = bullet.centerX() - pieces[i].centerX();
				var vy5 = bullet.centerY() - pieces[i].centerY();
				var combinedHalfWidths5 = bullet.halfWidth() + pieces[i].halfWidth();
				var combinedHalfHeights5 = bullet.halfHeight() + pieces[i].halfHeight();
		
				if (Math.abs(vx5) < combinedHalfWidths5) {
			  
					if (Math.abs(vy5) < combinedHalfHeights5) {
				
						pieces[i].disappear = true; 
					} 
				}
			}	   
		}
	}
}()); 
