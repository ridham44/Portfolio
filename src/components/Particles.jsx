import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame;
    let width;
    let height;

    const particles = [];

    const PARTICLE_COUNT = 65;
    const CONNECTION_DISTANCE = 140;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const getThemeValues = () => {
      const styles = getComputedStyle(document.documentElement);

      return {
        color:
          styles
            .getPropertyValue("--particle-color")
            .trim() || "96,165,250",

        opacity:
          parseFloat(
            styles.getPropertyValue("--particle-opacity")
          ) || 0.35,
      };
    };

    const createParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,

      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,

      radius: Math.random() * 1.8 + 0.5,

      alpha: Math.random() * 0.4 + 0.2,
    });

    resize();

    window.addEventListener("resize", resize);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      const { color, opacity } = getThemeValues();

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${color},${p.alpha})`;

        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${color},0.7)`;

        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const lineOpacity =
              (1 - dist / CONNECTION_DISTANCE) *
              opacity;

            ctx.beginPath();

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            ctx.strokeStyle = `rgba(${color},${lineOpacity})`;

            ctx.lineWidth = 0.8;

            ctx.stroke();
          }
        }
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,

        width: "100%",
        height: "100%",

        zIndex: 0,

        pointerEvents: "none",

        opacity: 1,

        mixBlendMode: "screen",
      }}
    />
  );
}