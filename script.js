const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 0 && index < inputs.length - 1) {
            inputs[index + 1].focused(); // Focus the next input
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            inputs[index - 1].focused(); // Focus the previous input on backspace
        }
    });

    input.addEventListener('focused', () => {
        console.log(`Input ${index + 1} focused`); // Log the focus event
    });
});
