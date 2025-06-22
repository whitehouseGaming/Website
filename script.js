document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Create animation elements
  const createParticles = () => {
    const particles = document.createElement('div');
    particles.className = 'hero-particles';
    hero.appendChild(particles);
    
    // Add colored particles
    const colors = ['#c77dff', '#9ef01a', '#2196f3', '#f72585', '#80ed99'];
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.backgroundColor = colors[i % colors.length];
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = Math.random() * 0.3 + 0.1;
      particles.appendChild(particle);
    }
  };

  // Animate particles
  const animateParticles = () => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      const speedX = (Math.random() - 0.5) * 0.2;
      const speedY = (Math.random() - 0.5) * 0.2;
      let x = parseFloat(particle.style.left);
      let y = parseFloat(particle.style.top);

      const move = () => {
        x += speedX;
        y += speedY;
        
        // Wrap around edges
        if (x > 100) x = 0;
        if (x < 0) x = 100;
        if (y > 100) y = 0;
        if (y < 0) y = 100;

        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        requestAnimationFrame(move);
      };
      
      move();
    });
  };

  // Text animation
  const animateText = () => {
    const h2 = hero.querySelector('h2');
    if (!h2) return;
    
    let angle = 0;
    const float = () => {
      angle += 0.01;
      h2.style.transform = `translateY(${Math.sin(angle) * 10}px)`;
      requestAnimationFrame(float);
    };
    float();
  };

  // Initialize all animations
  createParticles();
  animateParticles();
  animateText();
});