let turn = "O";
let total_turn = 0;

let winner = [
  [0, 1, 2], // Top Row
  [3, 4, 5], // Middle Row
  [6, 7, 8], // Bottom Row
  [0, 3, 6], // Left Column
  [1, 4, 7], // Middle Column
  [2, 5, 8], // Right Column
  [0, 4, 8], // Diagonal Top-Left to Bottom-Right
  [2, 4, 6], // Diagonal Top-Right to Bottom-Left
];

let board_array = new Array(9).fill("E");

function checkwinner() {
  for (let [index0, index1, index2] of winner) {
    if (
      board_array[index0] != "E" &&
      board_array[index0] === board_array[index1] &&
      board_array[index1] === board_array[index2]
    )
      return 1;
  }
  return 0;
}

const board = document.querySelector(".board");

const printer = (event) => {
  const element = event.target;

  if (board_array[element.id] === "E") {
    total_turn++;
    if (turn === "O") {
      element.innerHTML = "O";
      board_array[element.id] = "O";
      if (checkwinner()) {
        document.getElementById("winningMessage").innerHTML = "winner is O";
           const img1 = document.getElementById('animated');
       
        img1.classList.add('circle');
        board.removeEventListener("click", printer);
        return;
      }
      turn = "X";
    } else {
      element.innerHTML = "X";
      board_array[element.id] = "X";
      if (checkwinner()) {
        document.getElementById("winningMessage").innerHTML = "winner is X";
       const img = document.getElementById('animatedImage');
       
        img.classList.add('circle'); 
        board.removeEventListener("click", printer);
        return;
      }
      turn = "O";
    }

    if (total_turn == 9) {
      document.getElementById("winningMessage").innerHTML = "Match is drawn";
    }
  }
};

board.addEventListener("click", printer);

const restart = document.getElementById("restartButton");
restart.addEventListener("click", () => {
  const cell = document.getElementsByClassName("cell");
  Array.from(cell).forEach((value) => {
    value.innerHTML = "";
  });


  turn = "O";
  total_turn = 0;
  board_array = new Array(9).fill("E");
  document.getElementById("winningMessage").innerHTML = "";
  board.addEventListener("click", printer);
});
