const prompt = require("syncprompt");
const boardGame = require('./tictactoe_board');
const whoIsTheWinner = require('./tictactoe_winner');
console.log('');
console.log('*** Tic Tac Toe ***');
console.log('');
let placement = [0,1,2,3,4,5,6,7,8];
let row1 = placement[0] + ' | ' + placement[1] + ' | ' + placement[2] + '\n';
let row2 = placement[3] + ' | ' + placement[4] + ' | ' + placement[5] + '\n';
let row3 = placement[6] + ' | ' + placement[7] + ' | ' + placement[8] + '\n';
console.log(row1);
console.log(row2);
console.log(row3);
placement = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
let winner;
let turnCount = 1;

function tictactoe() {
	let position = prompt("Type in your move (a number from 0 to 8) >");
	let letter = prompt("Type in your player (choose 'X' or 'O') >");
	position = parseInt(position);

	// Draw a board
	boardGame.board(placement, position, letter);
	
	// Check number of turns
	if (turnCount > 8) {
        console.log(' DRAW! You can do it better! Try again');
        console.log(' Type in "node tictactoe.js" to start a new game');
        return true;
    } else {
	turnCount++; 
	}

	// Check for a winner
	if (!whoIsTheWinner.findWinner(placement)) {
        tictactoe();
    }
}

tictactoe();