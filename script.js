            let playerScore = 0;
            let comScore = 0;

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
        function playRound(){
            let playerSelection = prompt("Rock, Paper, Scissors?");
            if(playerSelection !=null){
            let computerSelection = computerPlay();
            playerSelection = playerSelection.toLowerCase();
       

            if (playerSelection =='rock'){
                if(computerSelection == 'paper'){
                    console.log("Paper beats Rock! You Lose!");
                    comScore++;
                }
                if(computerSelection =='rock'){
                    console.log("Tie. No one wins!");
                    
                }
                if(computerSelection =='scissors'){
                    console.log("Rock beats Scissors! You win!");
                    playerScore++;
                }
            }
            if (playerSelection =="paper"){
                if (computerSelection =='paper'){
                    console.log("Tie. No one wins!");
                    
                }
                if (computerSelection =='rock'){
                    console.log("Paper beats Rock! You win!");
                    playerScore++;
                }
                if (computerSelection =='scissors'){
                    console.log("Scissors beats Paper! You lose!");
                    comScore++;
                }
            }
            if (playerSelection =="scissors"){
                if (computerSelection =='paper'){
                    console.log("Scissors beats paper! You win!");
                    playerScore++;
                }
                if (computerSelection =='rock'){
                    console.log("Rock beats Scissors! You Lose!");
                    comScore++;
                    
                }
                if (computerSelection =='scissors'){
                    console.log("Tie! No one wins!");
                    
                }
            
            }
            if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
                alert("Please pick enter the correct word!")
            };
        }
    
        }
       
    
    function game(){
            
            console.log("Computer Score: "+ comScore );
            console.log("Your Score: "+ playerScore);
        

            if (playerScore == 5){
                console.log("You scored 5 points. You win!");
                console.log("Restarting game!")
                playerScore = 0;
                comScore = 0;
                return;
        }
            else if (comScore == 5){
                console.log("The computer scored 5 points. You lose!");
                console.log("GAME OVER! Restarting game!");
                playerScore = 0;
                comScore = 0;
                return;
        }
              
        }    
        
        

