  const rockBtn = document.querySelector('#rock');
  const paperBtn = document.querySelector('#paper');
  const scissorBtn = document.querySelector('#scissors');

  let humanScore = 0;
    let computerScore = 0;

  let playCounter = 0;  

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



function playRound(humanChoice, computerChoice){
    const resultsDiv = document.getElementById("results");
    const humanScoreSpan = document.getElementById("human-score");
    const computerScoreSpan = document.getElementById("computer-score");
    
    let resultMessage;
    

    if (humanChoice == "rock" && computerChoice =="paper"){
        resultMessage = "You lose! Paper beats rock";
        computerScore++;
        playCounter++;
    } else if (humanChoice =="scissors" && computerChoice =="rock"){
        resultMessage = "You lose! Rock beasts Scissors";
        computerScore++;
        playCounter++;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        resultMessage = "You lose! Scissors beat paper";
        computerScore++;
        playCounter++;
    } else if (humanChoice === computerChoice){
        resultMessage = "TIE GAME";
        playCounter++
    } else {
        resultMessage = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
        playCounter++
    }

    if (playCounter >= 5){
        console.log("Game Over! Final Score:");
       console.log("Human Score: " + humanScore);
       console.log("Computer Score: " + computerScore);
       resultsDiv.textContent = `Game Over! Final Score: Human: ${humanScore}, Computer: ${computerScore}`;
       return;
    }

    resultsDiv.textContent = resultMessage;
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}



