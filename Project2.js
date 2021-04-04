var main = document.querySelector("main");

var rockButton = document.querySelector("#rock");

var paperButton = document.querySelector("#paper");

var scissorButton = document.querySelector("#scissor");

showResult();

function computersChoice() {
  var choicesList = ["r", "p", "s"];

  var choiceByComputer =
    choicesList[Math.round(Math.random(0, choicesList.length))];

  return choiceByComputer;
}

var wins = 0,
  losses = 0,
  ties = 0;

var outputForUser = "";

function calculateResult(userInput, computerInput) {
  if (userInput == "r" && computerInput == "s") {
    
    outputForUser =
      "You win!You picked " + userInput + " which beats " + computerInput;
    
    wins += 1;
  } else if (userInput == "p" && computerInput == "s") {
    outputForUser =
      "You win!You picked " + userInput + " which beats " + computerInput;
    wins += 1;
  } else if (userInput == "s" && computerInput == "r") {
    outputForUser =
      "You win!You picked " + userInput + " which beats " + computerInput;
    wins += 1;
  } else if (userInput == computerInput) {
    outputForUser = "It's a tie";
    ties += 1;
  } else {

    outputForUser =
      "You lose!computer  picked " +
      computerInput +
      " which beats " +
      userInput;
    losses += 1;
  }
  console.log(outputForUser);
}

rockButton.addEventListener("click", function () {
  var computerInput = computersChoice();
  calculateResult("r", computerInput);
  showResult();
});
paperButton.addEventListener("click", function () {
  var computerInput = computersChoice();
  calculateResult("p", computerInput);
  showResult();
});
scissorButton.addEventListener("click", function () {
  var computerInput = computersChoice();
  calculateResult("s", computerInput);
  showResult();
});

function showResult() {
  main.innerHTML = `
        <h2>Wins : ${wins ?? 0} </h2>
        <h2>Ties : ${ties ?? 0} </h2>
        <h2>Losses : ${losses ?? 0}</h2>
        <p>${outputForUser ?? ""}</p>
    `;
  console.log(main);
}
