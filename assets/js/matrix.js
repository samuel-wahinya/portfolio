const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = canvas.width / 2 - 10;
const numParticles = 120;
const particles = [];

for (let i = 0; i < numParticles; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const r = radius + Math.random() * 10;
    const speed = 0.01 + Math.random() * 0.02;
    particles.push({ angle, r, speed });
}

function drawMatrixCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        const x = centerX + p.r * Math.cos(p.angle);
        const y = centerY + p.r * Math.sin(p.angle);
        ctx.fillStyle = "rgba(0, 170, 255, 0.7)";
        ctx.font = "12px monospace";
        const char = String.fromCharCode(33 + Math.random() * 94);
        ctx.fillText(char, x, y);
        p.angle += p.speed;
    });

    requestAnimationFrame(drawMatrixCircle);
}

drawMatrixCircle();

window.addEventListener("resize", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});
