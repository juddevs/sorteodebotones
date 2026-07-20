document.addEventListener('DOMContentLoaded', () => {
    const btnRed = document.getElementById('btn-red');
    const btnBlue = document.getElementById('btn-blue');
    const btnPlayAgain = document.getElementById('btn-play-again');
    
    const gameOptions = document.getElementById('game-options');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');

    const handleChoice = () => {
        // Hide options
        gameOptions.classList.add('hidden');
        
        // Determine result (50% chance)
        const isWin = Math.random() >= 0.5;
        
        // Show result
        resultContainer.classList.remove('hidden');
        
        if (isWin) {
            resultMessage.textContent = '¡Has ganado!';
            resultMessage.className = 'result-message win';
        } else {
            resultMessage.textContent = 'Has perdido';
            resultMessage.className = 'result-message lose';
        }
    };

    const resetGame = () => {
        // Hide result
        resultContainer.classList.add('hidden');
        
        // Show options with animation
        gameOptions.classList.remove('hidden');
        
        // Remove animation class and add it back to trigger it again if needed, 
        // though flex layout handles it fine here.
    };

    // Event Listeners
    btnRed.addEventListener('click', handleChoice);
    btnBlue.addEventListener('click', handleChoice);
    btnPlayAgain.addEventListener('click', resetGame);
});
