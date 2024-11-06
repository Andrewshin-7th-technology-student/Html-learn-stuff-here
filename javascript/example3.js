function ticTacToe() {
    const board = [['', '', ''], ['', '', ''], ['', '', '']];
    let currentPlayer = 'X';

    function printBoard() {
        console.clear();
        board.forEach(row => console.log(row.join(' | ')));
        console.log('-------');
    }

    function checkWin() {
        // Check rows, columns, and diagonals for a win
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) return true;
            if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) return true;
        }
        if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) return true;
        if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) return true;
        return false;
    }

    for (let turn = 0; turn < 9; turn++) {
        printBoard();
        const row = prompt(`Player ${currentPlayer}, enter row (0-2):`);
        const col = prompt(`Player ${currentPlayer}, enter column (0-2):`);

        if (board[row][col] === '') {
            board[row][col] = currentPlayer;
            if (checkWin()) {
                printBoard();
                alert(`Player ${currentPlayer} wins!`);
                return;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        } else {
            alert("Cell already taken! Try again.");
            turn--; // Don't count this turn
        }
    }
    printBoard();
    alert("It's a tie!");
}

ticTacToe();
