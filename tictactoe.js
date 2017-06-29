let turnCount = 1;
let winner;
let gameOver = false;

function checkForGameOver() {
    if (gameOver === true) {
        console.log('Your game is complete. Please use ticTacToe.startNewGame(); to begin again.');
        return;
    }
}

// Check input values from player
function testInput(position, letter) {
    // If it's an invalid number
    if (position > 8) {
        console.log('Please enter a number between 1 and 8');
        return;
    // If it's already taken
    } else if (placement[position] !== ' ') {
        console.log('That spot is taken!');
        return;
    }
    // Accept upper and lower case
    if (letter === 'x' || letter === 'X') {
        placement[position] = 'X';
    } else if (letter === 'o' || letter === 'O') {
        placement[position] = 'O';
    // Handle unexpected inputs
    } else {
        console.log('Please enter a valid letter! (X or O)');
    }
}

function drawBoard(firstRun) {
    // Show player how the position's number works
    if (firstRun) {
        placement = [0,1,2,3,4,5,6,7,8];
        // Explain the rules:
        console.log('');
        console.log('* Tic Tac Toe! *');
        console.log('');
        console.log('The rules are: \n');
        console.log('place(position, letter)');
        console.log('   - To place a letter (use "X" or "O") in the supplied position. Must be a string. \n');
        console.log('startNewGame() \n');
        console.log('   - To start a new game \n \n');
        console.log('Board Positions: \n');
    }
    // The board:
    let row1 = placement[0] + ' | ' +placement[1]+ ' | ' + placement[2] + '\n';
    let row2 = placement[3] + ' | ' +placement[4]+ ' | ' + placement[5] + '\n';
    let row3 = placement[6] + ' | ' +placement[7]+ ' | ' + placement[8] + '\n';
    console.log(row1);
    console.log(row2);
    console.log(row3);
    // Start with blank board
    if (firstRun) {
        placement = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    }
}

function place(position, letter) {
    // Check if the game is over
    if (gameOver === true) {
        checkForGameOver();
        return;
    }
    // Check if the input of the player is valid
    testInput(position, letter);
    // Increment turn counter
    turnCount++;
    // Check for winner
    if (findWinner()) {
        drawBoard();
        console.log(' GAME OVER! ');
        console.log(' Player ' + winner + ' has won!');
        gameOver = true;
    } else if (turnCount > 9) {
        console.log(' GAME OVER! Please try again');
    } else {
    // Draw board again to next turn
        drawBoard();
    }
}

// Start the game!
drawBoard(true);
