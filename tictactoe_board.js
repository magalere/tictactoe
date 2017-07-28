module.exports = {
	board: function(placement, position, letter) {

		function testInput() {
			// If it is an invalid number
			if (position > 8) {
				console.log('Please enter a number between 1 and 8');
				return;
			}
			// if it is already taken
			if (placement[position] !== ' ') {
				console.log('That spot is taken');
				return;
			}
			// If use lowercase
			if (letter === 'x' || letter === 'X') {
				placement[position] = 'X';
			} else if (letter === 'o' || letter === 'O') {
				placement[position] = 'O';
			}
			// Handle unexpected letters
			else {
				console.log('Please enter a valid letter! ("X" or "O")');
				return;
			}
		}

		testInput();
		let row1 = placement[0] + ' | ' + placement[1] + ' | ' + placement[2] + '\n';
		let row2 = placement[3] + ' | ' + placement[4] + ' | ' + placement[5] + '\n';
		let row3 = placement[6] + ' | ' + placement[7] + ' | ' + placement[8] + '\n';
		console.log(row1);
		console.log(row2);
		console.log(row3);
	}
}
