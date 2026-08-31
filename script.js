function playGame() {
    let number = Math.floor(Math.random() * 10) + 1;

    let guess = prompt("Guess a number from 1 to 10:");

    if (Number(guess) === number) {
        alert("🎉 Correct! You won!");
    } else {
        alert("❌ Wrong! The number was " + number);
    }
}