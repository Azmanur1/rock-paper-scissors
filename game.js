
let humanScore = 0;
let computerScore = 0;


const getComputerChoice = () => {
    const choice = ['rock','paper','scissors'];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(computer,human)
{
    if(computer === human){
        return "Draw!";
    }
    if(
        (computer === 'rock' && human === 'scissors')||
        (computer === 'paper' && human === 'rock')||
        (computer === 'scissors' && human === 'paper')
    ){
        computerScore++;
        return "Computer wins";
    }
    else{
        humanScore++;
        return "You win";
    }
}


function playGame(humanChoice){
   
    const computerChoice =  getComputerChoice();
    let result = playRound(computerChoice,humanChoice);

    let scoreText = `[Computer:${computerScore} | Human: ${humanScore}]` ;

    document.getElementById("demo").textContent = scoreText;

}

// playGame();
// console.log(test);

