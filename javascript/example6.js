function quizGame() {
    const questions = [
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is the largest ocean?", answer: "Pacific" }
    ];
    let score = 0;

    questions.forEach(q => {
        const userAnswer = prompt(q.question);
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            score++;
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is " + q.answer);
        }
    });

    alert("Your score: " + score + "/" + questions.length);
}

quizGame();
