/*
Filename: ComplexCode.js

Description: This code is a complex implementation of a tic-tac-toe game using advanced JavaScript techniques. It includes an AI opponent that uses the minimax algorithm to make intelligent moves.

Author: Code Master

Date: December 1, 2021
*/

// Global variables
let board;
const humanPlayer = 'X';
const aiPlayer = 'O';
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Helper functions

// Initialize the game board
function createBoard() {
  return Array.from(Array(9).keys());
}

// Check if a player has won
function checkWin(player, board) {
  const plays = board.reduce((a, val, index) =>
    (val === player) ? a.concat(index) : a, []);
  let gameWon = null;
  for (let [index, winCombo] of winningCombos.entries()) {
    if (winCombo.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player };
      break;
    }
  }
  return gameWon;
}

// Check if the board is full
function isBoardFull(board) {
  return board.every(cell => typeof cell === 'string');
}

// Main game logic

// Display the game board
function displayBoard() {
  console.log(board.slice(0, 3).join(' | '));
  console.log('---------');
  console.log(board.slice(3, 6).join(' | '));
  console.log('---------');
  console.log(board.slice(6, 9).join(' | '));
}

// Make a move
function makeMove(cell, player) {
  board[cell] = player;
}

// Undo a move
function undoMove(cell) {
  board[cell] = cell;
}

// Minimax algorithm with alpha-beta pruning
function minimax(board, player, depth, alpha, beta) {
  const availableMoves = getAvailableMoves(board);

  if (checkWin(humanPlayer, board)) {
    return { score: -10 };
  } else if (checkWin(aiPlayer, board)) {
    return { score: 10 };
  } else if (availableMoves.length === 0) {
    return { score: 0 };
  }

  let bestMove;
  if (player === aiPlayer) {
    let bestScore = -Infinity;
    for (let move of availableMoves) {
      makeMove(move, player);
      const score = minimax(board, humanPlayer, depth + 1, alpha, beta).score;
      undoMove(move);
      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }
      alpha = Math.max(alpha, bestScore);
      if (beta <= alpha) {
        break;
      }
    }
    return { score: bestScore, move: bestMove };
  } else {
    let bestScore = Infinity;
    for (let move of availableMoves) {
      makeMove(move, player);
      const score = minimax(board, aiPlayer, depth + 1, alpha, beta).score;
      undoMove(move);
      if (score < bestScore) {
        bestScore = score;
        bestMove = move;
      }
      beta = Math.min(beta, bestScore);
      if (beta <= alpha) {
        break;
      }
    }
    return { score: bestScore, move: bestMove };
  }
}

// Get available moves on the board
function getAvailableMoves(board) {
  return board.filter(cell => typeof cell === 'number');
}

// Check for game over
function gameOver() {
  if (checkWin(humanPlayer, board)) {
    return 'You win!';
  } else if (checkWin(aiPlayer, board)) {
    return 'You lose!';
  } else if (isBoardFull(board)) {
    return 'It\'s a draw!';
  }
  return false;
}

// Handle player's move
function handlePlayerMove(cell) {
  if (typeof board[cell] === 'number') {
    makeMove(cell, humanPlayer);
    displayBoard();
    const result = gameOver();
    if (!result) {
      handleAIMove();
    } else {
      console.log(result);
    }
  }
}

// Handle AI's move
function handleAIMove() {
  const bestMove = minimax(board, aiPlayer, 0, -Infinity, Infinity).move;
  makeMove(bestMove, aiPlayer);
  displayBoard();
  const result = gameOver();
  if (result) {
    console.log(result);
  }
}

// Initialize the game
function startGame() {
  console.log('Welcome to Tic-Tac-Toe!');
  board = createBoard();
  displayBoard();
  console.log('Make your move by entering a number from 0 to 8:');
}

// Start the game
startGame();