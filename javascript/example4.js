function countdownTimer(seconds) {
    let timeLeft = seconds;

    const timer = setInterval(() => {
        console.log(timeLeft);
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            console.log("Time's up!");
        }
    }, 1000);
}

countdownTimer(10); // Countdown from 10 seconds
