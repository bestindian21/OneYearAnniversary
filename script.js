// Countdown Timer - Count UP from Anniversary Date
function updateCountdown() {
    // Our anniversary: February 24, 2025 (EST timezone)
    // Adjust for EST (UTC-5) by adding 5 hours to UTC midnight
    const anniversaryStart = new Date('2025-02-24').getTime() + (5 * 60 * 60 * 1000);
    const now = new Date().getTime();
    const elapsed = now - anniversaryStart;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Check if we've reached 365 days (1 year anniversary)
    if (days >= 365 && !sessionStorage.getItem('celebrationTriggered')) {
        triggerAnniversaryCelebration();
        sessionStorage.setItem('celebrationTriggered', 'true');
    }
}

// Anniversary celebration animation
function triggerAnniversaryCelebration() {
    const hero = document.querySelector('.hero');
    hero.classList.add('celebrate');
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-30px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            heart.style.opacity = '1';
            document.body.appendChild(heart);

            const duration = Math.random() * 3000 + 2000;
            const animation = heart.animate([
                { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(360deg) scale(0.5)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            animation.onfinish = () => heart.remove();
        }, i * 50);
    }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Photo Modal Functions
function openPhotoModal(imageSrc) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePhotoModal(event) {
    const modal = document.getElementById('photoModal');
    // Close if clicking outside the image or on the X button
    if (event && event.target !== modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePhotoModal();
    }
});

// Initialize falling photos with slight randomization
window.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.falling-photo');
    photos.forEach((photo, index) => {
        // Start photos already in the falling animation (negative delay for immediate start in middle)
        const baseDuration = 6 + index * 0.5;
        // Negative delay so photos start partway through their animation
        const negativeDelay = -(baseDuration * 0.4); // Start at 40% through the animation
        const randomOffset = (Math.random() - 0.5) * 0.5; // Small random variation
        
        photo.style.animationDelay = `${negativeDelay + randomOffset}s`;
        
        // Randomize horizontal position slightly
        const randomLeft = Math.random() * 5 - 2.5; // -2.5 to 2.5
        photo.style.left = `calc(${parseFloat(getComputedStyle(photo).left)}px + ${randomLeft}%)`;
        
        // Add click listener to open preview
        photo.addEventListener('click', (e) => {
            const img = photo.querySelector('.photo-img');
            if (img.src && img.src !== '') {
                openPhotoModal(img.src);
            }
        });
    });
});

// Love Message Save
function saveLoveMessage() {
    const message = document.getElementById('loveMessage').value.trim();

    if (message === '') {
        alert('Write something sweet first! 💕');
        return;
    }

    const display = document.getElementById('messageDisplay');
    display.innerHTML = `
        <h4>💌 Your Love Note</h4>
        <p>${escapeHtml(message)}</p>
        <p style="font-style: italic; color: #666; margin-top: 15px; font-size: 0.9rem;">
            Saved at ${new Date().toLocaleString()}
        </p>
    `;
    display.classList.add('visible');

    // Save to localStorage
    localStorage.setItem('loveMessage', message);
    localStorage.setItem('messageTime', new Date().toISOString());

    // Clear textarea
    document.getElementById('loveMessage').value = '';
}

// =====================
// Forever With Me Game
// =====================
let noButtonClickAttempts = 0;
let gameWon = false;

function moveNoButton(event) {
    if (gameWon) return;
    
    const noButton = document.getElementById('noButton');
    noButtonClickAttempts++;

    // Generate random position - BIGGER DISTANCES!
    const randomX = (Math.random() - 0.5) * 600;  // Increased from 300
    const randomY = (Math.random() - 0.5) * 400;  // Increased from 200

    // Instant teleport effect
    noButton.style.transition = 'none';
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButton.classList.add('escape');

    // Funny messages after multiple attempts
    if (noButtonClickAttempts === 3) {
        noButton.textContent = 'Come on...';
    } else if (noButtonClickAttempts === 5) {
        noButton.textContent = 'You know you want to!';
    } else if (noButtonClickAttempts === 7) {
        noButton.textContent = 'I\'m not going anywhere!';
    } else if (noButtonClickAttempts === 10) {
        noButton.textContent = 'This is impossible 😂';
    } else if (noButtonClickAttempts === 15) {
        // Give up - button disappears
        setTimeout(() => {
            noButton.style.opacity = '0';
            noButton.style.pointerEvents = 'none';
            showGameResult(true);
        }, 200);
    }

    // Re-enable transition after movement
    setTimeout(() => {
        noButton.style.transition = 'all 0.2s ease';
        noButton.classList.remove('escape');
    }, 50);
}

function handleYes() {
    gameWon = true;
    showGameResult(true);
}

function showGameResult(won) {
    const resultDiv = document.getElementById('gameResult');
    const gameContainer = document.getElementById('gameContainer');
    const noButton = document.getElementById('noButton');

    if (won) {
        resultDiv.innerHTML = `
            <div class="result-message">💕 YES! I Love You So Much! 💕</div>
            <div class="result-hearts">💕 💕 💕</div>
            <p style="margin-top: 20px; color: #666; font-size: clamp(0.95rem, 1.5vw, 1.1rem);">
                Let's make forever even more magical together! 💑
            </p>
        `;
        resultDiv.classList.remove('hidden');
        noButton.style.display = 'none';
        
        // Trigger confetti
        createConfetti();
    }
}

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = ['💕', '✨', '💑', '🌹'][Math.floor(Math.random() * 4)];
            confetti.style.position = 'fixed';
            confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-30px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.opacity = '1';
            document.body.appendChild(confetti);

            const duration = Math.random() * 2000 + 1500;
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(360deg) scale(0.3)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            animation.onfinish = () => confetti.remove();
        }, i * 30);
    }
}

// Helper function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Load saved message on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedMessage = localStorage.getItem('loveMessage');
    const savedTime = localStorage.getItem('messageTime');

    if (savedMessage) {
        const display = document.getElementById('messageDisplay');
        const date = new Date(savedTime);
        display.innerHTML = `
            <h4>💌 Your Love Note</h4>
            <p>${escapeHtml(savedMessage)}</p>
            <p style="font-style: italic; color: #666; margin-top: 15px; font-size: 0.9rem;">
                Saved at ${date.toLocaleString()}
            </p>
        `;
        display.classList.add('visible');
    }
});

// Smooth scroll for navigation
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.hash) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});



// Add some confetti on page load (subtle celebration)
function createConfetti() {
    const colors = ['#c41e3a', '#ff69b4', '#ffb6d9', '#ff1493'];
    const confettiPiece = document.createElement('div');
    confettiPiece.style.position = 'fixed';
    confettiPiece.style.width = '10px';
    confettiPiece.style.height = '10px';
    confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.left = Math.random() * 100 + '%';
    confettiPiece.style.top = '-10px';
    confettiPiece.style.borderRadius = '50%';
    confettiPiece.style.pointerEvents = 'none';
    confettiPiece.style.opacity = '0.7';
    confettiPiece.style.zIndex = '9999';

    document.body.appendChild(confettiPiece);

    const animation = confettiPiece.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 0.7 },
        { transform: `translateY(${window.innerHeight}px) rotate(360deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });

    animation.onfinish = () => confettiPiece.remove();
}

// Create confetti on first load only
if (!sessionStorage.getItem('confettiShown')) {
    for (let i = 0; i < 20; i++) {
        setTimeout(createConfetti, i * 100);
    }
    sessionStorage.setItem('confettiShown', 'true');
}

console.log('🐶 Byte Buddy helped create this anniversary site! Happy 1 Year! 💕');
