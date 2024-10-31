const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 0 && index < inputs.length - 1) {
            inputs[index + 1].focus(); 
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            inputs[index - 1].focus(); 
        }
    });

    // Log focus events to verify
    input.addEventListener('focus', () => {
        console.log(`Input ${index + 1} is focused`);
		 console.log('Currently focused element:', document.activeElement);
    });
});
