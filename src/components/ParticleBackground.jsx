import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ theme = 'space' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: null, y: null, radius: 140 };
    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

    // ML ENGINEER NEURAL NETWORK VIBE
    // Nodes cluster and connect heavily like synapses
    const particleCount = Math.floor(window.innerWidth / 12); 
    const particles = [];
    const colors = ['#d946ef', '#ec4899', '#8b5cf6', '#a855f7', '#6366f1'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 1.5;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.3;
        this.pulse = Math.random() * 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0; else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0; else if (this.y < 0) this.y = height;

        // Neural pulse effect (size changes slightly)
        this.size += Math.sin(Date.now() * this.pulse * 0.05) * 0.1;
        this.size = Math.max(1, Math.min(this.size, 4));

        // Neural attraction (nodes pull toward each other slightly if very close)
        // Kept simple for performance: mouse attracts strongly like a major activation node
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += (dx / distance) * force * 2.5; // Strong pull
            this.y += (dy / distance) * force * 2.5;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const connectSynapses = () => {
       const maxDistance = 130;
       for (let a = 0; a < particles.length; a++) {
         for (let b = a + 1; b < particles.length; b++) {
           const dx = particles[a].x - particles[b].x;
           const dy = particles[a].y - particles[b].y;
           const distance = Math.sqrt(dx * dx + dy * dy);

           if (distance < maxDistance) {
             // Thicker, brighter lines for "activations"
             const opacity = (1 - distance / maxDistance) * 0.35;
             ctx.save();
             ctx.beginPath();
             ctx.strokeStyle = '#d946ef'; // Magenta neural link
             ctx.globalAlpha = opacity;
             ctx.lineWidth = opacity * 4; // Dynamic width based on proximity
             ctx.moveTo(particles[a].x, particles[a].y);
             ctx.lineTo(particles[b].x, particles[b].y);
             ctx.stroke();
             ctx.restore();
           }
         }
       }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectSynapses();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-80" />;
};
export default ParticleBackground;
