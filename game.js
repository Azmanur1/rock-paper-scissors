
let humanScore = 0;
let computerScore = 0;
let round = 1;

const getComputerChoice = () => {
    const choice = ['rock','paper','scissors'];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(computer,human)
{   
    round++;
    if(computer === human){
        document.getElementById("roundResult").textContent = "Tie!";
    }
    if(
        (computer === 'rock' && human === 'scissors')||
        (computer === 'paper' && human === 'rock')||
        (computer === 'scissors' && human === 'paper')
    ){
        computerScore++;
        document.getElementById("roundResult").textContent = "Computer wins!";
    }
    else{
        humanScore++;
       document.getElementById("roundResult").textContent = "You win!";
    }
}


function playGame(humanChoice){
    if(round >=10 ){
        if(computerScore > humanScore){
            alert(`${round} complete, Computer Wins!`);
        }
        else{
            alert(`${round} complete, You Win! Congratulations.`);
        }
        
    }

    const computerChoice =  getComputerChoice();
    let result = playRound(computerChoice,humanChoice);

    let scoreText = `[Computer:${computerScore} | Human: ${humanScore}]` ;

    document.getElementById("demo").textContent = scoreText;

}


