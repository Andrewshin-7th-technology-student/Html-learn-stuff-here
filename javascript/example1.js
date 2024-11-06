function numberGuessingGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the right number!");
    } else {
        alert("Try again! The number was " + randomNumber + ".");
    }
}

numberGuessingGame();
