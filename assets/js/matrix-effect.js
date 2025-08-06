/**
 * Cria o efeito de "chuva de código" da Matrix em um canvas.
 */
export function initializeMatrixEffect() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) {
        console.error('Elemento canvas com id "matrix-canvas" não encontrado.');
        return;
    }
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let columns = Math.floor(width / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops.push(0);
    }

    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:"\',.<>/?`~';

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#00FF41';
        ctx.font = '20px matrix-code';

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        columns = Math.floor(width / 20);
        drops.length = 0;
        for (let i = 0; i < columns; i++) {
            drops.push(0);
        }
    });
}