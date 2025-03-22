// Configurar data de lançamento (1 semana a partir de agora)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 7);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Animação de livros flutuantes
function createFloatingBooks() {
    const bookContainer = document.getElementById('bookContainer');
    const books = ['📕', '📗', '📘', '📙', '📖'];

    for (let i = 0; i < 15; i++) {
        const book = document.createElement('div');
        book.textContent = books[Math.floor(Math.random() * books.length)];
        book.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 2 + 1}rem;
            opacity: ${Math.random() * 0.5 + 0.5};
            animation: float ${Math.random() * 10 + 8}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            transform: translateX(${Math.random() * 30 - 15}px);
        `;
        bookContainer.appendChild(book);
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    createFloatingBooks();
});

// Efeito de interatividade nos cards de tempo
document.querySelectorAll('.time-box').forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1) rotate(0deg)';
    });
});