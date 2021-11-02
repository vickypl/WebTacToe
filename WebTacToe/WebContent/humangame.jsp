<!doctype html>
<%@page import="javax.websocket.Session"%>
<%@page import="java.util.HashMap"%>
<%@page import="com.webtactoe.sockets.GamePlaySocket"%>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="icon" href="images/icon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Tic Tac Toe</title>
</head>
<%
	HashMap<String, Session> gameroom = GamePlaySocket.getActiveSessions();
%>
<body onload="setMatchTitle()">
    <div class="webtitle"  id="goFullScreen">Vick Tech Wow!</div>
    <a data-toggle="modal" data-target="#wonmsgmdl" id="winmsgmodal"></a>
	<center>
		<a href="human.jsp"><button class="btn btn-dark" onclick="closeGameSocket()">Quit</button></a>
		<button class="btn btn-dark" onclick="getTotalScore()">Check Score</button>
		<button class="btn btn-dark" onclick="resetScore()">Reset Score</button>
	</center>
    <!--Message Modal -->
    <div class="modal fade" id="wonmsgmdl" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Result</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="winmsgbox">
                </div>
                <div id="counter"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" id="snbtn" class="btn btn-primary">Start New Game</button>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="maindiv">
    	<h4 id="vsvs" style="font-family: cursive;"></h4>
            <table class="maintable table">
                <tr>
                    <td class="gtd" id="11"></td>
                    <td class="gtd" id="22"></td>
                    <td class="gtd" id="33"></td>
                </tr>
                <tr>
                    <td class="gtd" id="44"></td>
                    <td class="gtd" id="55"></td>
                    <td class="gtd" id="66"></td>
                </tr>
                <tr>
                    <td class="gtd" id="77"></td>
                    <td class="gtd" id="88"></td>
                    <td class="gtd" id="99"></td>
                </tr>
            </table>
        </div>
    </div>
	<footer class="footer">
		<table style="margin: 0% auto;">
			<tr>
				<td style="padding: 20px; padding-left: 30px;">
					<h1>
						<a href="https://www.facebook.com/thevicky54"
							class="fa fa-facebook fa-lg text-dark"></a>
					</h1>
				</td>
				<td style="padding: 20px; padding-left: 30px;"><i
					class="fa fa-f"></i>
					<h1>
						<a href="https://www.linkedin.com/in/vicky-pl/"
							class="fa fa-linkedin-square fa-lg text-dark"></a>
					</h1></td>
				<td style="padding: 20px; padding-left: 30px;">
					<h1>
						<a href="https://twitter.com/thevickypl"
							class="fa fa-twitter fa-lg text-dark"></a>
					</h1>
				</td>
				<td style="padding: 20px; padding-left: 30px;">
					<h1>
						<a
							href="https://api.whatsapp.com/send?phone=+917828789845&text=Hellow!"
							class="fa fa-whatsapp fa-lg text-dark"></a>
					</h1>
				</td>
			</tr>
		</table>
		<div class="footer">
			<center>&copy; vicky542011@gmail.com</center>
		</div>
	</footer>
    <Script src="js/hgame.js"></Script>
 	<Script src="js/myjs.js"></Script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script type="text/javascript">
	
    var gameSocket;

	function verifyConnection() {
		if(gameSocket===undefined && gameSocket.readState===WebSocket.CLOSED) {
			gameSocket = new WebSocket("ws://localhost:8088/WebTacToe/playgame/"+getUsername());
		}
	}

	function openGameSocket() {
		 if(gameSocket!==undefined && gameSocket.readyState!==WebSocket.CLOSED) {
			 gameSocket = new WebSocket("ws://localhost:8088/WebTacToe/playgame/"+getUsername());
	            return;
	      }
		 gameSocket = new WebSocket("ws://localhost:8088/WebTacToe/playgame/"+getUsername());
		
		 gameSocket.onopen = function(event) {
			if(event.data===undefined) {
				return;
			}
		};
		
		gameSocket.onmessage = function(event) {
			if(event.data.length<5) {	
			
				var array = event.data.split("~");
				var symbol=array[0];
				var position=array[1];
				var dom = document.getElementById(position);
				dom.innerHTML=symbol;
				playerO.push(position);
				if(isPlayerTwoWins()) {
					informToPlayerOne();
				} 
				dom.style.pointerEvents = 'none';
			} else if (event.data.length>25) {
		    	gameRestartCounter();
				showResultMessage("<h3 style='color: green;'>"+getRequestCameFrom()+" Win!, "+event.data+"</h3>");
			} else {
				console.log(event.data);
			}
		};
		
		gameSocket.onerror = function(event) {
			console.log(event.data);
		};
		
		gameSocket.onclose = function(event) {
			console.log(event.data+" game socket close method");
		};
	}
	
	function sendInput(dataType, dataValue) {
		gameSocket.send(dataValue);
	}
       
	function closeGameSocket() {
	    if (connectSocket.readyState === WebSocket.OPEN) {
	    	connectSocket.close();
	    } else {
	    	 console.log("Socket is closed");
	    }
	}
	
	function sendSymbol(code) {
		var touser = getRequestCameFrom();
		var tosend = touser+"~"+getIdentitySymbol()+"~"+code;
		sendInput("Text", tosend);
		console.log("input sent");
	}
	
 	function informToPlayerOne() {
		var input=getRequestCameFrom()+"~You Loose the game..~Try! Again.";
		sendInput("Text", input);
	}
	
 	var count=4;
 	function decrementCount() {
 		var countshowbox = document.getElementById("counter");
 		if(count==1) {
			window.location.href="humangame.jsp"; 			
 			return;
 		}
 		count--;
 		countshowbox.innerHTML = "<center><span style='color: red;'>restart in: "+count+"sec</span></center>";
 		console.log("counter : "+count);
 	}
 	
 	function gameRestartCounter() {
 		setInterval(decrementCount, 1000);
 	}
 	
    var viewFullScreen = document.getElementById("goFullScreen");
    if (viewFullScreen) {
      viewFullScreen.addEventListener("click", function() {
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        }
      });
    }
    
    var x = document.getElementsByClassName("webtitile");
    
	$(document).ready(function () {
    	$(x).click();
		openGameSocket();
	});
    </script>
</body>
</html>