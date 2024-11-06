function rockPaperScissors() {
    const choices = ['rock', 'paper', 'scissors'];
    const userChoice = prompt("Choose rock, paper, or scissors:");
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
        alert("It's a tie! Both chose " + userChoice + ".");
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        alert("You win! " + userChoice + " beats " + computerChoice + ".");
    } else {
        alert("You lose! " + computerChoice + " beats " + userChoice + ".");
    }
}

rockPaperScissors();
