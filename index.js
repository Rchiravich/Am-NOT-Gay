const clickButton = document.getElementById('Answer');

  clickButton.addEventListener('click', () => {
    alert('Hahahahahaha You are Gay!!');
  });

const button = document.getElementById('Moving');

  button.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  });

  const resetButton = document.getElementById('Reset');

  resetButton.addEventListener('click', () => {
    
    button.style.left = '55%';
    button.style.top = '20%';
});
