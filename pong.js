$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	canvas.style.border = "3pt solid";
	var mx, my;
	
	
//------------------------------------------------------------------------------------//
//==--==--==--==--==--==--==--==--==--Abdul Basit:16==--==--==--==--==--==--==--==--==//
//------------------------------------------------------------------------------------//
	
var numtotalscore = 0;
var numtotalscore1 = 0;

	var namefinder;		//sets name for paddle with 'prompt' code
	var namefinder1;	//sets name for paddle with 'prompt' code
	var namefinder2;	//sets name for paddle with 'prompt' code
	var namefinder3;	//sets name for paddle with 'prompt' code
	var ballspeedchanger = 8;			//sets paddle speed for multi ball mode
	
	var alphaon = true;			//change colour of red dot
	var alphaon1 = false;		//change colour of red dot
	var allballslow = false;		//slows all ball upon powerbutton pressed
	var percentage = 100;		//store how long until power recharge
	var ebuttonoff = false;		//turns off 'e' key 
	var resetbutton = true;		// reset powerbutton
	////////////////////////
	/////Multi ball one
	///////////////////////

	var ballrelease1 = true;
	var ballonego = false;
	var balltwogo = false;
	var ballthreego = false;
	var ballfourgo = false;

	////////////////////////
	/////Multi ball two
	///////////////////////	

	var ballrelease2 = true;
	var ballspeed1 = false;
	var ballspeed2 = false;
	var ballspeed3 = false;
	var ballspeed4 = false;

	////////////////////////
	/////Multi ball three
	///////////////////////
	var ballrelease3 = true;

	var ballspeed5 = false;
	var ballspeed6 = false;
	var ballspeed7 = false;
	var ballspeed8 = false;

	////////////////////////
	/////Multi ball four
	///////////////////////
	var ballrelease4 = true;



	var namecopy;
	var promptstopper = true;
	var promptstopper1 = true;	
	var promptstopper2 = true;	
	var promptstopper3 = true;	

	var picArray = new Array();
	var ballarray = new Array();
	var ballxanimation = new Array();
	var ballyanimation = new Array();



	var cooleffect = false;				//makes start button to switch
	var cooleffectcounter = 0;			//makes it change colour after'x' time
	var startgame = false;				// begins game

	var waterlevelchange = 0;			//variable to make water level change
	var watertoggle = true;			// variable to make water level switch directions
	var watertoggle1 = false;			// variable to make water level switch directions
	var waterstopper = false;		//variable to make water level dissapear
	
	
	var bubblex = 0;					//x of bubble
	var bubbley = 0;					//y of bubble

	var waterparticle = 0;				// to create water particle
	var waterparticle1 = 0;				// to create water particle
	var waterparticle2 = 0;				// to create water particle	
	var waterparticle3 = 0;				// to create water particle
	var waterparticle4 = 0;				// to create water particle	
	var waterparticle5 = 0;				// to create water particle
	var waterparticle6 = 0;				// to create water particle
	var waterparticle7 = 0;				// to create water particle	
	var waterparticle8 = 0;				// to create water particle
	var waterparticle9 = 0;				// to create water particle

	var rightfollow = 0;				//makes right paddle find ball	
	var upfollow = 0;	
	var bottomfollow =0;				//makes bottom paddle hit the paddle

	var paddlecontrol = true;
	var paddlecontro2 = true;


	var test1 = 0;				//left paddle move
	var test2 = 0;				//ball move x	
	var test8 = 0;				//ball move y	
	var test13 = 0; 			//right paddle miss unit
	var test20 = 0;				//top and bottom paddle miss unit
	var test14 = true;			//to make computer right paddle miss
	var test15 =0; 				//moves paddle with human controls
	var paddlebottomanimation =0;		//moves bottom human paddle
	var test16 = 0;				//animation for top human paddle
	var pointanim = 0;			//animation to make pointer move

	var ballflamemove = 0; 		//makes flame move around	
	
	var rightup = false;			//makes right paddle move up
	var rightdown=false;			//makes right paddle move down

	var bottomleft = false;			//makes bottom paddle move left
	var bottomright=false;			//makes bottom  paddle move right

	var topleft = false;			//makes top paddle move left
	var topright=false;			//makes  top paddle move right
	
	var paddleup = false;			//makes left paddle move up
	var paddledown = false; 		//makes left paddle move down
		
	var controlmenu = false; 		//to draw my control menu
	
////////////////////////////////////////////////////////	
///////// Ball directional speeds
/////////////////////////////////////////////
	var test3 = true;			//make ball move left
	var test4 = false;			//make ball move right
	var test7 = false;			//make ball move top right
	var test9 = false;			//make ball move bottom right
	var test10 = false;			//make ball move bottom left
	var test11 =false;			//make ball move top left



	/////////////////////////////////////////
	//////to make 'ball speed' toggle switch
	///////////////////////////////////////

	var leftblue = true;
	var middleblue = false;
	var rightblue = false;

	//////////////////////////////////////////////
	//////to make 'compute rplayer' toggle switch
	////////////////////////////////////////////
	
	var computerplayerleftblue = true;
	var computerplayermiddleblue = false;
	var computerplayerrightblue = false;

	///////////////////////////////////////////
	//////to make 'human player' toggle switch
	/////////////////////////////////////////
	
	var humanplayerleft = false;
	var humanplayermiddle = false;
	var humanplayerright = false;

	////////////////////////////////////////////
	//////to make 'paddle speed' toggle switch
	///////////////////////////////////////////
	
	var paddlespeedleft = true;
	var paddlespeedmiddle= false;
	var paddlespeedright = false;

	////////////////////////////////////////////
	//////to make 'none circle' light up
	///////////////////////////////////////////	

	var nonetop = false;
	var nonebottom = true;
	
	/////////////////////////////////////////
	///////// Ball Drag effect toggle 
	///////////////////////////////////////////
	
	var onbutton = false;
	var offbutton = true;

	/////////////////////////////////////////////
	////////// Water level light up
	///////////////////////////////////////////

	var wateron = false;
	var wateroff = true;


			
	/////////////////////////////////////////////////
	////////////
	/////////////////////////////////////////////////
	
	var multipongon = false;
	var multipongoff = true; 
	var multiballappear = false;

	////////////////////////////////////////////////
	testpausegame = true;			//to pause the game
	
	var rightpaddlestop = true;		//to make right paddle (human control) to not exit the canvas
	var rightpaddlestop1 = true;		//to make right paddle (human control) to not exit the canvas
	var bottompaddlestop =true;		//to make bottom paddle (human control) to not exit the canvas
	var bottompaddlestop1 = true;		//to make bottom paddle (human control) to not exit the canvas
	var computerpaddlemiss;			//to AI computer paddle miss
	
	var num1 = 0;				//pointer counter
	var num2 = 0;				//pointer counter
	var num20 = 0;				//pointer counter
	var num21 = 0;				//pointer counter
	

	var num3 = 0;				//move paddle stopper
	var num4 = 0;
	var num5 = 0;
	var paddleslowmove1 = false;		//allows my paddle to create slow movement
	var paddleslowmove = false;		//allows my paddle to create slow movement

	num6 = 0;			//right paddle ease stop
	num7= 0;
	num8=0;
	num9=0;			//right paddle ease stop
	var paddleslowmove2 = false;		//allows my paddle to create slow movement
	var paddleslowmove3 = false;		//allows my paddle to create slow movement

	//////////////////////////////////////
	///////////////////spawns my left paddle somewhere randomly
	////////////////////////////////////////////
	
	var paddlerandom=0;			
	var paddlerandom1=0;
	var combinerandom =0;
	
	////////////////////////
	////////timer
	////////////////////


	var timer = 2000;				//set value of time
	var timerstart = true;			//allows timer to run
				
	///////////////////////////////////////////
	var pointerstopper1 = true;		//stops pointer to leave top canvas
	var pointerstopper = true;		//stops pointer to leave bottom canvas
	var gameover = false;			//to display the game over screen
	var homemenu = false;			//to return to home menu
	var replay  = false;			//to replay the game

	var paddleytop;				// Top point of left paddle
	var paddleybottom;			// bottom point of left paddle
	var ballx;					// ball's x point
	var bally;					// ball's y point
	
///////////////////////////////////////////////////////////
	var ballx1;
	var bally1;
	var ballup1 = 0;
	var ballbottom1 = 0;

/////////////////////////////////////////////////////////////
	var ballx2;
	var bally2;
	var ballup2 = 0;
	var ballbottom2 = 0;

/////////////////////////////////////////////////////////////	
	var ballx3;
	var bally3;
	var ballup3 = 0;
	var ballbottom3 = 0;
	
////////////////////////////////////////////////////////////	


	var Bdx=0;					//draw multiple ball effect
	var Bdy=0;

	var test6 = true;				//stops left paddle to leave canvas
	var test5 = true;				//stops left paddle to leave canvas
	var test12 = false;				// allows game to start on 'play' button click
	////////////////////////////////////////////////
///////////////////////////////right computer animation	
	var rightpaddlemove;
	var rightpaddlexpoint;
///////////////////////////////////////////
////////////////////////////////Right Human animation
	var rightpaddlehuman;
	var rightpaddlehumanxpoint;
	
/////////////////////////////////////////
////////////////////////////// Top computer animaiton

	var toppaddlex;
	var toppaddlexpoint;
	////////////////////////////////////
	//////////////////////////Top human animation
	var toppaddlehumanx;	
	var toppaddlehumanpoint;
//////////////////////////////////
////////////////////////buttom computer animation
	
	var bottompaddlex;
	var bottompaddlexpoint;
///////////////////////////////////
///////////////////////buttom human animation
	var bottompaddlehumanx;
	var bottompaddlehumanxpoint;	
///////////////////////
	//var pic1 = new Image();			//ball
	var pic2 = new Image();			//circle thing around blue dot
	var pic3 = new Image();			//blue dot
	var pic4 = new Image();		//gray background
	var pic5= new Image();		//draws pointer at the end of game
	var pic6  = new Image();	// draws start button empty
	var pic7 = new Image();		//draws start button fill
	var pic8 = new Image();		//draws loading logo





////////////////////////////////////////////

	var wateranimationtopright = true;
	var wateranimationtopleft = true;
	var wateranimationbottomright = true;
	var wateranimationbottomleft = true;

//////////////////////////////////////////////////


	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	//////////
	///STATE VARIABLES
		
	//pic1.src = 'Pics/blackcircle.png';
	pic2.src = 'Pics/whitecircle.png';	
	pic3.src = 'Pics/blue-dog.png';
	pic4.src='Pics/TransparentGrey.png';
	pic5.src='Pics/indexpointer.png';
	pic6.src = 'Pics/play-buttoncenterfill.png';
	pic7.src='Pics/play-buttoncenterempty.png';


	
	//beep noise
	picArray[0]= new Audio("SoundFiles/4391__noisecollector__pongblipf-5.wav");	
	picArray[1]= new Audio("SoundFiles/4391__noisecollector__pongblipf-5.wav");	
	picArray[2]= new Audio("SoundFiles/4391__noisecollector__pongblipf-5.wav");	
	picArray[3]= new Audio("SoundFiles/4391__noisecollector__pongblipf-5.wav");
	picArray[4]= new Audio("SoundFiles/Comet-SoundBible.com-1256431940.mp3");	
	picArray[5]= new Audio("SoundFiles/Fishtank Bubbles-SoundBible.com-716707235.wav");
	picArray[6]= new Audio("SoundFiles/Water Balloon-SoundBible.com-1358039219.wav");
	picArray[7] = new Audio("SoundFiles/Pacman_Introduction_Music-KP-826387403.wav");
	

	









	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 20);
	}

	init();	


	ballarray[0]= new Image();
	ballarray[0].src = 'Pics/blackcircle.png';
	ballarray[1]= new Image();
	ballarray[1].src = 'Pics/blackcircle.png';
	ballarray[2]= new Image();
	ballarray[2].src = 'Pics/blackcircle.png';
	ballarray[3]= new Image();
	ballarray[3].src = 'Pics/blackcircle.png';
	

		paddlerandom = Math.floor(Math.random()*9);					//randomly spawns my left paddle somewhere
		paddlerandom1 = Math.floor(Math.random()*-6);
		combinerandom = (paddlerandom* paddlerandom1)/2;

	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{





/////////////////////////////////////////////////////
/////////////allows my hit box to appear for different paddle combinations
//////////////////////////////////

	if(computerplayerleftblue == true && humanplayerleft == true){
	toppaddlex = ((w/2)-25)+upfollow;				//top paddle computer
	toppaddlexpoint = ((w/2)+25)+upfollow;
	rightpaddlehuman = ((h/2)-20)+test15;				//right paddle human
	rightpaddlehumanxpoint = ((h/2)+20)+test15;
	}	
	if(computerplayermiddleblue == true && nonebottom == true){
		toppaddlex = ((w/2)-25)+upfollow;			//top paddle computer
	toppaddlexpoint = ((w/2)+25)+upfollow;
	
	rightpaddlemove =((h/2)-20)+rightfollow;			//right paddle computer
	rightpaddlexpoint= ((h/2)+20)+rightfollow;
	}
	if(computerplayerleftblue == true && nonebottom ==true){
	rightpaddlemove =((h/2)-20)+rightfollow;			//right paddle computer
	rightpaddlexpoint= ((h/2)+20)+rightfollow;
	
	}if(humanplayerleft == true && computerplayermiddleblue ==true){
	toppaddlex = ((w/2)-25)+upfollow;				//top paddle computer
	toppaddlexpoint = ((w/2)+25)+upfollow;
	rightpaddlehuman = ((h/2)-20)+test15;				//right paddle human
	rightpaddlehumanxpoint = ((h/2)+20)+test15;
	 bottompaddlex=((w/2)-25)+bottomfollow;				//bottom paddle computer
	bottompaddlexpoint=((w/2)+25)+bottomfollow;
	}
	if(computerplayerleftblue ==true && humanplayermiddle ==true){
	toppaddlex = ((w/2)-25)+upfollow;				//top paddle computer
	toppaddlexpoint = ((w/2)+25)+upfollow;
	rightpaddlehuman = ((h/2)-20)+test15;				//right paddle human
	rightpaddlehumanxpoint = ((h/2)+20)+test15;
	bottompaddlehumanx=((w/2)-25)+paddlebottomanimation;
	bottompaddlehumanxpoint=((w/2)+25)+paddlebottomanimation;
	}
	if(computerplayerrightblue ==true && nonebottom ==true){
	toppaddlex = ((w/2)-25)+upfollow;				//top paddle computer
	toppaddlexpoint = ((w/2)+25)+upfollow;
	bottompaddlex=((w/2)-25)+bottomfollow; 					//bottom paddle computer
	bottompaddlexpoint=((w/2)+25)+bottomfollow; 	
	rightpaddlemove =((h/2)-20)+rightfollow;			//right paddle computer
	rightpaddlexpoint= ((h/2)+20)+rightfollow;
	}
	if(nonetop ==true && humanplayerleft == true){
	rightpaddlehuman = ((h/2)-20)+test15;				//right paddle human
	rightpaddlehumanxpoint = ((h/2)+20)+test15;
	}
if(nonetop ==true && humanplayermiddle){
rightpaddlehuman = ((h/2)-20)+test15;				//right paddle human
	rightpaddlehumanxpoint = ((h/2)+20)+test15;
	bottompaddlehumanx=((w/2)-25)+paddlebottomanimation;
	bottompaddlehumanxpoint=((w/2)+25)+paddlebottomanimation;
}
if(nonetop ==true && humanplayerright==true){
rightpaddlehuman = ((h/2)-20)+test15;				//right paddle human
	rightpaddlehumanxpoint = ((h/2)+20)+test15;
bottompaddlehumanx=((w/2)-25)+paddlebottomanimation;		//bottom paddle human
	bottompaddlehumanxpoint=((w/2)+25)+paddlebottomanimation;
	 toppaddlehumanx=((w/2)-20)+test16;						//top paddle human
	 toppaddlehumanpoint=((w/2)+20)+test16;

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////


	/////////////////////////////////////////////////////////
	paddleytop = (((h/2)+combinerandom)-20)+test1;				//left paddle
	paddleybottom = (((h/2)+combinerandom)+20)+test1;
	////////////////////////////////////////////////////////////////
	ballx = (w/2)+test2;				//ball
	bally =(h/2)+test8;
	
	ballx1 = (w/2)+ballup1;
	bally1 = (h/2)+ballbottom1;

	ballx2 = (w/2)+ballup2;
	bally2= (h/2)+ballbottom2;

	ballx3 = (w/2)+ballup3;
	bally3 = (h/2)+ballbottom3;

	


	/////////////////////////////////////////////////////////






		ctx.fillStyle = 'black';			//draws background
		ctx.fillRect(0,0, 640,480);	

		ctx.fillStyle = 'white';			//draws long white lines
	ctx.fillRect(0,0, w,10);

	
		ctx.fillStyle = 'white';			//draws white long lines
	ctx.fillRect(0,h-10, w,10);


	
/////////////////////////////////
/////draws different score counters depending on what paddle combinations it is 
///////////////////////////////////	

		
		ctx.fillStyle = 'white';			//left paddle
		ctx.fillRect(10,paddleytop, 10,40);
		
		
	if(computerplayerleftblue == true && nonebottom ==true){
		ctx.fillStyle = 'white';			//right	paddle
		ctx.fillRect(580,rightpaddlemove, 10,40);
		}
		
	if(computerplayermiddleblue == true && nonebottom == true){
		ctx.fillStyle = 'white';			//right computerpaddle
		ctx.fillRect(580,rightpaddlemove, 10,40);
		
		ctx.fillStyle = 'white';			//top computerpaddle
		ctx.fillRect(toppaddlex,20, 50,10);
	}	
	if(humanplayerleft == true && computerplayermiddleblue ==true){
	
	ctx.fillStyle = 'white';			//right Human	paddle
		ctx.fillRect(580,rightpaddlehuman, 10,40);
		
	ctx.fillStyle = 'white';			//top computerpaddle
		ctx.fillRect(toppaddlex,20, 50,10);
		
	ctx.fillStyle ='white';			//bottom computerpaddle
	ctx.fillRect(bottompaddlex,355, 50,10);
	
	
		}
	if(computerplayerleftblue == true && humanplayerleft == true){
		ctx.fillStyle = 'white';			//top computerpaddle
		ctx.fillRect(toppaddlex,20, 50,10);
		ctx.fillStyle = 'white';			//right Human	paddle
		ctx.fillRect(580,rightpaddlehuman, 10,40);
		}
		if(computerplayerleftblue ==true && humanplayermiddle ==true){
		ctx.fillStyle = 'white';			//top computerpaddle
		ctx.fillRect(toppaddlex,20, 50,10);
		ctx.fillStyle = 'white';			//right Human	paddle
		ctx.fillRect(580,rightpaddlehuman, 10,40);
		ctx.fillStyle ='white';			//bottom computerpaddle
	ctx.fillRect(bottompaddlehumanx,355, 50,10);
		}
		if(computerplayerrightblue ==true && nonebottom ==true){
		ctx.fillStyle = 'white';			//top computerpaddle
		ctx.fillRect(toppaddlex,20, 50,10);
			ctx.fillStyle = 'white';			//right computerpaddle
		ctx.fillRect(580,rightpaddlemove, 10,40);
	ctx.fillStyle ='white';			//bottom computerpaddle
	ctx.fillRect(bottompaddlex,355, 50,10);
		
		}
	if(nonetop ==true && humanplayerleft == true){
	ctx.fillStyle = 'white';			//right Human	paddle
		ctx.fillRect(580,rightpaddlehuman, 10,40);
	}
	if(nonetop ==true && humanplayermiddle){
	ctx.fillStyle = 'white';			//right Human	paddle
		ctx.fillRect(580,rightpaddlehuman, 10,40);
ctx.fillStyle ='white';			//bottom human paddle
	ctx.fillRect(bottompaddlehumanx,355, 50,10);
	}

	if(nonetop ==true && humanplayerright ==true){
ctx.fillStyle = 'white';			//right Human	paddle
		ctx.fillRect(580,rightpaddlehuman, 10,40);
ctx.fillStyle ='white';			//bottom human paddle
	ctx.fillRect(bottompaddlehumanx,355, 50,10);	
		
ctx.fillStyle = 'white';		//top human paddle 		
		ctx.fillRect( toppaddlehumanx,20, 50,10);

	}

////////////////////
////score values
////////////////////

ctx.fillStyle = 'red';			
	ctx.fillText(num1,12,(((h/2)+combinerandom)+4)+test1);					//draws my left score counter

	
if(computerplayerleftblue ==true && humanplayerleft ==true){	
	ctx.fillText(num2,582, ((h/2)+4)+test15);
	ctx.fillText(num20,(((w/2)-3)+upfollow),28);
	}
	if(computerplayerleftblue ==true && humanplayermiddle ==true){	
	ctx.fillText(num2,582, ((h/2)+4)+test15);
	ctx.fillText(num20,(((w/2)-3)+upfollow),28);
	ctx.fillText(num21,((w/2)-3)+paddlebottomanimation,363);
	
	}
	if(humanplayerright ==true && nonetop == true){
	ctx.fillText(num2,582, ((h/2)+4)+test15);
	ctx.fillText(num21,((w/2)-3)+paddlebottomanimation,363);
	ctx.fillText(num20,((w/2)+4)+test16,28);
	}
	if(computerplayerleftblue == true && nonebottom == true){
			ctx.fillText(num2,582,(h/2+4)+rightfollow);
	}
	if(computerplayerrightblue == true && nonebottom == true){
			ctx.fillText(num2,582,((h/2)+4)+rightfollow);
			ctx.fillText(num20,(((w/2)-3)+upfollow),28);
			ctx.fillText(num21,((w/2)-3)+bottomfollow,363);
	}
	if(computerplayermiddleblue == true && humanplayerleft ==true){
	ctx.fillText(num2,582, ((h/2)+4)+test15);
	ctx.fillText(num20,(((w/2)-3)+upfollow),28);
	ctx.fillText(num21,((w/2)-3)+bottomfollow ,363);
	}
	
	if(nonetop == true&& humanplayerleft == true){
	ctx.fillText(num2,582, ((h/2)+4)+test15);
	}
		
	if(nonetop == true&& humanplayermiddle == true){
	ctx.fillText(num2,582,(h/2+4)+rightfollow);
	ctx.fillText(num21,((w/2)-3)+paddlebottomanimation,363);
	}
	if(computerplayermiddleblue == true && nonebottom ==true){
	ctx.fillText(num2,582,(h/2+4)+rightfollow);
	ctx.fillText(num20,(((w/2)-3)+upfollow),28);
	}
////////////////////////////////////////////////////////////////////////////////		





////////////////////////////////////////////////////////////////////////////

	
ctx.fillStyle ='white';		//draws timer
ctx.fillText(timer,291,20);

//////////////////////////
//////Ball Speed Slider
////////////////////		
	if(gameover == false){
		if(test12 == false){
		
		
		
		
//////////////////////////////////////
///////draws my menu(s)
//////////////////////////////////	
	
		ctx.drawImage(pic4,0,0,w,h);		//grey background
		ctx.globalAlpha = 1;
		ctx.drawImage(pic7,350,230,(w/4)-10,h/4);				//draw empty start button
		if(cooleffect == true){
		ctx.globalAlpha = 0+cooleffectcounter;
		cooleffectcounter+=0.03;
		ctx.drawImage(pic6,350,230,(w/4)-10,h/4);
			if(cooleffectcounter >1){				
			startgame = true;
			}
		}
		if(startgame ==true){			//starts my game
		timer=200;
		timerstart= true;
		test12 = true;
		num1=0;
		num2=0;
		num20=0;
		num21=0;
		startgame = false;
		cooleffect = false;


		}
		ctx.globalAlpha = 1;
		//////////////////////////////////
		///////Control menu
		//////////////////////////////////
		
		
		ctx.fillStyle = 'white';			
		ctx.fillText('Control Menu',(w/2)+110,40);	

		ctx.fillStyle = 'white';			
		ctx.fillText('Left Paddle Controls:',290,70);
		ctx.fillText('Up = w        Down = s ',410,70);

		ctx.fillStyle = 'white';			
		ctx.fillText('Right Paddle Controls:',290,90);
		ctx.fillText('Up = numpad 8        Down = numpad5 ',410,90);

		ctx.fillStyle = 'white';			
		ctx.fillText('Top Paddle Controls:',290,110);
		ctx.fillText('Left = comma(,)        Right = forward slash(/) ',410,110);

		ctx.fillStyle = 'white';			
		ctx.fillText('Bottom Paddle Controls:',290,130);
		ctx.fillText('Left = left arrow        Right = right arrow ',410,130);
	
		ctx.fillText('Pause Controls:',290,150);
		ctx.fillText('o = unpause        p = pause ',410,150);
		
		ctx.fillText('PowerButton Details:',290,180);
		ctx.fillText('Press the key "e" to slow down ball ',410,180);
		ctx.fillText('speeds  for x time',410,189);
		ctx.fillText('* * Only works fully in Multi Pong Ball',415,198);

		////////////////////////////////////////////////////////////
		
		
		ctx.fillStyle = 'white';			
		ctx.fillText("Ball Speed:", 40,100);		//ball speed button
		ctx.fillStyle = 'white';			
		ctx.fillText("Paddle Speed:", 40,130);		//paddle speed button
		ctx.fillStyle = 'white';			
		ctx.fillText("Computer Player(s):", 40,170);		//computer player 
		ctx.fillStyle = 'white';			
		ctx.fillText("Human Player(s):", 40,210);			//human player
		ctx.fillText("Ball Drag Effect:", 40,250);
		ctx.fillText("Water Level:", 40,290);
		ctx.fillText("Multi Pong:", 40,330);
		ctx.fillText("* * Multi Pong mode only works if the setting are set to one computerplayer and none human player", 50,350);
		
		/////////////////////////////
		//////////speed levels
		///////////////////////////////
		ctx.fillStyle = 'white';					
		ctx.fillText("Normal", 130,80);					
		ctx.fillStyle = 'white';			
		ctx.fillText("Crazy", 180,80);
		ctx.fillStyle = 'white';			
		ctx.fillText("Insane", 225,110);
		

//////////////////////////////////////////////////////////////		
		ctx.fillStyle = 'white';			///////  draws Computer player options
		ctx.fillText("1", 143,157);
		
		ctx.fillStyle = 'white';			
		ctx.fillText("2", 190,157);
		
		ctx.fillStyle = 'white';			
		ctx.fillText("3", 237,157);
		
			
		ctx.fillStyle = 'white';			
		ctx.fillText("None", 263,157);
	
	/////////////////////////////////////////////////	
		ctx.fillStyle = 'white';			/////// draws Human player options
		ctx.fillText("1", 143,195);
		
		ctx.fillStyle = 'white';			
		ctx.fillText("2", 190,195);
		
		ctx.fillStyle = 'white';			
		ctx.fillText("3", 237,195);
		
		ctx.fillStyle = 'white';			
		ctx.fillText("None", 263,195);
		/////////////////////////////////////////
											////// draws	Ball Drag effect	
			ctx.fillStyle = 'white';			
		ctx.fillText("On", 140,230);
		
		ctx.fillStyle = 'white';			
		ctx.fillText("Off", 187,230);								
		
	//////////////////////////////////////////////////////


		


	
		ctx.drawImage(pic2,140,90,13,13);		//Ball speed
		ctx.drawImage(pic2,187,90,13,13);
		
		
		ctx.drawImage(pic2,140,120,13,13);		//Paddle speed
		ctx.drawImage(pic2,187,120,13,13);
		ctx.drawImage(pic2,233,120,13,13);
		
		ctx.drawImage(pic2,140,165,13,13);		//Computer player(s)
		ctx.drawImage(pic2,187,165,13,13);
		ctx.drawImage(pic2,233,165,13,13);
		
		ctx.drawImage(pic2,140,200,13,13);		//Human player(s)
		ctx.drawImage(pic2,187,200,13,13);
		ctx.drawImage(pic2,233,200,13,13);
		////////////////////////////////////////////
		ctx.drawImage(pic2,140,240,13,13);		//Ball Drag effect(s)
		ctx.drawImage(pic2,187,240,13,13);
		/////////////////////////////////////// 	
		ctx.drawImage(pic2,269,165,13,13);		//none col.
		ctx.drawImage(pic2,269,200,13,13);
		/////////////////////////////////////////////
		//////////////////////////////////////////////
		ctx.drawImage(pic2,140,280,13,13);		//water level
		ctx.drawImage(pic2,187,280,13,13);		
		////////////////////////////////////////////////
		ctx.drawImage(pic2,140,322,13,13);		//Multi Pong level
		ctx.drawImage(pic2,187,322,13,13);		
		/////////////////////////////////////////////////
		
		
	/////////////////////////////////////////////////	
	////////////draws blue dot
	//////////////////////////////////////////
		if(nonetop == true){
		ctx.drawImage(pic3,268,167,w/40,h/38);			//draw blue dot on none top button
		}
		if(nonebottom == true){
		ctx.drawImage(pic3,268,202,w/40,h/38);			////draw blue dot on bottom button
		}
		
		////////////////////////////////////////////
		
		if(paddlespeedleft == true){
			ctx.drawImage(pic3,139,122,w/40,h/38);			//draw blue dot on normal speed
		}
		if(paddlespeedmiddle == true){
		ctx.drawImage(pic3,186,122,w/40,h/38);				//draw blue dot on crazy speed	
		}
		if(paddlespeedright == true){	
		ctx.drawImage(pic3,232,122,w/40,h/38);				////draw blue dot on insane speed
		}
		
		
		if(leftblue == true){
		ctx.drawImage(pic3,139,92,w/40,h/38);		//draw blue dot on normal ball speed
		}
		if(middleblue == true){
		ctx.drawImage(pic3,186,92,w/40,h/38);			//draw blue dot on crazy b
		}
		

		if(computerplayerleftblue == true){
			ctx.drawImage(pic3,139,167,w/40,h/38);		//draw blue dot on 1 computer player
		}if(computerplayermiddleblue == true){
			ctx.drawImage(pic3,186,167,w/40,h/38);		//draw blue dot on 2 computer player
		}	
		if(computerplayerrightblue == true){	
			ctx.drawImage(pic3,232,167,w/40,h/38);		//draw blue dot on 3 computer player
		}
		

	if(humanplayerleft == true){
	ctx.drawImage(pic3,139,202,w/40,h/38);			//draw blue dot on 1 human player
	}
	if(humanplayermiddle == true){
	ctx.drawImage(pic3,186,202,w/40,h/38);			//draw blue dot on 2 human player
	}
	if(humanplayerright == true){
	ctx.drawImage(pic3,232,202,w/40,h/38);				//draw blue dot on 3 human player
	}
	
	if(offbutton ==true){
	ctx.drawImage(pic3,186,242,w/40,h/38);					//draw blue dot on ball drag effect on
	}
	if(onbutton ==true){
	ctx.drawImage(pic3,139,242,w/40,h/38);					//draw blue dot on ball drag effect off
	}
	if(wateroff == true ){
	ctx.drawImage(pic3,186,282,w/40,h/38);	
	}
	if(wateron == true ){
	ctx.drawImage(pic3,139,282,w/40,h/38);	
	}

if(multipongon == true){
ctx.drawImage(pic3,139,324,w/40,h/38);
}
if(multipongoff == true){
	ctx.drawImage(pic3,186,324,w/40,h/38);
}

	}
}
///////////////////////////////////////////////////


//////////////////////
////Tells which way to create ripple effect of ball
////////////////////////
if(onbutton ==true){
if(test3 ==true){					//if ball move left
Bdx =((w/2)+test2)+5;
Bdy = ((h/2)+test8);
}	
if(test4 ==true){					//if ball move right
Bdx =((w/2)+test2)-5;
Bdy = ((h/2)+test8);
}

if(test7 ==true){						//if ball move bottom left
Bdx =((w/2)+test2)-5;
Bdy = ((h/2)+test8)+5;
}

if(test9 ==true){					//if ball move  top left
Bdx =((w/2)+test2)-5;
Bdy = ((h/2)+test8)-5;
}

if(test10 ==true){						//if ball move top right
Bdx =((w/2)+test2)+5;
Bdy = ((h/2)+test8)-5;
}

if(test11 ==true){				//if ball move bottom right
Bdx =((w/2)+test2)+5;
Bdy = ((h/2)+test8)+5;
}

////////////////////////////////
//////Draws my ripples effect randomly behind my ball
///////////////////////////////

ctx.globalAlpha = 1;
ballflamemove = (Math.random()*2-0.4);
var ballflamemove1 =0;
var random = 0;
ballflamemove1 =(Math.random()*10);
if(ballflamemove1 > 5){
random = -1;
}
if(ballflamemove1 < 5){
random = +1;
}

////////////////////////////
//////draws ripple effect with colour change depending on which direction the ball is moving
/////////////////////////
if(test3 ==true ){
for(i = 0; i < 5; i++){
ctx.globalAlpha =(Math.random()*3);
/////////////////////////////
ctx.beginPath();
if(i < 2){ctx.fillStyle = '#BC00FF'}		//purple
else{ctx.fillStyle = '#BC00FF'}
ctx.arc(Bdx+(6*i), (Bdy+4)+(random*(i*(ballflamemove))), 5, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
/////////////////////////////
//ctx.drawImage(pic1,Bdx+(6*i),Bdy,w/17-(4*i),h/17); //draws the ball, makes it move
}
}
if(test4 ==true ){
for(i = 0; i < 5; i++){
ctx.globalAlpha = (Math.random()*3);
/////////////////////////////
ctx.beginPath();
if(i < 2){ctx.fillStyle = '#1A00FF'}		//blue
else{ctx.fillStyle = '#1A00FF'}
ctx.arc(Bdx-(6*i), Bdy+4+(random*(i*(ballflamemove))), 5, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
/////////////////////////////
//ctx.drawImage(pic1,Bdx-(6*i),Bdy,w/17-(4*i),h/17); //draws the ball, makes it move
}
}

if(test7 ==true ){
for(i = 0; i < 5; i++){
ctx.globalAlpha = (Math.random()*3);
///////////////////////////////////////////
ctx.beginPath();
if(i < 2){ctx.fillStyle = '#FFF700'}		//yellow
else{ctx.fillStyle = '#FFF700'}
ctx.arc(Bdx-(6*i), Bdy+(6*i)+8+(random*(i*(ballflamemove))), 5, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
//////////////////////////////////////
//ctx.drawImage(pic1,Bdx-(6*i),Bdy+(6*i),w/17-(4*i),h/17); //draws the ball, makes it move
}
}
if(test9 ==true ){
for(i = 0; i < 5; i++){
ctx.globalAlpha = (Math.random()*3);
///////////////////////////////////////////
ctx.beginPath();
if(i < 2){ctx.fillStyle = '#FF0000'}	//red
else{ctx.fillStyle = '#FF0000'}
ctx.arc(Bdx-(6*i), Bdy-(6*i)+(random*(i*(ballflamemove))), 5, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
//////////////////////////////////////
//ctx.drawImage(pic1,Bdx-(6*i),Bdy-(6*i),w/17-(4*i),h/17); //draws the ball, makes it move
}
}
if(test10 ==true ){
for(i = 0; i < 5; i++){
ctx.globalAlpha = (Math.random()*3);
///////////////////////////////////////////
ctx.beginPath();
if(i < 2){ctx.fillStyle = '#6FFF00'}		//green
else{ctx.fillStyle = '#6FFF00'}
ctx.arc(Bdx+(6*i), Bdy-(6*i)+8+(random*(i*(ballflamemove))), 5, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
//////////////////////////////////////
//ctx.drawImage(pic1,Bdx+(6*i),Bdy-(6*i),w/17-(4*i),h/17); //draws the ball, makes it move
}
}
if(test11 ==true ){
for(i = 0; i < 5; i++){
ctx.globalAlpha = (Math.random()*3);
///////////////////////////////////////////
ctx.beginPath();
if(i < 2){ctx.fillStyle = '#FF00EF'}		//pink
else{ctx.fillStyle = '#FF00EF'}
ctx.arc(Bdx+(6*i), Bdy+(6*i)+(random*(i*(ballflamemove))), 5, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
//////////////////////////////////////
//ctx.drawImage(pic1,Bdx+(6*i),Bdy+(6*i),w/17-(4*i),h/17); //draws the ball, makes it move
}
}
ctx.globalAlpha = 1;
ctx.fillStyle = 'white';
}
/////////////////////////////////////
if (testpausegame == true){

/////////////////////////////////////////////
if(gameover == false){
//////////////////////////////////////////////////////////////
if(test12 == true){			//starts game on start button pressed
/////////////////////////////////////////////////////////////	


if( nonebottom == true){
	if(promptstopper1 == true){
namefinder = window.prompt('Please pick a name');	//allows name to be placed in
}
ctx.fillStyle='red';
namecopy = namefinder;
ctx.fillText(namecopy,10,30);
if(computerplayerleftblue == true){
ctx.fillText("Computer Player 1",495,30);
}
if(computerplayermiddleblue == true){
ctx.fillText("Computer Player 1",(w/2)-40,7);
ctx.fillText("Computer Player 2",495,30);
}
if(computerplayerrightblue == true){
ctx.fillText("Computer Player 1",(w/2)-37,7);
ctx.fillText("Computer Player 2",495,30);
ctx.fillText("Computer Player 3",(w/2)-40,383);
}
promptstopper1=false; 
ctx.fillStyle = 'white'
}

if (computerplayermiddleblue == true && humanplayerleft == true) {
if(promptstopper1 == true){
namefinder = window.prompt('Please pick a name left player');	//allows name to be placed in
}
if(promptstopper == true){
namefinder2 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
ctx.fillStyle='red';
namecopy = namefinder;
ctx.fillText(namecopy,10,30);
ctx.fillText(namefinder2,495,30);
ctx.fillText("Computer Player 1",(w/2)-37,7);
ctx.fillText("Computer Player 3",(w/2)-40,383);
promptstopper1=false; 
promptstopper = false;
ctx.fillStyle = 'white'

};

if (humanplayerleft == true && nonetop == true) {
if(promptstopper1 == true){
namefinder = window.prompt('Please pick a name left player');	//allows name to be placed in
}
if(promptstopper == true){
namefinder2 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
ctx.fillStyle='red';
namecopy = namefinder;
ctx.fillText(namecopy,10,30);
ctx.fillText(namefinder2,520,30);

promptstopper1=false; 
promptstopper = false;
ctx.fillStyle = 'white'
};

if (computerplayerleftblue == true && humanplayerleft == true) {

if(promptstopper1 == true){
namefinder = window.prompt('Please pick a name left player');	//allows name to be placed in
}
if(promptstopper == true){
namefinder2 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
ctx.fillStyle='red';
namecopy = namefinder;
ctx.fillText(namecopy,10,30);
ctx.fillText(namefinder2,520,30);
ctx.fillText("Computer Player 1",(w/2)-37,7);
promptstopper1=false; 
promptstopper = false;
ctx.fillStyle = 'white'


};

if (computerplayerleftblue == true && humanplayermiddle == true) {
if(promptstopper1 == true){
namefinder = window.prompt('Please pick a name left player');	//allows name to be placed in
}
if(promptstopper2 == true){
namefinder2 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
if(promptstopper == true){
namefinder1 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
ctx.fillStyle='red';
namecopy = namefinder;
ctx.fillText(namecopy,10,30);
ctx.fillText(namefinder2,520,30);
ctx.fillText("Computer Player 1",(w/2)-37,7);
ctx.fillText(namefinder1,(w/2)-40,383);
promptstopper1=false; 
promptstopper = false;
promptstopper2 = false;

ctx.fillStyle = 'white'

};

if (humanplayerright == true && nonetop == true) {

if(promptstopper1 == true){
namefinder = window.prompt('Please pick a name left player');	//allows name to be placed in
}
if(promptstopper2 == true){
namefinder2 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
if(promptstopper == true){
namefinder1 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
if(promptstopper3 == true){
namefinder3 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
ctx.fillStyle='red';
namecopy = namefinder;
ctx.fillText(namecopy,10,30);
ctx.fillText(namefinder2,520,30);
ctx.fillText(namefinder3,(w/2)-37,7);
ctx.fillText(namefinder1,(w/2)-40,383);
promptstopper1=false; 
promptstopper = false;
promptstopper2 = false;
promptstopper3 = false;

ctx.fillStyle = 'white'

};

if (nonetop == true && humanplayermiddle == true) {
	if(promptstopper1 == true){
namefinder = window.prompt('Please pick a name left player');	//allows name to be placed in
}
if(promptstopper2 == true){
namefinder2 = window.prompt('Please pick a name right player');	//allows name to be placed in
}
if(promptstopper == true){
namefinder1 = window.prompt('Please pick a name right player');	//allows name to be placed in
}

ctx.fillStyle='red';
namecopy = namefinder;
ctx.fillText(namecopy,10,30);
ctx.fillText(namefinder2,520,30);

ctx.fillText(namefinder1,(w/2)-40,383);
promptstopper1=false; 
promptstopper = false;
promptstopper2 = false;


ctx.fillStyle = 'white'
};


picArray[7].play();	
picArray[7].volume='0.6';










if(multipongoff == true){
ctx.drawImage(ballarray[0],ballx,bally,w/17,h/17); //draws the ball, makes it move
}


//////////////////////////////////////////////////////////////////////
if(multipongon == true){



ctx.fillStyle='white';

///////////////////////////////////
///////////// Powerup Control
/////////////////////////////////

ctx.fillStyle='red';
ctx.beginPath();
if (alphaon == true) {
ctx.globalAlpha=1;	
};
if (alphaon1 == true) {
ctx.globalAlpha=0.1;		
};
ctx.arc((w/2)+5, h/2, 15, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();

ctx.fillStyle='white';
ctx.fillText(percentage,(w/2),(h/2)+3);
ctx.fillText("%",(w/2)-10,(h/2)+3);

if (percentage < 100) {
	percentage+=0.5;
	resetbutton = true;
	if (percentage >97 && resetbutton == true) {
		allballslow = false;
		alphaon = true;
	alphaon1 = false;
		ebuttonoff = false;
		resetbutton = false;
	};

};

///////////////////////////////////////

ctx.globalAlpha=1;

ballxanimation[0]  = ballx;
ballyanimation[0] = bally;
ballxanimation[1]  = ballx1;
ballyanimation[1] = bally1;
ballxanimation[2]  = ballx2;
ballyanimation[2] = bally2;
ballxanimation[3]  = ballx3;
ballyanimation[3] = bally3;


for(var i = 0; i < 4; i++){
ctx.drawImage(ballarray[i],ballxanimation[i],ballyanimation[i],w/17,h/17); //draws the ball, makes it move
}


/////////////////////////////////////////////////
/////// ball number one
//////////////////////////////////////////////

if(test2 < -100 && ballrelease1 == true){
ballonego = true;
ballrelease1 =false;
}
if (allballslow == false) {
if(ballonego == true){		//top right
ballup1+=4;
ballbottom1 -=5;
}
if(balltwogo == true){		//top left
ballup1-=4;
ballbottom1 -=5; 
}
if(ballthreego == true){		//bottom right
ballup1+=4;
ballbottom1 +=5; 
}
if(ballfourgo == true){		//bottom left
ballup1-=4;
ballbottom1 +=5; 
}
}
if (allballslow == true) {
if(ballonego == true){		//top right
ballup1+=1;
ballbottom1 -=2;
}
if(balltwogo == true){		//top left
ballup1-=1;
ballbottom1 -=2; 
}
if(ballthreego == true){		//bottom right
ballup1+=1;
ballbottom1 +=2; 
}
if(ballfourgo == true){		//bottom left
ballup1-=1;
ballbottom1 +=2; 
}

};
if(ballbottom1 < -182  ){
	if(ballonego == true){
		ballthreego = true;
		ballonego = false;
	}
	if(balltwogo == true){
		ballfourgo = true;
		balltwogo = false;
	}
}
if(ballbottom1 > 172){
	if(ballthreego == true){
	ballonego = true;	
	ballthreego = false;
	}
	if(ballfourgo == true){
	balltwogo = true;	
	ballfourgo = false;
	}
}


if(ballup1 < -303){
ballbottom1 = 0;
ballup1 = 0;
ballonego = false;
balltwogo = false;
ballfourgo = false;	
num2+=1;
ballthreego = true;
}
if(ballup1 > 298){
ballbottom1 = 0;
ballup1 = 0;
num1+=1;
ballonego = false;
balltwogo = false;
ballfourgo = false;	
ballthreego = true;
}

if(bally1 > rightpaddlemove && bally1 < rightpaddlexpoint && ballx1 > 569){		
	picArray[1].play();	
	
	if(ballonego == true){
	balltwogo = true;
	ballonego = false;
	}
	if(ballthreego == true){
	ballfourgo = true;	
	ballthreego = false;
	}
		

}
if(ballx1 > ballx && ballx2&& ballx3){
if(bally1 < rightpaddlemove) {	// if ball above right, makes paddle move up
	if(leftblue == true){
		rightfollow-=ballspeedchanger;
		
	}
	if (middleblue == true) {
		rightfollow-=ballspeedchanger;
	
	}
}
if(bally1 > rightpaddlexpoint){		// if ball above below, makes paddle move down	
	if(leftblue == true){
		rightfollow+=ballspeedchanger;
	}
	if (middleblue == true) {
		rightfollow+=ballspeedchanger;
	}
}
}


if(bally1 > paddleytop-10  && bally1 < paddleybottom+10 && ballx1  <21){			//hits top of paddle		
	picArray[0].play();
	
	if(ballfourgo == true){
	ballthreego = true;
	ballfourgo = false;	
	}
	if(balltwogo == true){
	ballonego = true;
	balltwogo = false;	
	}
	
		
	
}


///////////////////////////////////////
//////// number two
////////////////////////////////

if(test2 < -200 && ballrelease2 == true){
ballspeed2 = true;
ballrelease2 =false;
}

if (allballslow == true) {
if (ballspeed1 == true) {			//top right
	ballup2+=1;
	ballbottom2-=2;
};
if (ballspeed2 == true) {			//top left
	ballup2-=1;
	ballbottom2-=2;
};
if (ballspeed3 == true) {			//bottom right
	ballup2+=1;
	ballbottom2+=2;
};
if (ballspeed4 == true) {			//bottom left
	ballup2-=1;
	ballbottom2+=2;
};	
};

if (allballslow == false) {
if (ballspeed1 == true) {			//top right
	ballup2+=4;
	ballbottom2-=5;
};
if (ballspeed2 == true) {			//top left
	ballup2-=4;
	ballbottom2-=5;
};
if (ballspeed3 == true) {			//bottom right
	ballup2+=4;
	ballbottom2+=5;
};
if (ballspeed4 == true) {			//bottom left
	ballup2-=4;
	ballbottom2+=5;
};
}

if(ballup2 < -303){			// if second multi ball hit left wall
ballbottom2 = 0;
ballup2 = 0;
ballspeed1 = true;
ballspeed2 = false;
ballspeed3 = false;	
num2+=1;
ballspeed4 = false;
}
if(ballup2 > 298){			// if second multi ball hit right wall
ballbottom2 = 0;
ballup2 = 0;
num1+=1;
ballspeed1 = false;
ballspeed2 = true;
ballspeed3 = false;	
ballspeed4 = false;
}


if(ballbottom2 < -182  ){		// if second multi ball hit top wall
	
		if (ballspeed2 == true) {
			ballspeed4 = true;
			ballspeed2 = false;
		};	
		if (ballspeed1 == true) {
			ballspeed3 = true;
			ballspeed1 = false;
		};


}
if(ballbottom2 > 172){			// if second multi ball hit bottom wall

	if(ballspeed3 == true){
		ballspeed1 = true;
		ballspeed3  = false;
	}	
	if (ballspeed4 == true) {
		ballspeed2 = true;
		ballspeed4 = false;
	};
	
}

if(bally2 > paddleytop-10  && bally2 < paddleybottom+10 && ballx2  <21){			//hits top of paddle		
	picArray[0].play();
	
	if (ballspeed4 == true) {
		ballspeed3 = true;
		ballspeed4 = false;
	};
	if (ballspeed2 == true) {
		ballspeed1 = true;
		ballspeed2 = false;
	};
	
		
	
}

if(ballx2 > ballx && ballx1&& ballx3){

if(bally2 < rightpaddlemove) {	// if ball above right, makes paddle move up
	if(leftblue == true){
		rightfollow-=ballspeedchanger;
		
	}
	if (middleblue == true) {
		rightfollow-=ballspeedchanger;
	
	}
}
if(bally2 > rightpaddlexpoint){		// if ball above below, makes paddle move down	
	if(leftblue == true){
		rightfollow+=ballspeedchanger;
	}
	if (middleblue == true) {
		rightfollow+=ballspeedchanger;
	}
}
}
if(bally2 > rightpaddlemove && bally2 < rightpaddlexpoint && ballx2 > 569){		
	picArray[1].play();	
	
	if(ballspeed1== true){
	ballspeed2 = true;
	ballspeed1 = false;
	}
	if(ballspeed3 == true){
	ballspeed4 = true;	
	ballspeed3 = false;
	}
		

}

////////////////////////////////////////////////////////
/////////////////////  ball number three
///////////////////////////////////////

if(test2 < -278 && ballrelease3 == true){
ballspeed7 = true;
ballrelease3 =false;
}

if (allballslow == false) {
if (ballspeed5 == true) {			//top right
	ballup3+=4;
	ballbottom3-=5;
};
if (ballspeed6 == true) {			//top left
	ballup3-=4;
	ballbottom3-=5;
};
if (ballspeed7 == true) {			//bottom right
	ballup3+=4;
	ballbottom3+=5;
};
if (ballspeed8 == true) {			//bottom left
	ballup3-=4;
	ballbottom3+=5;
};
}
if (allballslow == true) {
if (ballspeed5 == true) {			//top right
	ballup3+=1;
	ballbottom3-=2;
};
if (ballspeed6 == true) {			//top left
	ballup3-=1;
	ballbottom3-=2;
};
if (ballspeed7 == true) {			//bottom right
	ballup3+=1;
	ballbottom3+=2;
};
if (ballspeed8 == true) {			//bottom left
	ballup3-=1;
	ballbottom3+=2;
};

};

if(ballup3 < -303){			// if second multi ball hit left wall
ballbottom3 = 0;
ballup3 = 0;
ballspeed5 = true;
ballspeed6 = false;
ballspeed7 = true;	
num2+=1;
ballspeed8 = false;
}
if(ballup3 > 298){			// if second multi ball hit right wall
ballbottom3 = 0;
ballup3 = 0;
num1+=1;
ballspeed5 = false;
ballspeed6 = true;
ballspeed7 = false;	
ballspeed8 = false;
}


if(ballbottom3 < -182  ){		// if second multi ball hit top wall
	
		if (ballspeed6 == true) {
			ballspeed8 = true;
			ballspeed6 = false;
		};	
		if (ballspeed5 == true) {
			ballspeed7 = true;
			ballspeed5 = false;
		};


}
if(ballbottom3 > 172){			// if second multi ball hit bottom wall

	if(ballspeed7 == true){
		ballspeed5 = true;
		ballspeed7  = false;
	}	
	if (ballspeed8 == true) {
		ballspeed6 = true;
		ballspeed8 = false;
	};
	
}

if(bally3 > rightpaddlemove && bally3 < rightpaddlexpoint && ballx3 > 569){		
	picArray[1].play();	
	
	if(ballspeed5== true){
	ballspeed6 = true;
	ballspeed5 = false;
	}
	if(ballspeed7 == true){
	ballspeed8 = true;	
	ballspeed7 = false;
	}
		

}


if(bally3 > paddleytop-10  && bally3 < paddleybottom+10 && ballx3  <21){			//hits top of paddle		
	picArray[0].play();
	
	if (ballspeed8 == true) {
		ballspeed7 = true;
		ballspeed8 = false;
	};
	if (ballspeed6 == true) {
		ballspeed5 = true;
		ballspeed6 = false;
	};
	
}

if(ballx3 > ballx && ballx1&& ballx2){

if(bally3 < rightpaddlemove) {	// if ball above right, makes paddle move up
	if(leftblue == true){
		rightfollow-=ballspeedchanger;
		
	}
	if (middleblue == true) {
		rightfollow-=ballspeedchanger;
	
	}
}
if(bally3 > rightpaddlexpoint){		// if ball above below, makes paddle move down	
	if(leftblue == true){
		rightfollow+=ballspeedchanger;
	}
	if (middleblue == true) {
		rightfollow+=ballspeedchanger;
	}
}
}
////////////////////////////////////







if(ballx > ballx1 && ballx2 && ballx3){
if(bally < rightpaddlemove) {	// if ball above right, makes paddle move up
	if(leftblue == true){
		rightfollow-=ballspeedchanger;
		
	}
	if (middleblue == true) {
		rightfollow-=ballspeedchanger;
	
	}
}
if(bally > rightpaddlexpoint){		// if ball above below, makes paddle move down	
	if(leftblue == true){
		rightfollow+=ballspeedchanger;
	}
	if (middleblue == true) {
		rightfollow+=ballspeedchanger;
	}
}
}


//////////////////////////////////////

}				//end function of multi ball mode

///////////////////////////////////////////////////


/////////////////////
/////paddle hit ball
///////////////////////
	

if(multipongoff == true){
	
	
if(bally < rightpaddlemove) {	// if ball above right, makes paddle move up
	if(leftblue == true){
		rightfollow-=8;
		
	}
	if (middleblue == true) {
		rightfollow-=11;
	
	}
}
if(bally > rightpaddlexpoint){		// if ball above below, makes paddle move down	
	if(leftblue == true){
			rightfollow+=8;
	}
	if (middleblue == true) {
		rightfollow+=11;
	}
}


}



if(ballx < toppaddlex+5){
	if(leftblue == true){
		upfollow-=8;
	}
	if (middleblue == true) {
		upfollow-=11;
	}
}
if(ballx > toppaddlexpoint-7){
	if(leftblue == true){
		upfollow+=8;
	}
	if (middleblue == true) {
		upfollow+=14;
	}
}

if(ballx < bottompaddlex+7){
	if(leftblue == true){
		bottomfollow-=8;
	}
	if (middleblue == true) {
		bottomfollow-=11;
	}
}
if(ballx > bottompaddlexpoint-4){
	if(leftblue == true){
		bottomfollow+=8;
	}
	if (middleblue == true) {
		bottomfollow+=14;
	}
}



///////////////////////////////////////////////////////////////////
///////////////////////	Timer
////////////////////////////////////////////
	
	ctx.fillText(timer,291,20);

if(timerstart ==true){				// makes my timer start
	timer--;
}

if(timer == 0){					// if timer hits 'zero' , stop the game
timerstart = false;
gameover = true;

}
///////////////////////////////////////////////////


		
/////////////////////////////////////////////////////
////////////// If ball hits left paddle
/////////////////////////////////////////////////////


if(bally > paddleytop  && bally < paddleybottom - 20 && ballx  <21){			//hits top of paddle		
	picArray[0].play();	
	test4 = false;
	if(test3 == true){
	test7 = true;
	test3 = false;
	}

	if(test10==true){
	test9 = true;
	test10 =false;
	}
	if(test11 == true){
	test7 = true;
	test11 = false;
	}
	
}
if(bally > paddleytop + 20 && bally < paddleybottom  && ballx <21){			//hits bottom of paddle		
	picArray[0].play();	
	test4 = false;
	
	if(test10 ==true){
		test9=true;
		test10 = false;
		}
	if(test3 == true ){
	test9=true
	test3 = false;
}	
if(test11 == true){
test7 = true;
test11=false;
}
	
	
}
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//////////////////////// DIFFERENT COMBINATION OF HUMAN AND COMPUTER PLAYER(S) 
///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

if(computerplayerleftblue ==true && nonebottom ==true){							

if(bally > rightpaddlemove && bally < rightpaddlexpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	

}
}

///////////////////////                        ///////////////////////////////////
//////////Ball hits right paddle human and top paddle computer
//////////////////////////////////////////

if(computerplayerleftblue == true && humanplayerleft == true){

if(bally > rightpaddlehuman && bally < rightpaddlehumanxpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	}
}


if(ballx >  toppaddlex && ballx < toppaddlexpoint  && bally < 30 ){	
	picArray[2].play();		
	if(test7 == true){
		test9 = true;
		test7 = false;
	}else if(test11 ==true){
	test10 = true;
	test11= false;
	}

	

}
/////////////////////////////////////////
if(computerplayermiddleblue == true && nonebottom == true){
if(ballx >  toppaddlex && ballx < toppaddlexpoint  && bally < 30 ){	
	picArray[2].play();		
	if(test7 == true){
		test9 = true;
		test7 = false;
	}else if(test11 ==true){
	test10 = true;
	test11= false;
	}
}
if(bally > rightpaddlemove && bally < rightpaddlexpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	

}
}
////////////////////////////////////////
if (humanplayerleft == true && computerplayermiddleblue ==true){
if(bally > rightpaddlehuman && bally < rightpaddlehumanxpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	}
	if(ballx >  toppaddlex && ballx < toppaddlexpoint  && bally < 30 ){		
		picArray[2].play();	
	if(test7 == true){
		test9 = true;
		test7 = false;
	}else if(test11 ==true){
	test10 = true;
	test11= false;
	}
}
	if(ballx > bottompaddlex && ballx < bottompaddlexpoint && bally > 350){
		picArray[3].play();	
	if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
	}
}
////////////////////////////////////////////////////////

if(computerplayerleftblue ==true && humanplayermiddle ==true){
if(bally > rightpaddlehuman && bally < rightpaddlehumanxpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	}
	if(ballx >  toppaddlex && ballx < toppaddlexpoint  && bally < 30 ){		
		picArray[2].play();	
	if(test7 == true){
		test9 = true;
		test7 = false;
	}else if(test11 ==true){
	test10 = true;
	test11= false;
	}
}
	if(ballx > bottompaddlehumanx && ballx < bottompaddlehumanxpoint && bally > 350){
		picArray[3].play();	
	if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
	}
}
if(computerplayerrightblue ==true && nonebottom ==true){
if(ballx >  toppaddlex && ballx < toppaddlexpoint  && bally < 30 ){		
		picArray[2].play();	
	if(test7 == true){
		test9 = true;
		test7 = false;
	}else if(test11 ==true){
	test10 = true;
	test11= false;
	}
}
if(ballx > bottompaddlex && ballx < bottompaddlexpoint && bally > 350){
		picArray[3].play();	
	if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
	}
	if(bally > rightpaddlemove && bally < rightpaddlexpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	

}
}
if(nonetop ==true && humanplayerleft == true){
if(bally > rightpaddlehuman && bally < rightpaddlehumanxpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	}
}

if(nonetop ==true && humanplayermiddle == true){
if(bally > rightpaddlehuman && bally < rightpaddlehumanxpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	}
if(ballx > bottompaddlehumanx && ballx < bottompaddlehumanxpoint && bally > 350){
		picArray[3].play();	
	if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
	}
}
if(nonetop ==true && humanplayerright==true){
if(ballx > bottompaddlehumanx && ballx < bottompaddlehumanxpoint && bally > 350){
		picArray[3].play();	
	if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
	}
	if(bally > rightpaddlehuman && bally < rightpaddlehumanxpoint && ballx > 569){		
	picArray[1].play();	
	if(test9 ==true){
	test10 = true;
	test9 =false;
	}
	if(test7 ==true){
	test11 = true;
	test7 =false;
	}
	if(test4 == true){
	test3 = true;
	test4 = false;
	}
	}
	if(ballx >  toppaddlehumanx && ballx < toppaddlehumanpoint  && bally < 30 ){		
		picArray[2].play();	
	if(test7 == true){
		test9 = true;
		test7 = false;
	}else if(test11 ==true){
	test10 = true;
	test11= false;
	}
}

}

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

if (allballslow == true) {
if(test3 == true){				//moves ball left
	test2-=1;
}

	if(test4 == true){			//moves ball right
		test2+=1;
	}
if (test7 == true) {
		test2+=2;
		test8-=2;
};
if (test11== true) {
	test2-=2;
test8-=2;
};
if (test9 == true) {
	test2+=2;
	test8+=2;
};
if (test10 == true) {
	test2-=2;
	test8+=2;
};




};



if (allballslow == false) {	
if(test3 == true){				//moves ball left
	test2-=10;
}


////////////////////////////////////////////////////////
	if(test4 == true){			//moves ball right
		test2+=10;
	}


if(test7 == true){		//moves ball top right 
if(leftblue == true){
	if(wateranimationtopright == true){
		test2+=5;
		test8-=5;
	}

	if((bally + waterlevelchange) > (h/2)+waterlevelchange && waterstopper == true){
		wateranimationtopright = false;
	test2+=3;
	test8-=3;
	}else{wateranimationtopright = true}
}
if(middleblue == true){
if(wateranimationtopright == true){
		test2+=10;
		test8-=10;
	}
	if((bally + waterlevelchange) > (h/2)+waterlevelchange && waterstopper == true){
		wateranimationtopright = false;
	test2+=6;
	test8-=6;
	}else{wateranimationtopright = true}
}


}
if(test11 == true){	//moves ball top left
if(leftblue ==true){
if (wateranimationtopleft == true) {
test2-=5;
test8-=5;
}
	if((bally + waterlevelchange) > (h/2)+waterlevelchange&& waterstopper == true){
	wateranimationtopleft = false;
test2-=3;
test8-=3;
}else{wateranimationtopleft = true}
}
if(middleblue ==true){
	if (wateranimationtopleft == true) {
test2-=10;
test8-=10;
}
	if((bally + waterlevelchange) > (h/2)+waterlevelchange&& waterstopper == true){
	wateranimationtopleft = false;
test2-=6;
test8-=6;
}else{wateranimationtopleft = true}
}

}
if(test9 ==true){		//moves ball bottom right 

if(leftblue ==true){
	if (wateranimationbottomright == true) {
test2+=5;
test8+=5;
}
	if((bally + waterlevelchange) > (h/2)+waterlevelchange && waterstopper == true){
wateranimationbottomright = false;
test2+=3;
test8+=3;
}else{wateranimationbottomright = true}

}
if(middleblue ==true){
if(wateranimationbottomright == true){	
test2+=10;
test8+=10;
}
	if((bally + waterlevelchange) > (h/2)+waterlevelchange && waterstopper == true){
wateranimationbottomright = false;
test2+=6;
test8+=6;
}else{wateranimationbottomright = true}
}
}

if(test10 == true){		//moves ball bottom left
if(leftblue ==true){
	if(wateranimationbottomleft ==true){	
	test2-=5;
	test8+=5;
	}
	if((bally + waterlevelchange) > (h/2)+waterlevelchange&& waterstopper == true){
		wateranimationbottomleft = false;
		test2-=3;
		test8+=3;	
	}else{wateranimationbottomleft = true}
}
if(middleblue ==true){
if(wateranimationbottomleft ==true){	
	test2-=10;
	test8+=10;
	}
	if((bally + waterlevelchange) > (h/2)+waterlevelchange&& waterstopper == true){
		wateranimationbottomleft = false;
		test2-=6;
		test8+=6;	
	}else{wateranimationbottomleft = true}
}


}

}
	
//////////////////////////////////////////////////////


if(test2 < -300){			//checks if ball hits left wall	
	test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	test11=false;
	test13 = 0;
	test20=0;
	num2++;
		picArray[0].play();	
}
if(test2 > 295){		//checks if ball hits right wall
	test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	test11=false;
	num1++;
	test20=0;
		picArray[1].play();	
	test13 = 0;
}


if(computerplayerleftblue ==true && nonebottom ==true){

if(test8 > 174){		//checks if ball hits bottom wall
	gravity1 = 0;
picArray[3].play();	
if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
}

	if(test8 < -182){		//checks if ball hits top wall
		gravity1 = 0;
	picArray[2].play();	
		if(test7 == true){
			test9 = true;
			test7 = false;
	}
		if(test11 ==true){
			test10 = true;
			test11= false;
	}
     }
}

if (computerplayerleftblue == true && humanplayerleft == true){
if(test8 < -182){		//checks if ball hits top wall
	test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	test11=false;
		picArray[2].play();	
	num21++;
	test13 = 0;
     }
	 if(test8 > 172){
picArray[3].play();					 //checks if ball hits bottom wall
if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
}
}
if (computerplayermiddleblue == true && nonebottom == true){
if(test8 < -182){		//checks if ball hits top wall
	test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	num21++;
	test11=false;
picArray[2].play();	
	test13 = 0;
     }
if(test8 > 168){		//checks if ball hits bottom wall
picArray[3].play();	
if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
}
}
/////////////////////////////////////////
if(humanplayerleft == true && computerplayermiddleblue ==true){
if(test8 < -182){		//checks if ball hits top wall
	test8=0;
	picArray[2].play();	
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	num21++;
	test11=false;
	
	test13 = 0;
     }
if(test8 > 170){		//checks if ball hits bottom wall
test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	test11=false;
	picArray[3].play();	
	num20++;
	test13 = 0;
}
}
if(computerplayerleftblue ==true && humanplayermiddle ==true){
if(test8 > 170){		//checks if ball hits bottom wall
test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	test11=false;
	picArray[3].play();	
	num20++;
	test13 = 0;
}
if(test8 < -182){		//checks if ball hits top wall
	test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	picArray[2].play();	
	test10=false;
	test4=false;
	num21++;
	test11=false;
	test13 = 0;
     }
}
if(computerplayerrightblue ==true && nonebottom ==true){
if(test8 > 172){		//checks if ball hits bottom wall
test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	test11=false;
	num20++;
picArray[3].play();	
	test13 = 0;
}
if(test8 < -182){		//checks if ball hits top wall
	test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	num21++;
	test4=false;
	test11=false;
	picArray[2].play();	
	test13 = 0;
     }
}
if(nonetop ==true && humanplayerleft == true){
if(test8 > 162){		//checks if ball hits bottom wall
picArray[3].play();	
if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
}
if(test8 < -182){		//checks if ball hits top wall
picArray[2].play();	
		if(test7 == true){
			test9 = true;
			test7 = false;
	}
		if(test11 ==true){
			test10 = true;
			test11= false;
	}
     }
}
if(nonetop ==true && humanplayermiddle){
if(test8 > 172){		//checks if ball hits bottom wall
test8=0;
	test2=0;
	test7=false;
	test9=false;
	num20++;
	test3=true;
	picArray[3].play();	
	test10=false;
	test4=false;
	test11=false;
	
	test13 = 0;
}
if(test8 < -182){		//checks if ball hits top wall
picArray[2].play();	
		if(test7 == true){
			test9 = true;
			test7 = false;
	}
		if(test11 ==true){
			test10 = true;
			test11= false;
	}
     }
}
if(nonetop ==true && humanplayerright==true){
if(test8 > 172){		//checks if ball hits bottom wall
test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	picArray[3].play();	
	num20++;
	test10=false;
	test4=false;
	test11=false;

	test13 = 0;
}
if(test8 < -182){		//checks if ball hits top wall
	test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	num21++;
	test10=false;
	picArray[2].play();	
	test4=false;
	test11=false;
	
	test13 = 0;
     }
}
if(nonetop ==true && nonebottom ==true){
if(test8 < -182){		//checks if ball hits top wall
picArray[2].play();	
		if(test7 == true){
			test9 = true;
			test7 = false;
	}
		if(test11 ==true){
			test10 = true;
			test11= false;
	}
     }
	 if(test8 > 162){		//checks if ball hits bottom wall
	 picArray[3].play();	
if(test10 == true){
test11 = true;
test10 = false;
}
if(test9 ==true){
test7 = true;
test9 = false;
}
}

}


if(test8 < -182 || test8 > 172 || test2 < -300||test2 > 295 ){
waterparticle6 = 0;
waterparticle4 = 0;
waterparticle = 0;
waterparticle1 = 0;
waterparticle2 = 0;
waterparticle3 = 0;
waterparticle8 = 0;
waterparticle7 = 0;
waterparticle9 = 0;	
}

		
////////////////////////////
//////////////////////////////////
//////////Paddle Control
/////////////////////////////

if(test1 > 150){							//stop left paddle to escape bottom side of canvas
	test5 = false;
	paddledown = false;
}else if(test1 < 150){
	test5 = true;
}	
if(test1 < -160){					//stop left paddle to escape top side of canvas
	paddleup = false;
	test6 = false;
} else if(test1 > -160){
	test6 = true;
	
}	

if(test15 > 132){
test14= false;
   rightpaddlestop1 =false;
  
}else if(test15 < 131){
rightpaddlestop1 = true;
test14 = true;

}if(test15 < -125){
   rightpaddlestop =false;
   test14= false;
   
}else if(test15 > -124){
rightpaddlestop = true;
test14= true;

}
if(paddlebottomanimation < -255){
bottompaddlestop =false;
}else if(paddlebottomanimation > -254){
bottompaddlestop =true;
}
if(paddlebottomanimation > 255){
bottompaddlestop1 =false;
}else if(paddlebottomanimation < 254){
bottompaddlestop1 =true;
}



////////////////////////////////////////////////
/////////////////////Slow Ease stop
///////////////////////////////////////////////
if(paddleup ==true){
	if(paddlespeedleft ==true){
	test1-=6;
	}
	if(paddlespeedmiddle ==true ){
	test1-=12;
	}
	if(paddlespeedright ==true ){
	test1-=18;
	}
	num3++;
	if(num3 > 2){
	paddleup = false;
	num3=0;
	paddleslowmove1 = true;
	}
}
//////////////////////////////////////
if(paddleslowmove1 ==true){
test1-=2;
num4++;
	if(num4 > 8){
	paddleslowmove1 = false;
	num4 = 0;
	}
}

///////////////////////////////////
///////////////////////////////////////

if(paddleup ==true){
	test1-=12;
	num3++;
	if(num3 > 2){
	paddleup = false;
	num3=0;
	paddleslowmove1 = true;
	}
}
//////////////////////////////////////
if(paddleslowmove1 ==true){
test1-=2;
num4++;
	if(num4 > 8){
	paddleslowmove1 = false;
	num4 = 0;
	}
}

///////////////////////////////////
/////////////////
if(paddledown == true){
if(paddlespeedleft ==true){
	test1+=6;
	}
	if(paddlespeedmiddle ==true ){
	test1+=12;
	}
	if(paddlespeedright ==true ){
	test1+=18;
	}
num3++;
	if(num3 > 2){
	paddledown =false;
	paddleslowmove = true;
	num3 = 0;
	}
}
/////////////////////////////////
if(paddleslowmove ==true){
test1+=2;
num5++;
	if(num5 > 8){
	paddleslowmove = false;
	num5 = 0;
	}
}
////////////////////////////////
/////////////////////////////
/////right paddle ease stop
///////////////////////////
////////////////////////
if(rightup==true){
if(paddlespeedleft ==true){
	test15-=6;
	}
	if(paddlespeedmiddle ==true ){
	test15-=12;
	}
	if(paddlespeedright ==true ){
	test15-=18;
	}
	num6++;
	if(num6 > 2){
	rightup = false;
	paddleslowmove2 = true;
	num6=0;
	}
	

}
if(paddleslowmove2 == true){
test15-=2;
num7++;
	if(num7 > 8){
	paddleslowmove2 = false;
	num7 = 0;
	}
	}
/////////////////////////////
if(rightdown==true){
if(paddlespeedleft ==true){
	test15+=6;
	}
	if(paddlespeedmiddle ==true ){
	test15+=12;
	}
	if(paddlespeedright ==true ){
	test15+=18;
	}
	num8++;
	if(num8 > 2){
	rightdown = false;
	paddleslowmove3 = true;
	num8=0;
	}
	

}
if(paddleslowmove3 == true){
test15+=2;
num9++;
	if(num9 > 8){
	paddleslowmove3 = false;
	num9 = 0;
	}
	}


//////////////////////////////







//////////////////////////////////
}		// End function of start game 	
}



if(gameover == true){

picArray[5].volume='0'

ctx.fillStyle='white';
ctx.fillText("Gameover",100,50);
ctx.drawImage(pic5,200,90+pointanim,w/14,h/15);
ctx.fillStyle='white';
ctx.fillText("Home Menu",100,100);
ctx.fillStyle='white';
ctx.fillText("Replay",100,125);




if(pointanim > 24){
pointerstopper = false;
}else if(pointanim < 25){
pointerstopper = true;
}
if(pointanim < 1){
pointerstopper1 = false;
}else if(pointanim > -25){
pointerstopper1 = true;
}

}		//End function of 'Gameover'






}		// pausegame End function
if(controlmenu ==true){
		ctx.fillStyle = 'white';			
		ctx.fillText('Control Menu',(w/4)-30,40);	

		ctx.fillStyle = 'white';			
		ctx.fillText('Left Paddle Controls:',20,70);
		ctx.fillText('Up = w        Down = s ',140,70);

		ctx.fillStyle = 'white';			
		ctx.fillText('Right Paddle Controls:',20,90);
		ctx.fillText('Up = numpad 8        Down = numpad5 ',140,90);

		ctx.fillStyle = 'white';			
		ctx.fillText('Top Paddle Controls:',20,110);
		ctx.fillText('Left = comma(,)        Right = forward slash(/) ',140,110);

		ctx.fillStyle = 'white';			
		ctx.fillText('Bottom Paddle Controls:',20,130);
		ctx.fillText('Left = left arrow        Right = right arrow ',140,130);
	
		ctx.fillText('Pause Controls:',20,150);
		ctx.fillText('o = unpause        p = pause ',140,150);

}

if(homemenu == true){
test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	test11=false;
	test13 = 0;
	test20=0;

gameover = false;
test12 = false;
homemenu = false;
}
if(replay == true){
	test8=0;
	test2=0;
	test7=false;
	test9=false;
	test3=true;
	test10=false;
	test4=false;
	test11=false;
	test13 = 0;
	test20=0;
	timer=2000;
	timerstart= true;
	test12 = true;
	num1=0;
	num2=0;
	num20=0;
	num21=0;

gameover = false;
replay = false;
}


if(wateron == true){

////////////////////////////////////////////////
////////// water level control + water effect
//////////////////////////////////////////////
if(watertoggle == true){
waterlevelchange-=0.5;
}

if(waterlevelchange < - 30){
watertoggle = false;
watertoggle1 = true;

}

if(watertoggle1 == true){
waterlevelchange+=0.5;
}
if(waterlevelchange > 30){
watertoggle1 = false;
watertoggle = true;

}

ctx.fillRect(0,(h/2)+waterlevelchange,w,5);
ctx.globalAlpha=0.5;
ctx.fillStyle='blue';
ctx.fillRect(0,(h/2)+waterlevelchange,w,500);
ctx.globalAlpha=1;

////////////////////////////////////////////




	if((bally + waterlevelchange) > (h/2)+waterlevelchange){

		picArray[5].volume='1';
		picArray[5].play();


bubbley = bally;
bubblex = ballx;

waterparticle-=3;	
waterparticle3-=1;
waterparticle6-=4;

	
waterparticle1-=2;
waterparticle2-=0.5;
waterparticle4-=4;	

waterparticle7+=3;
waterparticle8=1;
waterparticle9+=4;	
				

				if (test10== true) {




ctx.beginPath();
ctx.fillStyle = '#7D7D7D'
ctx.globalAlpha=0.5;
ctx.arc((bubblex+5)+waterparticle9,bubbley+waterparticle6, 5, 0, Math.PI*2, true);  
ctx.closePath();
ctx.fill();	

ctx.beginPath();
ctx.fillStyle = '#7D7D7D'
ctx.globalAlpha=0.5;
ctx.arc((bubblex+7)+waterparticle7,(bubbley-2)+waterparticle1, 5, 0, Math.PI*2, true);  
ctx.closePath();
ctx.fill();	

ctx.beginPath();
ctx.fillStyle = '#7D7D7D'
ctx.globalAlpha=0.5;
ctx.arc((bubblex+9)+waterparticle8,(bubbley+2)+waterparticle2, 5, 0, Math.PI*2, true);  
ctx.closePath();
ctx.fill();	


if(waterparticle6 < -50){
waterparticle6 = 0;
waterparticle9 = 0;
}
if(waterparticle1 < -50){
waterparticle1 = 0;
waterparticle7 = 0;
}

if(waterparticle2 < -50){
waterparticle2 = 0;
waterparticle8 = 0;
}



				}


				if(test9 == true){

					

ctx.beginPath();
ctx.fillStyle = '#7D7D7D'
ctx.globalAlpha=0.5;
ctx.arc(bubblex+waterparticle4,bubbley+waterparticle6, 5, 0, Math.PI*2, true);  
ctx.closePath();
ctx.fill();	

ctx.beginPath();
ctx.fillStyle = '#7D7D7D'
ctx.globalAlpha=0.5;
ctx.arc((bubblex-2)+waterparticle,(bubbley-2)+waterparticle1, 5, 0, Math.PI*2, true);  
ctx.closePath();
ctx.fill();	

ctx.beginPath();
ctx.fillStyle = '#7D7D7D'
ctx.globalAlpha=0.5;
ctx.arc((bubblex+2)+waterparticle3,(bubbley+2)+waterparticle2, 5, 0, Math.PI*2, true);  
ctx.closePath();
ctx.fill();	


if(waterparticle6 < -50){
waterparticle6 = 0;
waterparticle4 = 0;
}
if(waterparticle < -50){
waterparticle = 0;
waterparticle1 = 0;
}
if(waterparticle2 < -50){
waterparticle2 = 0;
waterparticle3 = 0;
}



}

ctx.fillStyle='white';
ctx.globalAlpha=1;

}else{picArray[5].volume='0'}

}







}////////////////////////////////////////////////







	/////////////////////////////////////////////////////
	
	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		
	if(test12 == false){	
		if(mx > 350 && mx < 350+(w/4-10) && my > 230 && my < 230+(h/4) ){		//if click on screen game starts
		cooleffect = true;
		
		
		}
		
		ctx.drawImage(pic6,350,230,(w/4)-10,h/4);
		if(mx > 140 && mx < 153 && my > 90 && my < 103){
		leftblue = true;
		middleblue = false;
		//rightblue = false;
		}
		/////////////////////////////////////////////////////////////
		if(mx > 187 && mx < 200 && my > 90 && my < 103){
		leftblue = false;
		middleblue = true;
		//rightblue = false;
	}	
	
	
////////////////////////////////////////////////////////////////
		if(mx > 140 && mx < 153 && my > 120 && my < 133){
		paddlespeedleft = true;
		paddlespeedmiddle= false;
		paddlespeedright = false;
		}
			if(mx > 187 && mx < 200 && my > 120 && my < 133){
		paddlespeedleft = false;
		paddlespeedmiddle= true;
		paddlespeedright = false;
		}
			if(mx > 233 && mx < 246 && my > 120 && my < 133){
		paddlespeedleft = false;
		paddlespeedmiddle= false;
		paddlespeedright = true;
		}

			
////////////////////////////////////////////////////////////////////
		if(mx > 140 && mx < 153 &&  my > 165 && my < 178 ){
		computerplayerleftblue = true;
		computerplayermiddleblue = false;
		computerplayerrightblue = false;
		if(humanplayerright == true){
		humanplayerright = false;
		}
		if(humanplayerleft == true || humanplayermiddle == true || humanplayerright == true){
		nonebottom = false;
		}else{nonebottom = true;}
		nonetop = false;
		}
		if(mx > 187 && mx < 200  && my > 165 && my < 178){
		computerplayerleftblue = false;
		computerplayermiddleblue = true;
		computerplayerrightblue = false;
		multipongon = false;
		multipongoff = true;	
		if(humanplayermiddle ==true){
		humanplayermiddle = false;
		}
		if(humanplayerright == true){
		humanplayerright = false;
		}
if(humanplayerleft == true || humanplayermiddle == true || humanplayerright == true){
		nonebottom = false;
		}else{nonebottom = true;}
		
		
		if(humanplayermiddle ==true){
		humanplayermiddle = false;
		nonebottom =true;
		}
		nonetop = false;
		
		}	
		if(mx > 233 && mx < 246 && my  > 165 &&	my < 178 ){
		computerplayerleftblue = false;
		computerplayermiddleblue = false;
		computerplayerrightblue = true;
		multipongon = false;
		multipongoff = true;	
		
	if(humanplayerleft ==true){
	humanplayerleft =false;
	}
	if(humanplayermiddle == true){
	humanplayermiddle = false;
	}
	if(humanplayerright ==true){
	humanplayerright = false;
	}
		
		nonebottom = true;
		}		
		
	if(mx > 140 && mx < 153 &&  my > 200 && my < 213 ){
	 humanplayerleft = true;
	 humanplayermiddle = false;
	 humanplayerright = false;
	 multipongon = false;
		multipongoff = true;	
	  	if(computerplayerrightblue == true){
		computerplayerrightblue = false;
		}
		if(computerplayerrightblue == true || computerplayermiddleblue == true|| computerplayerleftblue == true){
		nonetop = false;
		}else{ nonetop = true;}
	 nonebottom = false;
	
	}
	if( mx > 187 && mx < 200 && my > 200 &&  my < 213  ){
	humanplayerleft = false;
	 humanplayermiddle = true;
	 humanplayerright = false;
	 multipongon = false;
		multipongoff = true;	
	if(computerplayermiddleblue == true){
	computerplayermiddleblue = false;
	}
	if(computerplayerrightblue == true){
		computerplayerrightblue = false;
		}
	if(computerplayerrightblue == true || computerplayermiddleblue == true|| computerplayerleftblue == true){
		nonetop = false;
		}else{ nonetop = true;}
	
		
	  nonebottom = false;
	}
	if(mx > 233 && mx < 246 && my > 200 && my < 213 ){
	humanplayerleft = false;
	 humanplayermiddle = false;
	 humanplayerright = true;
	 multipongon = false;
		multipongoff = true;	
	 if(computerplayerleftblue ==true){
	 computerplayerleftblue =false;
	 }
	 if(computerplayermiddleblue == true){
	 computerplayermiddleblue = false;
	 }
	 if(computerplayerrightblue == true){
	 computerplayerrightblue = false;
	 }
		nonetop = true;
	 	
	}
	if(mx > 269 && mx < 282 && my > 165 && my < 178 ){
	nonetop = true;
		computerplayerleftblue = false;
		computerplayermiddleblue = false;
		computerplayerrightblue = false;
		multipongon = false;
		multipongoff = true;	
		if(nonebottom == true){
			nonebottom = false;
			humanplayerleft = true;
		}
	}
	if(mx > 269 && mx < 282&& my > 200 && my < 213  ){
	nonebottom = true;
	humanplayerleft = false;
	 humanplayermiddle = false;
	 humanplayerright = false;
	 if(nonetop == true){
			nonetop = false;
			computerplayerleftblue = true;
		}
	 
	}
	if(humanplayerright == true){
	nonebottom = false;
	}
	if(computerplayerrightblue == true){
	nonetop = false;
	}
	if(mx > 186 &&  mx < (186+(w/40)) && my > 242 && my < (242+(h/38)) ){
	offbutton = true;
	onbutton = false;
	}
	if(mx > 139 &&  mx < (139+(w/40)) && my > 242 && my < (242+(h/38)) ){
	offbutton = false;
	onbutton = true;
	picArray[4].play();	
	}
	
	if(mx > 140 && mx < 154 && my > 280 && my < 294){
	wateron = true;
	wateroff = false;
	waterstopper = true; 
	}

	if(mx > 187 && mx < 201 && my > 280 && my < 294){
	wateron = false;
	wateroff = true;
	waterstopper  = false;
	multipongon = false;
		multipongoff = true;
	}
	
	if(mx > 140 && mx <153 && my > 322 && my < 335){
multipongon = true;
		multipongoff = false;	
computerplayerleftblue = true;		
computerplayermiddleblue = false;
computerplayerrightblue = false;
nonetop = false;
humanplayerleft = false;
humanplayermiddle = false;
humanplayerright = false;
nonebottom = true;
wateron = false;
	wateroff = true;
		}

	if(mx > 187 && mx <200 && my > 322 && my < 335){
	multipongon = false;
		multipongoff = true;		
	}	


	


	}

	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//o 79
	//r 82
	//e 69
	//1 49
	//w 87
	//s 83
	//z 90
	//2 50 
	//3 51
	//c 67
	//v 86
	//enter 13
	//common(,) 188
	//forward slash(/) 191
	//38 up arrow
	//40 down arrow	
	//37 left arrow
	//39 right arrow
	//104 numpad 8	(lock should be on for this to work)
	//101 numpad 5 (lock should be on for this to work)
	//27 escape(Esc)
	//////////////////////////////
	if(test12 == true){	
	///////////////////////

if (ebuttonoff == false) {
	if(key == 69){			// e- to start slow-m0 ball effect
	allballslow = true;
	percentage = 0;
	alphaon = false;
	alphaon1 = true;
	ebuttonoff = true;
	}
}



if(test5 == true){
	if(key == 83 ){				//s
		paddledown = true;
	}

} 
if(test6 == true){				// w
	if(key == 87 ){
		paddleup = true;
	}
}	
if(key == 188){					//move top paddle left (comma)
test16-=50;
}
if(key == 191){						//moves top paddle right(forwards slash)
test16+=50;
}


if (rightpaddlestop== true){				//numpad 8
if(key == 104){					

 rightup = true;			//makes right paddle move up
	
}
}
if(rightpaddlestop1 ==true){
if(key == 101){						//numpad 5
rightdown = true;
}
}
if(bottompaddlestop ==true){		//left arrow
if(key == 37){
paddlebottomanimation-=50;
}

}
if(bottompaddlestop1 == true){		//right arrow
if(key == 39){
paddlebottomanimation+=50;
}
}

/////////////////////////////////////////
if(key == 80){						// p button
testpausegame = false;
controlmenu = true;
}

if(key == 79){						// o button

testpausegame = true;
controlmenu = false;
}


//////////////////////		
}	
//////////////////////
if(gameover == true){
	if(pointerstopper == true){
		if(key == 83){				//s key

			if(gameover == true){
				pointanim+=25;
			}
		}
	}
	if(pointerstopper1 == true){
		if(key == 87){				//w key
			if(gameover == true){
				pointanim-=25;
			}
		}
	}
	if(key == 13){					//enter key
		if(pointanim  == 0){
				homemenu = true;
		}
		if(pointanim  > 24){
				replay = true;
		}
	}

}

if(key == 27){
		
	startgame = false;
gameover = false;
replay = false;
test12 = false;


}


	}, false);




})