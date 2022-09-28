// Guess the Number
let answer = Math.floor(Math.random() * 1000 + 1);
let guessNum = 10;
document.getElementById("guess-num").innerHTML = guessNum;
document.getElementById("submitGuess").onclick = function() {
    let guess = document.getElementById("guessBox").value;
    if (guess == answer) {
        alert("Congratulations! You guessed it right!");
        answer = Math.floor(Math.random() * 1000 + 1);
        guessNum = 10;
    } else if (guess > answer) {
        guessNum--;
        alert("Wrong! Try a SMALLER number");
    } else {
        guessNum--;
        alert("Wrong! Try a GREATER number");
    }
    if (guessNum == 0) {
        alert("You lose! The number was " + answer);
        answer = Math.floor(Math.random() * 1000 + 1);
        guessNum = 10;
    }
    document.getElementById("guess-num").innerHTML = guessNum;
    document.getElementById("guessBox").value = "";
}
// Akhir Guess the Number

// Rock Paper Scissor
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
const game = () => {
    
    const playGame = () => {
        const rockBtn = document.getElementById("rock");
        const paperBtn = document.getElementById("paper");
        const scissorBtn = document.getElementById("scissor");
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissor'];
    
        playerOptions.forEach(option => {
            option.addEventListener('click', function(){
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
    
                winner(this.innerText, computerChoice)
            })
        })
    }
    const winner = (player, computer) => {
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        const tieScoreBoard = document.querySelector('.t-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        const resetScore = () => {
            playerScore = 0;
            computerScore = 0;
            tieScore = 0;
            playerScoreBoard.textContent = playerScore;
            computerScoreBoard.textContent = computerScore;
            tieScoreBoard.textContent = tieScore;
        }
        if (player === computer) {
            alert("It's a Tie!");
            tieScore++;
            tieScoreBoard.textContent = tieScore;
        } else if (player == 'rock') {
            if (computer == 'paper') {
                alert("PAPER! I WIN!");
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else if (computer == 'scissor') {
                alert("SCISSOR! YOU WIN!");
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'paper') {
            if (computer == 'scissor') {
                alert("SCISSOR! I WIN!");
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else if (computer == 'rock') {
                alert("ROCK! YOU WIN!");
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'scissor') {
            if (computer == 'rock') {
                alert("ROCK! I WIN!");
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else if (computer == 'paper') {
                alert("PAPER! YOU WIN!");
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        if (playerScore == '10') {
            resetScore();
            alert("You Win! Congrats!");
        } else if (computerScore == '10') {
            resetScore();
            alert("You Lost! Try Again");
        }
    }
    
    playGame();
}
game();
// Akhir Rock Paper Scissor