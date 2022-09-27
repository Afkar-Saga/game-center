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
}
// Akhir Guess the Number

// Rock Paper Scissor
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

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

        if (player === computer) {
            alert("It's a Tie!");
            tieScore++;
            tieScoreBoard.textContent = tieScore;
        } else if (player == 'rock') {
            if (computer == 'paper') {
                alert("Computer picked paper, you lose!");
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else if (computer == 'scissor') {
                alert("Computer picked scissor, you win!");
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'paper') {
            if (computer == 'scissor') {
                alert("Computer picked scissor, you lose!");
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else if (computer == 'rock') {
                alert("Computer picked rock, you win!");
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'scissor') {
            if (computer == 'rock') {
                alert("Computer picked rock, you lose!");
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else if (computer == 'paper') {
                alert("Computer picked paper, you win!");
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    playGame();
}
game();
// Akhir Rock Paper Scissor