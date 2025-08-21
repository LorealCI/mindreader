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
