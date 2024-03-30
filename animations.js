const playButton = document.getElementById('playButton');
const blurLayer = document.getElementById('blurLayer');
const lyricInput = document.getElementById('lyricInput');

playButton.addEventListener('click', function() {
  this.classList.add('clicked');
  blurLayer.classList.add('fade-out');
  lyricInput.focus(); // focus text input when button is pressed
});