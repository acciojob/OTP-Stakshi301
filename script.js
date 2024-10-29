const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    // Handle input event
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 0 && index < inputs.length - 1) {
            inputs[index + 1].focus(); // Move focus to the next input
        }
    });

    // Handle backspace event
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value === '') {
                if (index > 0) {
                    inputs[index - 1].focus(); // Move focus to the previous input
                }
            } else {
                input.value = ''; // Clear the current input
            }
        }
    });
});
