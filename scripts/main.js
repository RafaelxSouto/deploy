document.addEventListener('DOMContentLoaded', () => {
    // Adicionar efeito de flutuação aos botões
    const buttons = document.querySelectorAll('.version-btn');
    
    buttons.forEach((button, index) => {
        // Adicionar delay diferente para cada botão
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 200 * index);
        
        // Adicionar efeito de brilho ao passar o mouse
        button.addEventListener('mouseover', () => {
            const glow = document.createElement('div');
            glow.classList.add('button-glow');
            button.appendChild(glow);
            
            setTimeout(() => {
                glow.remove();
            }, 1000);
        });
    });
    
    // Adicionar efeito de digitação ao título
    const highlight = document.querySelector('.highlight');
    const originalText = highlight.textContent;
    highlight.textContent = '';
    
    let i = 0;
    const typeEffect = setInterval(() => {
        if (i < originalText.length) {
            highlight.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeEffect);
        }
    }, 100);
    
    // Adicionar efeito de paralaxe ao mover o mouse
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        buttons.forEach(button => {
            button.style.transform = `translateY(-5px) translateX(${x * 10 - 5}px)`;
        });
        
        document.querySelector('.background-animation').style.transform = 
            `translateX(${x * -20}px) translateY(${y * -20}px)`;
    });
});

// Adicionar mais ícones de livros flutuantes no fundo
function createFloatingBooks() {
    const body = document.querySelector('body');
    const books = ['📚', '📖', '📕', '📗', '📘', '📙'];
    
    for (let i = 0; i < 20; i++) {
        const book = document.createElement('div');
        book.textContent = books[Math.floor(Math.random() * books.length)];
        book.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            font-size: ${Math.random() * 2 + 1}rem;
            opacity: ${Math.random() * 0.1 + 0.05};
            animation: float ${Math.random() * 10 + 20}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            z-index: -1;
        `;
        body.appendChild(book);
    }
}

createFloatingBooks();

// Adicionar mais estilos CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
        100% { transform: translateY(0) rotate(0deg); }
    }
    
    .button-glow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: radial-gradient(circle at center, rgba(5, 255, 222, 0.8) 0%, rgba(5, 255, 222, 0) 70%);
        opacity: 0;
        animation: glow 1s ease-out;
        pointer-events: none;
    }
    
    @keyframes glow {
        0% { opacity: 0; transform: scale(0.9); }
        50% { opacity: 0.5; }
        100% { opacity: 0; transform: scale(1.5); }
    }
    
    .version-btn {
        position: relative;
        overflow: hidden;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .version-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.7s ease;
    }
    
    .version-btn:hover::before {
        left: 100%;
    }
`;

document.head.appendChild(style);