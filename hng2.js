const colorBox = document.getElementById("colorBox");
const optionsContainer = document.getElementById("optionsContainer");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

// Function to start a new game
function startGame() {
  gameStatus.textContent = "";
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  optionsContainer.innerHTML = "";

  let shuffledColors = [...colors].sort(() => Math.random() - 0.5);

  shuffledColors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.setAttribute("data-testid", "colorOption");
    button.addEventListener("click", () => checkGuess(color));
    optionsContainer.appendChild(button);
  });
}

// Function to check the user's guess
function checkGuess(selectedColor) {
  if (selectedColor === targetColor) {
    gameStatus.textContent = "Correct!";
    gameStatus.style.color = "green";
    score++;
  } else {
    gameStatus.textContent = "Wrong! Try again.";
    gameStatus.style.color = "red";
  }
  scoreDisplay.textContent = score;
}

// Event listener for new game button
newGameButton.addEventListener("click", startGame);

// Start the first game
startGame();
