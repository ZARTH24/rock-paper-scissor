let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");

function getComputerChoice(){
      let choices = ["rock", "paper", "scissor"];
      let randomValue = choices[Math.floor(choices.length * Math.random())];
      return randomValue;
    }

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
	
function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	let result = "";
	if((playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissor" && computerSelection === "paper")){
		playerScore+=1;
		result = (`You Win! ${playerSelection} beats ${computerSelection} <br><br>Player Score: ${playerScore}<br>Computer Score: ${computerScore}`);
		if(playerScore == 5){
			result += (`<br><br>You won the Game! Reload the page to restart`);
			disableButtons();
		}
	}
	else if(playerSelection === computerSelection) {
		result = (`it\`s Draw game, You both choose ${playerSelection} <br><br>Player Score ${playerScore}<br>Computer Score : ${computerScore}`);
	}
	else{
		computerScore+=1;
		result = (`You Lose! ${computerSelection} beats ${playerSelection} <br><br>Player Score: ${playerScore}<br>Computer Score: ${computerScore}`);
		if (computerScore == 5){
			result += (`<br><br>You Lose the Game! Reload the page to restart`);
			disableButtons();
		}
	}
	document.getElementById("result").innerHTML = result;
	return;
}
buttons.forEach(button =>{
	button.addEventListener("click", function(){
		playRound(button.value);
	});
});