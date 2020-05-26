let allSquares = document.querySelectorAll(".square");
let playerTurn = document.querySelector(".playerIs");
playerTurn.textContent = "Player 1";

function squareClicked(evt) {
  evt.preventDefault();
  let square = evt.target;
  if (playerTurn.value == 1 && square.value !== 1 && square.value !== 2) {
    square.value = 1;
    square.style.backgroundColor = "blue";
    playerTurn.textContent = "Player 2";
    console.log(
      "clicked square value is " +
        square.value +
        " and was selected by Player" +
        playerTurn.value
    );
    playerTurn.value = 2;
  } else if (
    playerTurn.value == 2 &&
    square.value !== 1 &&
    square.value !== 2
  ) {
    square.value = 2;
    square.style.backgroundColor = "red";
    playerTurn.textContent = "Player 1";
    console.log(
      "clicked square value is " +
        square.value +
        " and was selected by Player" +
        playerTurn.value
    );
    playerTurn.value = 1;
  } else if (square.value === 1 && playerTurn.value == 1) {
    console.log("You already chose this box");
  } else if (square.value === 1 && playerTurn.value == 2) {
    console.log("You already chose this box");
  } else if (square.value === 2 && playerTurn.value == 1) {
    console.log("Player 2 already chose this box");
  } else if (square.value === 1 && playerTurn.value == 2) {
    console.log("You already chose this box");
  } else square.style.backgroundColor = "pink";
}

/* possible winning combinations
square1 == square2 == square3
square4 == square5 == square6
square7 == square8 == square9
square1 == square4 == square7
square2 == square5 == square8
square3 == square6 == square9
square1 == square5 == square9
square3 == square5 == square7
*/

for (let i = 0; i < 9; i++) {
  playerTurn.value = 1;
  allSquares[i].addEventListener("click", squareClicked);
}
