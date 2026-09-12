export function initParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return () => {};

    const ctx = canvas.getContext('2d', { alpha: true });
    let particles = [];
    let animationFrameId;
    let width, height;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Config
    const ACCENT_COLOR = 'rgba(0, 212, 170, {opacity})';
    const MAX_PARTICLES = 70;
    const CONNECT_DISTANCE = 150;

    function resize() {
        if (!canvas.parentElement) return;
        width = canvas.parentElement.clientWidth;
        height = canvas.parentElement.clientHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5; // Very slow drift
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1; // 1-3px
            this.opacity = Math.random() * 0.4 + 0.1; // 0.1-0.5
        }

        update() {
            if (prefersReducedMotion) return;

            this.x += this.vx;
            this.y += this.vy;

            // Wrap around edges
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = ACCENT_COLOR.replace('{opacity}', this.opacity.toString());
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = [];
        const numParticles = Math.min(MAX_PARTICLES, Math.floor((width * height) / 15000)); // Responsive count
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        // Draw connections
        if (!prefersReducedMotion) {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECT_DISTANCE) {
                        const opacity = (1 - distance / CONNECT_DISTANCE) * 0.1; // Max 0.1 opacity
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = ACCENT_COLOR.replace('{opacity}', opacity.toString());
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        }

        if (!prefersReducedMotion) {
            animationFrameId = requestAnimationFrame(animate);
        }
    }

    window.addEventListener('resize', () => {
        resize();
        if (prefersReducedMotion) {
            animate(); // Redraw static particles
        }
    });

    init();
    animate();

    return function destroy() {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resize);
    };
}
