const inputs = document.querySelectorAll('.code');

// Set focus behavior on input
inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    if (e.target.value.length > 0 && index < inputs.length - 1) {
      // Move to the next input
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
      // Move to the previous input when backspace is pressed
      inputs[index - 1].focus();
    }
  });

  input.addEventListener('focus', () => {
    // Log to verify if focus is moving correctly
    console.log(`Focused: ${input.id}`);
  });
});
