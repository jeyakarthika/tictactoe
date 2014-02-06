/*---------------------------------------------------------------------------------

	Project Name: Tic Tac Toe
	Project Description: Tic Tac Toe Game
	File Name: action.js
	Author: Jeya Karthika
	Author URI: http://www.freshsqueaks.com
	Version: 0.1
	
----------------------------------------------------------------------------------*/

$(document).ready(function(){
	
	var activePlayer='player1';
	var oneCount = 0;
	var twoCount = 0;
	var clickCount = 0;
	paintBoard();

	$(".row div").click(function(){
		if ($(this).hasClass('player1') || $(this).hasClass('player2')) {
			setFeedback("Bummer! That Tile has already been filled!");
		} 
		else {
		    $(this).addClass(activePlayer);
		    boardStatus();
		};
	});

	function updateWinner(winner) {
		if (winner == 'player1') {
			oneCount++;
			$('#one').text(oneCount);
			setFeedback("Player 1 Wins!");
		} 
		else if (winner == 'player2') {
			twoCount++;
		    $('#two').text(twoCount);
		    setFeedback("Player 2 Wins!");
		} 
		else {
			oneCount++;
		    $('#one').text(oneCount);
	    	twoCount++;
		    $('#two').text(twoCount);
		    setFeedback("It's a Draw!");
		};	
	}

	function boardStatus() {
		clickCount++;
		if (declareWinner(activePlayer)) {
		    updateWinner(activePlayer);
	        paintBoard();
	    }
	    else if(clickCount == 9){
	    	updateWinner(" ");
			paintBoard();
	    }
	    else {
	         whichPlayer();
	    };
	}

	function declareWinner(player) { 
	    if (
	    ($("#topLeft").hasClass(player) && $("#topMid").hasClass(player) && 
	    $("#topRight").hasClass(player)) || ($("#midLeft").hasClass(player) && 
	    $("#midMid").hasClass(player) && $("#midRight").hasClass(player)) || 
	    ($("#bottomLeft").hasClass(player) && $("#bottomMid").hasClass(player) && 
	    $("#bottomRight").hasClass(player)) || ($("#topLeft").hasClass(player) && 
	    $("#midLeft").hasClass(player) && $("#bottomLeft").hasClass(player)) || 
	    ($("#topMid").hasClass(player) && $("#midMid").hasClass(player) && 
	    $("#bottomMid").hasClass(player)) || ($("#topRight").hasClass(player) && 
	    $("#midRight").hasClass(player) && $("#bottomRight").hasClass(player)) ||
	    ($("#topLeft").hasClass(player) && $("#midMid").hasClass(player) && 
	    $("#bottomRight").hasClass(player)) || ($("#topRight").hasClass(player) && 
	    $("#midMid").hasClass(player) && $("#bottomLeft").hasClass(player))
	    ) {
	        return true; 
	    } 
	    else {
	        return false; 
	    };
	}

	function paintBoard() {
		clickCount = 0;
	    $(".row>div").removeClass();
	    setFeedback("It's " + activePlayer + "'s turn");
	}

	function whichPlayer() {
	    activePlayer = (activePlayer === 'player1' ? 'player2' : 'player1'); 
	    setFeedback("It's " + activePlayer + "'s turn");
	}

	/*--- Set the feedback ---*/
	function setFeedback(feedback) {
		$('h3').text(feedback);
	}
});

