document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  // Ensure DOM is fully loaded
  if (document.readyState !== 'complete') {
    console.log('DOM not fully loaded');
    return;
  }

  // Set focus behavior on input
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      setTimeout(() => {
        if (e.target.value.length > 0 && index < inputs.length - 1) {
          // Move to the next input
          inputs[index + 1].focus();
        }
      }, 50); // Add slight delay to mimic `cy.wait()`
    });

    input.addEventListener('keydown', (e) => {
      setTimeout(() => {
        if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
          // Move to the previous input when backspace is pressed
          inputs[index - 1].focus();
        }
      }, 50); // Add slight delay to mimic `cy.wait()`
    });

    input.addEventListener('focus', () => {
      // Log to verify if focus is moving correctly
      console.log(`Focused: ${input.id}`);
    });
  });
});
