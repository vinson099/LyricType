const playButton = document.getElementById('playButton');
const blurLayer = document.getElementById('blurLayer');
const lyricInput = document.getElementById('lyricInput');

playButton.addEventListener('click', function() {
  this.classList.add('clicked');
  // get a nodelist of options
  var options = document.querySelectorAll('.options');
    //convert nodelist into array and foreach loop thru
    Array.from(options).forEach(function(option, index) {
    // Get the height of the option
    const optionHeight = option.offsetHeight;
    
    // Calculate the top offset for each option
    const topOffset = index * (optionHeight + 10); // Adjust the spacing between options
    
    // Apply the top offset
    option.style.top = topOffset + 'px';
  });

  
  // do this after the hamburger menu
  blurLayer.classList.add('fade-out');
  lyricInput.focus(); // focus text input when button is pressed
});

