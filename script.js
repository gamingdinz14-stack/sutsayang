// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Create falling hearts
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-fall';
    const hearts = ['💕', '💖', '💗', '💝', '❤️', '💓'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
    heart.style.animationDelay = Math.random() * 3 + 's';
    document.getElementById('heartsBg').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 13000);
}

// Blow candles
document.getElementById('blowButton').addEventListener('click', function() {
    const candles = document.querySelectorAll('.candle');
    const instruction = document.getElementById('instruction');
    
    instruction.textContent = '🎊 Permintaanmu akan terkabul! 🎊';
    
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add('blown');
        }, index * 300);
    });

    setTimeout(() => {
        document.getElementById('cakeScreen').classList.add('hidden');
        document.getElementById('envelopeScreen').classList.add('show');
    }, 2000);
});

// Open envelope
document.getElementById('envelopeContainer').addEventListener('click', function() {
    this.classList.add('opened');
    
    setTimeout(() => {
        document.getElementById('envelopeScreen').style.display = 'none';
        document.getElementById('mainCard').classList.add('show');
    }, 2000);
});

// Initialize
createParticles();
setInterval(createFallingHeart, 600);
for (let i = 0; i < 10; i++) {
    setTimeout(createFallingHeart, i * 300);
}