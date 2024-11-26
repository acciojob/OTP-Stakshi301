const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    // Move to the next input when a digit is entered
    if (e.target.value.length > 0 && index < inputs.length - 1) {
      inputs[index + 1].focus();
      console.log(`Focused: ${inputs[index + 1].id}`);
    }
  });

  input.addEventListener('keydown', (e) => {
    // Move to the previous input when backspace is pressed
    if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
      inputs[index - 1].focus();
      console.log(`Focused: ${inputs[index - 1].id}`);
    }
  });
});
