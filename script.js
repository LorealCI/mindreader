function startReading() {
  const number = document.getElementById('userNumber').value;
  if (!number) {
    alert("Please enter a number!");
    return;
  }

  const loadingSection = document.getElementById('loadingSection');
  const progressBar = document.getElementById('progressBar');
  const loadingText = document.getElementById('loadingText');

  loadingSection.classList.remove('hidden');
  progressBar.style.width = '0%';
  loadingText.innerText = 'Initializing mind link...';

const messages = [
    'SCANNING BRAIN WAVES...',
    'AVOIDING YOUR WEIRD THOUGHTS...',
    'UNCOVERING REPRESSED CALCULATOR MEMORIES...',
    'HOLD ON, ALMOST THERE...',
    'GOT IT AND ITS WEIRDLY ACCURATE!'
];

  let progress = 0;
  let step = 0;

  const interval = setInterval(() => {
    progress += 20;
    progressBar.style.width = progress + '%';
    loadingText.innerText = messages[step];

    step++;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        // Hide the loading section and main container
        loadingSection.classList.add('hidden');
        const container = document.querySelector('.container');
        container.classList.add('hidden');
        
        const resultSection = document.getElementById('resultSection');
        const resultText = document.getElementById('resultText');
        
        resultText.innerText = `The number you were thinking of is ${number}!`;
        resultSection.classList.remove('hidden');
        
        // Trigger firework animation
        createFirework();
        
        // Resets the progress bar
        progressBar.style.width = '0%';
      }, 500);
    }
  }, 2000); // each interval lasts 2 seconds
}

function resetGame() {
  // Hides the result section
  const resultSection = document.getElementById('resultSection');
  resultSection.classList.add('hidden');
  
  // Show the main container again
  const container = document.querySelector('.container');
  container.classList.remove('hidden');
  
  // Clear the input field
  document.getElementById('userNumber').value = '';
}

function createFirework() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#a8e6cf', '#ffaaa5'];
  
  // Create multiple fireworks at different positions
  for (let f = 0; f < 3; f++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.className = 'firework';
      
      // Random position
      firework.style.left = Math.random() * 80 + 10 + '%';
      firework.style.top = Math.random() * 60 + 20 + '%';
      
      document.body.appendChild(firework);
      
      // Create particles for this firework
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        
        // Random color
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Calculate direction for particle explosion
        const angle = (i * 30) * Math.PI / 180;
        const distance = 50 + Math.random() * 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.setProperty('--x', x + 'px');
        particle.style.setProperty('--y', y + 'px');
        
        // Update the animation to use CSS variables
        particle.style.animation = `firework-explosion-${i} 1.5s ease-out forwards`;
        
        // Create unique keyframe for each particle
        const style = document.createElement('style');
        style.textContent = `
          @keyframes firework-explosion-${i} {
            0% {
              opacity: 1;
              transform: translate(0, 0) scale(0);
            }
            50% {
              opacity: 1;
              transform: translate(${x}px, ${y}px) scale(1);
            }
            100% {
              opacity: 0;
              transform: translate(${x * 1.3}px, ${y * 1.3}px) scale(0.3);
            }
          }
        `;
        document.head.appendChild(style);
        
        firework.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            document.head.removeChild(style);
          }
        }, 1500);
      }
      
      // Remove firework container after all particles are done
      setTimeout(() => {
        if (firework.parentNode) {
          document.body.removeChild(firework);
        }
      }, 1600);
      
    }, f * 200); // Stagger fireworks
  }
}
