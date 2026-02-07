document.addEventListener('DOMContentLoaded', function() {
    const glitch = document.querySelector('.glitch');
    if (glitch) {
        setInterval(() => {
            glitch.style.textShadow = `2px 2px 0 #ff00ff, -2px -2px 0 #00ffff`;
            setTimeout(() => {
                glitch.style.textShadow = 'none';
            }, 100);
        }, 3000);
    }
    const errorNumber = document.querySelector('.error-number');
    if (errorNumber) {
        setInterval(() => {
            errorNumber.style.transform = 'scale(1.05)';
            setTimeout(() => {
                errorNumber.style.transform = 'scale(1)';
            }, 200);
        }, 5000);
    }
});
