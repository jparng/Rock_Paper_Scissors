         

        function computerPlay(min,max){ // This function will make the computer randomly pick between 1 and 3
                                        // and depending on the number it will choose rock, paper, or scissors.
             min = Math.ceil(1)
             max = Math.floor(3)
             let choice;
            let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if (ranNum == 1){
                choice ='rock';
            }
            else if(ranNum == 2){
                choice ='paper';
                        }
            else{
                choice ='scissors';
            }
            return choice;

        }

        function playRound(playerChoice, computerChoice) { //Calculates whether user or computer wins the round
            playerChoice = playerChoice.toLowerCase();
            gameover.textContent = "";
            switch(playerChoice) {
              case "rock":
                if (computerChoice === "rock") {
                  return ["draw", "Draw! Rock vs Rock", computerChoice];
                } else if (computerChoice === "paper") {
                  return ["lose", "You lose! Paper beats Rock", computerChoice];
                } else if (computerChoice === "scissors") {
                  return ["win", "You win! Rock beats Scissors", computerChoice];
                }
                break;
              case "paper":
                if (computerChoice === "rock") {
                  return ["win", "You win! Paper beats Rock", computerChoice];
                } else if (computerChoice === "paper") {
                  return ["draw", "Draw! Paper vs Paper", computerChoice];
                } else if (computerChoice === "scissors") {
                  return ["lose", "You lose! Scissors beats Paper", computerChoice];
                }
                break;
              case "scissors":
                if (computerChoice === "rock") {
                  return ["lose", "You lose! Rock beats Scissors", computerChoice];
                } else if (computerChoice === "paper") {
                  return ["win", "You win! Scissors beats Paper", computerChoice];
                } else if (computerChoice === "scissors") {
                  return ["draw", "Draw! Scissors vs Scissors", computerChoice];
                }
                break;
            }
          }
        
       
    
    function game(e){ //When either computer or user scores points, winner is declared when 5 points are earned.
            let roundResult = playRound(this.id, computerPlay());
            pScore.textContent = `Your score : ${playerScore}`;
            cScore.textContent = `Computer score : ${computerScore}`;
            if(roundResult[0] === "win"){
                playerScore += 1;
                pScore.textContent = `Your score : ${playerScore}`;
                winRound.textContent = "You won this round!";

            } else if (roundResult[0] === "lose"){
                computerScore += 1;
                cScore.textContent = `Computer score : ${computerScore}`;
                winRound.textContent = "Computer won this round!";
            }
            else if (roundResult[0] === "draw"){
                winRound.textContent = "Draw! No one wins this round";
            }
            if(playerScore == 5 || computerScore == 5){
                declareWinner();
            }
            console.log("Computer Score: "+ computerScore );
            console.log("Your Score: "+ playerScore);
    }
    function declareWinner(){
            if (playerScore > computerScore){
               gameover.textContent= "You scored 5 points. You win! Click any choice to play again.";
               playerScore = 0;
               computerScore = 0;
               winRound.textContent = "";
                return;
        }
            else if (computerScore > playerScore){
                gameover.textContent = "The computer scored 5 points. You lose! Click any choice to play again.";
                playerScore = 0;
               computerScore = 0;
               winRound.textContent = "";
                return;
        }
    }

  

const gameover = document.getElementById('gameover');  
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", game ));
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const winRound = document.getElementById("result");
