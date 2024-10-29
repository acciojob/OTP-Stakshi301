//your JS code here. If required.
var inputs = document.querySelectorAll('.code');
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            if(index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });
});