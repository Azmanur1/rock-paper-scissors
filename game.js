
let round = 1;
let humanScore = 0;
let computerScore = 0;
let test="";

const getComputerChoice = () => {
    const choice = ['rock','paper','scissors'];
    return choice[Math.floor(Math.random()*3)];
}
const getHumanChoice = () =>{
    const humanChoice = prompt("round"+round+", [computer:"+computerScore+"|human:"+humanScore+"]"+", write your choice: ")
    return humanChoice.toLowerCase();
}


function playRound(computer,human){
    if(computer == human){
    }
    if(computer == 'rock' && human == 'paper')
    {
        humanScore++;
    }
    if(computer == 'paper' && human == 'rock')
    {
        computerScore++;
    }

    if(computer == 'paper' && human == 'scissors')
    {
        humanScore++;
    }
    if(computer == 'scissors' && human == 'paper')
    {
        computerScore++;
    }

    if(computer == 'scissors' && human == 'rock')
    {
        humanScore++;
    }  
    if(computer == 'rock' && human == 'scissors')
    {
        computerScore++;
    }
    else{
        return "input error";
    }
    
    
}

function playGame(){
    for(let i =0; i<5; i++){
     playRound(getComputerChoice(), getHumanChoice());
     document.getElementById("demo").innerHTML = "computer:"+computerScore+"|human:"+humanScore;
     round++;
    }

    if(computerScore > humanScore){
        test = "Computer Win! "+"[computer:"+computerScore+"|human:"+humanScore+"]";
    }
    else{
        test = "You Win! "+"[computer:"+computerScore+"|human:"+humanScore+"]";
    }

    document.getElementById("demo").innerHTML = test;

}

playGame();
console.log(test);

