var turn = 0;
var board = ['', '', '', '', '', '', '', '', ''];
var win = false;
var winner = '';

function play(cell) {
	if (cell.innerHTML == '') {
		if (turn % 2 == 0) {
			cell.innerHTML = 'X';
		} else {
			cell.innerHTML = 'O';
		}
		turn++;
		checkWin(cell.innerHTML);
	}
}

function checkWin(p) {
	for (i = 1; i < 10; i++) {
		board[i - 1] = document.getElementById('c' + i).innerHTML;
	}

	if ((board[0] == p && board[1] == p && board[2] == p) ||
		(board[3] == p && board[4] == p && board[5] == p) ||
		(board[6] == p && board[7] == p && board[8] == p) ||
		(board[0] == p && board[3] == p && board[6] == p) ||
		(board[1] == p && board[4] == p && board[7] == p) ||
		(board[2] == p && board[5] == p && board[8] == p) ||
		(board[0] == p && board[4] == p && board[8] == p) ||
		(board[2] == p && board[4] == p && board[6] == p)) {
		winner = 'Congratulations!! Player ' + p + ' won!';
		win = true;
		gameOver();
	}

	if (win == false && turn == 9) {
		winner = 'Draw';
		gameOver();
	}

	console.log(turn);
}

function gameOver() {
	document.getElementById('player').innerHTML = winner;
	document.getElementById('panel').style.display = 'block';
}

function restart() {
	document.getElementById('panel').style.display = 'none';
	restore();
}

function restore() {
	for (i = 1; i < 10; i++) {
		document.getElementById('c' + i).innerHTML = '';
	}
	turn = 0;
	win = false;
}


