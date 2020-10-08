var things = ["ENEMY SPAM", 
              "SOUND EFFECTS EVERYWHERE", 
              "BRING YOSHI TO GOAL", 
              "TECH LEVEL", 
              "PICK A DOOR / PIPE", 
              "1-1 REMAKE", 
              "COLLECT ALL COINS", 
              "MUSIC LEVEL", 
              "SOFTLOCK WITH NO WAY OF DYING", 
              "INIFITE FIRE FLOWER BOSS FIGHT", 
              "NO CHECKPOINTS (WITHOUT CLEAR CONDITION)", 
              "ENEMY SPAM (WITH A STAR)", 
              "GOOD LEVEL", 
              "BUILDER / SUPERBALL LEVEL", 
              "THEMED AFTER ANOTHER GAME", 
              "KAIZO BLOCKS", 
              "LEVEL CAN BE CHEESED", 
              "AUTO MARIO LEVEL", 
              "'FIRST LEVEL' IN TITLE", 
              "MEOWSER OR BOOM-BOOM", 
              "TITLE LEVEL", 
              "TERRIBLY NAMED LEVEL", 
              "KILLS MARIO AT THE START", 
              "ON / OFF BLOCKS"];
var usedNums = new Array(things.length);
			  
function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	console.log(usedNums)
	do {
		newNum = getNewNum();
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return things[Math.floor(Math.random() * things.length)];
}

function anotherCard() {
	usedNums = new Array(things.length);
	newCard();
}