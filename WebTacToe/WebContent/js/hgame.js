if(window.localStorage.getItem("playerScore")===undefined) {
	window.localStorage.setItem("playerScore", 0);
}

function resetScore() {
	window.localStorage.setItem("playerScore", 0);	
}

function increaseScore() {
	var x = window.localStorage.getItem("playerScore");
	x++;
	window.localStorage.setItem("playerScore", x);
}

function getScore() {
	return window.localStorage.getItem("playerScore");
}


function showResultMessage(content) {
	var msgpopupbtn = document.getElementById("winmsgmodal");
	var winmsgcontent = document.getElementById("winmsgbox");
	winmsgcontent.innerHTML=content;
	msgpopupbtn.click();
}


function getTotalScore() {
	var stmt="<h3 style='color: green'>Your Total Wins: "+getScore()+"<br><h3>";
	showResultMessage(stmt);
}


var playerX = [];
var playerO = [];

function isPlayerTwoWins() {
    if(playerO.includes(11) && userFilled.includes(22) && userFilled.includes(33)) {
        return true;
    } else if(playerO.includes(44) && playerO.includes(55) && playerO.includes(66)) {
        return true;
    } else if(playerO.includes(77) && playerO.includes(88) && playerO.includes(99)) {
        return true;
    } else if(playerO.includes(11) && playerO.includes(44) && playerO.includes(77)) {
        return true;
    } else if(playerO.includes(22) && playerO.includes(55) && playerO.includes(88)) {
        return true;
    } else if(playerO.includes(33) && playerO.includes(66) && playerO.includes(99)) {
        return true;
    } else if(playerO.includes(11) && playerO.includes(55) && playerO.includes(99)) {
        return true;
    } else if(playerO.includes(33) && playerO.includes(55) && playerO.includes(77)) {
        return true;
    } else {
        return false;
    }
}


function isPlayerOneWins() {
    if(playerX.includes(1) && playerX.includes(2) && playerX.includes(3)) {
        return true;
    } else if(playerX.includes(4) && playerX.includes(5) && playerX.includes(6)) {
        return true;
    } else if(playerX.includes(7) && playerX.includes(8) && playerX.includes(9)) {
        return true;
    } else if(playerX.includes(1) && playerX.includes(4) && playerX.includes(7)) {
        return true;
    } else if(playerX.includes(2) && playerX.includes(5) && playerX.includes(8)) {
        return true;
    } else if(playerX.includes(3) && playerX.includes(6) && playerX.includes(9)) {
        return true;
    } else if(playerX.includes(1) && playerX.includes(5) && playerX.includes(9)) {
        return true;
    } else if(playerX.includes(3) && playerX.includes(5) && playerX.includes(7)) {
        return true;
    } else {
        return false;
    }
}


function amPlayingWith() { //optional function didn't used
	alert(getRequestCameFrom());
}

function setSymbolAtPosition(position, symbol) {
	var pos = document.getElementById(position);
	pos.innerHTML=symbol;
	pos.style.pointerEvents = 'none';
}

var id11 = document.getElementById("11");
var id22 = document.getElementById("22");
var id33 = document.getElementById("33");
var id44 = document.getElementById("44");
var id55 = document.getElementById("55");
var id66 = document.getElementById("66");
var id77 = document.getElementById("77");
var id88 = document.getElementById("88");
var id99 = document.getElementById("99");

$(id11).click(function () {
    id11.innerHTML=getIdentitySymbol();
    id11.style.pointerEvents = 'none';
    playerX.push(1);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
    sendSymbol(11);
});

$(id22).click(function () {
    id22.innerHTML=getIdentitySymbol();
    id22.style.pointerEvents = 'none';
    playerX.push(2);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
    sendSymbol(22);
});

$(id33).click(function () {
	id33.innerHTML=getIdentitySymbol();
	id33.style.pointerEvents = 'none';
	playerX.push(3);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
	sendSymbol(33);
});

$(id44).click(function () {
	id44.innerHTML=getIdentitySymbol();
	id44.style.pointerEvents = 'none';
	playerX.push(4);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
	sendSymbol(44);
});

$(id55).click(function () {
	id55.innerHTML=getIdentitySymbol();
	id55.style.pointerEvents = 'none';
	playerX.push(5);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
	sendSymbol(55);
});

$(id66).click(function () {
	id66.innerHTML=getIdentitySymbol();
	id66.style.pointerEvents = 'none';
	playerX.push(6);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
	sendSymbol(66);
});

$(id77).click(function () {
	id77.innerHTML=getIdentitySymbol();
	id77.style.pointerEvents = 'none';
	playerX.push(7);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
	sendSymbol(77);
});

$(id88).click(function () {
	id88.innerHTML=getIdentitySymbol();
	id88.style.pointerEvents = 'none';
	playerX.push(8);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
	sendSymbol(88);
});

$(id99).click(function () {
	id99.innerHTML=getIdentitySymbol();
	id99.style.pointerEvents = 'none';
	playerX.push(9);
    if(isPlayerOneWins()) {
    	increaseScore();
    	gameRestartCounter();
    	showResultMessage("<h3 style='color: green;'>You Won the Match </h3>");
    	informToPlayerOne();
    }
	sendSymbol(99);
});