function computerPlay() {
  //generates a random move
  const moves = ["rock", "scissors", "paper"];
  let r = Math.floor(Math.random() * 3);
  return moves[r];
}
function rules(m1, m2) {
  //rules of the game
  if (m1 == m2) {
    return "It's a draw.";
  } else if (m1 == "rock") {
    if (m2 == "paper") return "You lose! Paper beats rock.";

    if (m2 == "scissors") return "You win! Rock beats scissors.";
  } else if (m1 == "paper") {
    if (m2 == "scissors") return "You lose! Scissors beats paper.";

    if (m2 == "rock") return "You win! Paper beats rock.";
  } else if (m1 == "scissors") {
    if (m2 == "paper") return "You win! Scissors beats paper.";

    if (m2 == "rock") return "You lose! Rock beats scissors.";
  }
}

let playerPoints = 0;
let machinePoints = 0;
let drawPoints = 0;
function pointAllocate(n1, n2) {
  //updates the scoreboard according to rules function
  let outcome = rules(n1, n2)[4];
  if (outcome == "w") {
    playerPoints += 1;
    return (document.querySelector(
      "#player"
    ).textContent = playerPoints.toString());
  } else if (outcome == "l") {
    machinePoints += 1;
    return (document.querySelector(
      "#machine"
    ).textContent = machinePoints.toString());
  } else {
    drawPoints += 1;
    return (document.querySelector(
      "#draw"
    ).textContent = drawPoints.toString());
  }
}
const modal = document.querySelector("#myModal");
const span = document.querySelectorAll(".close")[0];
let msg = document.querySelector(".msg");
const moves = document.querySelectorAll("img"); //player clicks on image, sets input
//not sure i should be nesting anonymous functions inside forEach 'loops', but w.e it works
moves.forEach((move) => {
  move.addEventListener("click", function () {
    let mP = computerPlay(); //generate random move & store it, has to be the same for msg & pointAllocate
    msg.textContent = `The Machine picks ${mP}... ${rules(move.className, mP)}`;
    modal.style.display = "block";
    span.addEventListener("click", function () {
      modal.style.display = "none";
    });
    window.addEventListener("click", function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
    pointAllocate(move.className, mP);
  });
});
