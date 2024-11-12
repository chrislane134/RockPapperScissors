  const rockBtn = document.querySelector('#rock');
  const paperBtn = document.querySelector('#paper');
  const scissorBtn = document.querySelector('#scissors');

  function handleClick (choice) {
    const computerChoice = getComputerChoice();
    playRound (choice, computerChoice);
  }

  rockBtn.addEventListener("click", () => handleClick("rock"));
  paperBtn.addEventListener("click", () => handleClick("paper"));
  scissorBtn.addEventListener("click", () => handleClick("scissors"));



function getComputerChoice(computerChoice){
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomNumber = getRandomNumber(1,3)
    
    if (randomNumber == 1) {
         computerChoice = "rock"
    } else if (randomNumber == 2){
        computerChoice = "scissors"
    }else{
        computerChoice = "paper"
    }
     console.log(computerChoice);
     return computerChoice;
    }

/*function getHumanChoice(humanChoice){
    humanChoice = prompt('Make your choice. Rock, Paper or Scissors').toLowerCase();
    console.log(humanChoice)
    return humanChoice;
} */

let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice =="paper"){
        console.log("You lose! Paper beats rock");
        computerScore++;
    } else if (humanChoice =="scissors" && computerChoice =="rock"){
        console.log("You lose! Rock beasts Scissors");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beat paper");
        computerScore++;
    } else if (humanChoice === computerChoice){
        console.log("TIE GAME");
    } else {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    
}



/* function playGame(playCounter = 0){
 
    
     if (playCounter >= 5){
       console.log("Game Over! Final Score:");
       console.log("Human Score: " + humanScore);
       console.log("Computer Score: " + computerScore);
       return;
     }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    playCounter++;
    console.log("Round: " + playCounter);
    console.log("Current Human Score: " + humanScore);
    console.log("Current Computer Score: " + computerScore);
    playGame(playCounter);
    }
   */


playGame();


