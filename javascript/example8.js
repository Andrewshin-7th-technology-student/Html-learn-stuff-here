function stopwatch() {
    let seconds = 0;
    let timer;

    function start() {
        timer = setInterval(() => {
            seconds++;
            console.log(`Elapsed time: ${seconds} seconds`);
        }, 1000);
    }

    function stop() {
        clearInterval(timer);
        console.log(`Stopped at: ${seconds} seconds`);
    }

    start();
    setTimeout(stop, 5000); // Stop after 5 seconds
}

stopwatch();
