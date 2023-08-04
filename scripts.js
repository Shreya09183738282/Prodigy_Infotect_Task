const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]           // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      gameActive = false;
      message.textContent = `${currentPlayer} wins!`;
      cells[a].style.backgroundColor = 'aqua';
      cells[b].style.backgroundColor = 'aqua';
      cells[c].style.backgroundColor = 'aqua';
    }
  }
}

function checkTie() {
  if (!gameState.includes('')) {
    gameActive = false;
    message.textContent = "It's a tie!";
  }
}

function handleCellClick(cell) {
  const index = parseInt(cell.dataset.index);

  if (gameState[index] === '' && gameActive) {
    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.style.pointerEvents = 'none';
    checkWinner();
    checkTie();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    handleCellClick(cell);
  });
});