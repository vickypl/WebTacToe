
	function setMatchTitle() {
		var vsvs = document.getElementById("vsvs");
		var title = getUsername()+" V/s "+getRequestCameFrom();
		vsvs.innerHTML=title;
	}

	function isUsernameAllowed() {
		var usernamevalid = document.getElementById("usernamevalid");
		var uname = document.getElementById("username").value;
		if(uname.length>4) {
			usernamevalid.innerHTML="<span style='color: green;'>is Available</span>"
		}
	}

	//the one who send the request will have X symbol
	function setIdentitySymbolX() {		
		localStorage.setItem("symbol", "X");
	}
	
//the one who accept the request will have O symbol
	function setIdentitySymbolO() {		
		localStorage.setItem("symbol", "O");
	}

	function getIdentitySymbol() {
		return localStorage.getItem("symbol");
	}
	
	function setRequestCameFrom(name) {
		localStorage.setItem("reqCameFrom", name);
	}
	
	function getRequestCameFrom() {
		return localStorage.getItem("reqCameFrom");
	}

	function setRequestedToUser(name) {
		localStorage.setItem("sendto", name);
	}
	
	function getRequestedToUser() {
		 return localStorage.getItem("sendto");
	}

  	function showRequest(msg) {
		var showReq = document.getElementById("showrequest");
		showReq.innerHTML = msg;
		document.getElementById("reqmodalbtn").click();
	}

  	function resetUsername() {
  		 document.getElementById('umodal').click();
  	}
  	
     function takeUsername() {
    	    if(!getUsername()) {
    	        document.getElementById('umodal').click();
    	    }
    	}

    	function setUsername() {
    	    var username = document.getElementById("username").value;
    	    if(username.length>4 && username.length<11) {
    	    	username = username.toLowerCase();
    	    	window.localStorage.setItem('username', username);
    	    	window.location.href="human.jsp";
    	    } else {
    	    	takeUsername();
    	    }
    	}

    	function getUsername() {
    	    return window.localStorage.getItem('username');
    	}

/////++++++++++++++++Connection Socket+++++++++++/////////////////////////////
/////++++++++++++++++Connection \/ Socket+++++++++++/////////////////////////////
/////++++++++++++++++Connection Socket+++++++++++/////////////////////////////
/////++++++++++++++++Connection Socket+++++++++++/////////////////////////////

////


//+++++++++++++++++++++??????????????++++++++++++++++++++++++////////////////////////////
//+++++++++++++++++++++??????????????++++++++++++++++++++++++////////////////////////////
//+++++++++++++++++++++computer toe logic++++++++++++++++++++++++////////////////////////////
//+++++++++++++++++++++??????????????++++++++++++++++++++++++////////////////////////////
//+++++++++++++++++++++??????????????++++++++++++++++++++++++////////////////////////////
var id1 = document.getElementById("1");
var id2 = document.getElementById("2");
var id3 = document.getElementById("3");
var id4 = document.getElementById("4");
var id5 = document.getElementById("5");
var id6 = document.getElementById("6");
var id7 = document.getElementById("7");
var id8 = document.getElementById("8");
var id9 = document.getElementById("9");


//this will genrate random number from 1 to 9
function generateNumber() {
    var num = Math.floor(Math.random() * 9) + 1;
    return num;
}

function loadModal(msg) {
    var modalbtn = document.getElementById("msgmodal");
    var msgbox = document.getElementById("msgbox");
    msgbox.innerHTML = "<h1 style='color: green;'>"+getUsername()+",&nbsp;"+msg+"<h1>";
    modalbtn.click();
}

var userFilled = [];

$(id1).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id1.innerHTML="X";
    id1.style.pointerEvents = 'none';
    userFilled.push(1);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});
$(id2).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id2.innerHTML="X";
    id2.style.pointerEvents = 'none';
    userFilled.push(2);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});
$(id3).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id3.innerHTML="X";
    id3.style.pointerEvents = 'none';
    userFilled.push(3);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});
$(id4).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id4.innerHTML="X";
    id4.style.pointerEvents = 'none';
    userFilled.push(4);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});
$(id5).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id5.innerHTML="X";
    id5.style.pointerEvents = 'none';
    userFilled.push(5);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});
$(id6).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id6.innerHTML="X";
    id6.style.pointerEvents = 'none';
    userFilled.push(6);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});
$(id7).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id7.innerHTML="X";
    id7.style.pointerEvents = 'none';
    userFilled.push(7);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});
$(id8).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id8.innerHTML="X";
    id8.style.pointerEvents = 'none';
    userFilled.push(8);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});
$(id9).click(function () {
    if(isDrow()) {
        loadModal("Match Drow! Play Again!");
    }
    id9.innerHTML="X";
    id9.style.pointerEvents = 'none';
    userFilled.push(9);
    if(isPlayerWon()) {
        loadModal("Congratulations! You Won");
    }
    setTimeout(computerFill, 1500);
});

function isDrow() {
    if(userFilled.length>=4 && isPlayerWon()===false) {
        return true;
    }
    return false;
}

var computerFilled = [];

function computerFill() {
    var fillAt = generateNumber();
    switch(fillAt) {
        case 1:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                    turnBorderGreen(fillAt);
                    document.getElementById(fillAt).innerHTML="O";
                    document.getElementById(fillAt).style.pointerEvents = 'none';
                    computerFilled.push(fillAt);
                } else {
                    computerFill();
                }
          break;
        case 2:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                turnBorderGreen(fillAt);
                document.getElementById(fillAt).innerHTML="O";
                document.getElementById(fillAt).style.pointerEvents = 'none';
                computerFilled.push(fillAt);
            } else {
                computerFill();
            }
          break;
        case 3:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                turnBorderGreen(fillAt);
                document.getElementById(fillAt).innerHTML="O";
                document.getElementById(fillAt).style.pointerEvents = 'none';
                computerFilled.push(fillAt);
            } else {
                computerFill();
            }
          break;
        case 4:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                turnBorderGreen(fillAt);
                document.getElementById(fillAt).innerHTML="O";
                document.getElementById(fillAt).style.pointerEvents = 'none';
                computerFilled.push(fillAt);
            } else {
                computerFill();
            }
          break;
        case 5:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                turnBorderGreen(fillAt);
                document.getElementById(fillAt).innerHTML="O";
                document.getElementById(fillAt).style.pointerEvents = 'none';
                computerFilled.push(fillAt);
            } else {
                computerFill();
            }
          break;
        case 6:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                turnBorderGreen(fillAt);
                document.getElementById(fillAt).innerHTML="O";
                document.getElementById(fillAt).style.pointerEvents = 'none';
                computerFilled.push(fillAt);
            } else {
                computerFill();
            }
          break;
        case 7:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                turnBorderGreen(fillAt);
                document.getElementById(fillAt).innerHTML="O";
                document.getElementById(fillAt).style.pointerEvents = 'none';
                computerFilled.push(fillAt);
            } else {
                computerFill();
            }
          break;
        case 8:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                turnBorderGreen(fillAt);
                document.getElementById(fillAt).innerHTML="O";
                document.getElementById(fillAt).style.pointerEvents = 'none';
                computerFilled.push(fillAt);
            } else {
                computerFill();
            }
          break;
        case 8:
            if(userFilled.includes(fillAt)!==true && computerFilled.includes(fillAt)!==true) {
                turnBorderGreen(fillAt);
                document.getElementById(fillAt).innerHTML="O";
                document.getElementById(fillAt).style.pointerEvents = 'none';
                computerFilled.push(fillAt);
            } else {
                computerFill();
            }
          break;
        default:
            computerFill();
    }
    if(isComputerWon()) {
        loadModal("Computer Won! You Loss!");
    }
}


function isComputerWon() {
    if(computerFilled.includes(1) && computerFilled.includes(2) && computerFilled.includes(3)) {
        return true;
    } else if(computerFilled.includes(4) && computerFilled.includes(5) && computerFilled.includes(6)) {
        return true;
    } else if(computerFilled.includes(7) && computerFilled.includes(8) && computerFilled.includes(9)) {
        return true;
    } else if(computerFilled.includes(1) && computerFilled.includes(4) && computerFilled.includes(7)) {
        return true;
    } else if(computerFilled.includes(2) && computerFilled.includes(5) && computerFilled.includes(8)) {
        return true;
    } else if(computerFilled.includes(3) && computerFilled.includes(6) && computerFilled.includes(9)) {
        return true;
    } else if(computerFilled.includes(1) && computerFilled.includes(5) && computerFilled.includes(9)) {
        return true;
    } else if(computerFilled.includes(3) && computerFilled.includes(5) && computerFilled.includes(7)) {
        return true;
    } else {
        return false;
    }
}



function isPlayerWon() {
    if(userFilled.includes(1) && userFilled.includes(2) && userFilled.includes(3)) {
        return true;
    } else if(userFilled.includes(4) && userFilled.includes(5) && userFilled.includes(6)) {
        return true;
    } else if(userFilled.includes(7) && userFilled.includes(8) && userFilled.includes(9)) {
        return true;
    } else if(userFilled.includes(1) && userFilled.includes(4) && userFilled.includes(7)) {
        return true;
    } else if(userFilled.includes(2) && userFilled.includes(5) && userFilled.includes(8)) {
        return true;
    } else if(userFilled.includes(3) && userFilled.includes(6) && userFilled.includes(9)) {
        return true;
    } else if(userFilled.includes(1) && userFilled.includes(5) && userFilled.includes(9)) {
        return true;
    } else if(userFilled.includes(3) && userFilled.includes(5) && userFilled.includes(7)) {
        return true;
    } else {
        return false;
    }
}

// function computerFill() {
//     var fillAt = generateNumber();
//     while(userFilled.includes(fillAt)!==true) {
//         if(userFilled.includes(fillAt)===false) {            
//             setTimeout(turnBorderGreen(fillAt), 1000);
//             document.getElementById(fillAt).innerHTML="O";
//             document.getElementById(fillAt).style.pointerEvents = 'none';
//             userFilled.push(fillAt);
//             console.log(fillAt);
//             setTimeout(turnBorderBlack(fillAt), 8000);
//             break;
//         }
//         fillAt = generateNumber(); //genrating new until we get the empty positon
//         console.log("just gen: "+fillAt);
//     }
// }


function turnBorderBlack(fillAt) {
    document.getElementById(fillAt).style.borderColor = "black";
}

function turnBorderGreen(fillAt) {
    document.getElementById(fillAt).style.borderColor = "lime";
}

//this will reload the page to start a new game
var startbtn = document.getElementById("snbtn");
$(startbtn).click(function () {
    location.reload();
});


