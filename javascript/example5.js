function memoryCardGame() {
    const cards = ['A', 'A', 'B', 'B', 'C', 'C'];
    let shuffledCards = cards.sort(() => 0.5 - Math.random());
    let selectedCards = [];
    let matchedPairs = 0;

    function selectCard(index) {
        selectedCards.push(shuffledCards[index]);
        console.log(`Selected: ${shuffledCards[index]}`);
        
        if (selectedCards.length === 2) {
            if (selectedCards[0] === selectedCards[1]) {
                console.log("It's a match!");
                matchedPairs++;
            } else {
                console.log("Not a match. Try again.");
            }
            selectedCards = [];
        }

        if (matchedPairs === cards.length / 2) {
            console.log("You've matched all pairs!");
        }
    }

    // Simulate selecting cards
    selectCard(0);
    selectCard(1);
    selectCard(2);
    selectCard(3);
    selectCard(4);
    selectCard(5);
}

memoryCardGame();
