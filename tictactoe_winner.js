module.exports = {
	findWinner: function(placement) {

		function check(array) {
			return array.reduce(function(position, letter) {
				// Check for empty placements
				if (position === ' ') {
					return false;
				} else {
					// Set winner
					winner = array[0];
					// Set to false if equal
					return (position === letter) ? position:false;
				}
				// Compare with first item in array
			}) === array[0];
		}

		if (
			// Check rows
			check([placement[0], placement[1], placement[2]]) ||
			check([placement[3], placement[4], placement[5]]) ||
			check([placement[6], placement[7], placement[8]]) ||

			// Check columns
			check([placement[0], placement[3], placement[6]]) ||
			check([placement[1], placement[4], placement[7]]) ||
			check([placement[2], placement[5], placement[8]]) ||

			// Check diagonals
			check([placement[0], placement[4], placement[8]]) ||
			check([placement[2], placement[4], placement[6]])
		) {
			console.log(' GAME OVER! ');
			console.log(' Player ' + winner + ' has won!');
			console.log(' Want to play again? Type in "node tictactoe.js" to start a new game');
			return true;
		}
	}
}