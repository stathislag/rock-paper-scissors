// let computerAnwser = null;

function getComputerChoice() {
  choice = ["Rock", "Paper", "Scissor"];
  let selection = choice[Math.floor(Math.random() * choice.length)];
  return selection;
}

console.log(getComputerChoice());
