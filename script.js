const inputs = document.querySelectorAll('.code');
console.log('Inputs found:', inputs.length);

inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        console.log(`Typing in Input ${index + 1}:`, e.target.value);
        if (e.target.value.length > 0 && index < inputs.length - 1) {
            inputs[index + 1].focus(); 
        }
    });

    input.addEventListener('keydown', (e) => {
        console.log(`Key pressed in Input ${index + 1}:`, e.key);
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
            inputs[index - 1].focus(); 
        }
    });

    input.addEventListener('focus', () => {
        console.log(`Input ${index + 1} is focused`);
        console.log('Currently focused element:', document.activeElement);
    });
});
