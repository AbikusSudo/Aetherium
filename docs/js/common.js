document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            navigator.clipboard.writeText(url).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Скопировано!';
                this.classList.remove('bg-flux-blue');
                this.classList.add('bg-flux-success');
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('bg-flux-success');
                    this.classList.add('bg-flux-blue');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach((orb, index) => {
        const randomDelay = Math.random() * 5;
        orb.style.animationDelay = `${randomDelay}s`;
        
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            const sensitivity = [0.3, 0.2, 0.4][index];
            const moveX = (mouseX - 0.5) * 50 * sensitivity;
            const moveY = (mouseY - 0.5) * 50 * sensitivity;
            
            orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});
