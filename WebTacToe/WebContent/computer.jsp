<!doctype html>
<html lang="en">

<head>
<meta charset="utf-8">

<link rel="icon" href="images/icon.png">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="css/style.css">
<title>Tic Tac Toe</title>
</head>
<body onload="takeUsername()">
	<div class="webtitle">Vick Tech Wow!</div>
	<a data-toggle="modal" data-target="#wonmsg" id="msgmodal"></a>
	<a data-toggle="modal" data-target="#usermodal" id="umodal"></a>
	<!--Message Modal -->
	<div class="modal fade" id="usermodal" tabindex="-1" role="dialog"
		aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalCenterTitle">Username</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<small id="usernamevalid"></small> <input type="text"
						class="form-control" minlength="5" maxlength="10"
						onkeyup="isUsernameAllowed()" id="username" placeholder="Username" />
					<small>Length of username must be between 5-10 characters
						and must be unique</small>
				</div>
				<div class="modal-footer">
					<button onclick="setUsername()" data-dismiss="modal"
						class="btn btn-success close">Play</button>
				</div>
			</div>
		</div>
	</div>
	<center>
		<a href="index.jsp">Exit</a>
	</center>
	<!--Message Modal -->
	<div class="modal fade" id="wonmsg" tabindex="-1" role="dialog"
		aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalCenterTitle">Result</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body" id="msgbox"></div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-dismiss="modal">Close</button>
					<button type="button" id="snbtn" class="btn btn-primary">Start
						New Game</button>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="maindiv">
			<table class="maintable table">
				<tr>
					<td class="gtd" id="1"></td>
					<td class="gtd" id="2"></td>
					<td class="gtd" id="3"></td>
				</tr>
				<tr>
					<td class="gtd" id="4"></td>
					<td class="gtd" id="5"></td>
					<td class="gtd" id="6"></td>
				</tr>
				<tr>
					<td class="gtd" id="7"></td>
					<td class="gtd" id="8"></td>
					<td class="gtd" id="9"></td>
				</tr>
			</table>
		</div>
	</div>
	<Script src="js/myjs.js"></Script>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
		integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
		integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
		integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
		crossorigin="anonymous"></script>
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
</body>
</html>