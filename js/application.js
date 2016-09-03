$(document).ready(function() {
	var game = new Game();

	populateBoard();

	$(this).keydown(function(event) {
	    switch(event.which) {
	    	case 38: // up
	    		moveBoard("up");
	        break;

	        case 40: // down
	        	moveBoard("down");
	        break;

	        case 39: // right
	        	moveBoard("right");
	        break;

	        case 37: // left
	        	moveBoard("left");
	        break;

	        default: 
	        return;
	    }
	    event.preventDefault();
	});

	function moveBoard(direction) {
		game.move(direction);

		populateBoard();
	}

	function populateBoard() {
		for (var i = 0; i <= game.boardString.length; i++) {
			$($('.card-space')[i]).find("i").html(game.boardString[i]);
		}
	}
});
