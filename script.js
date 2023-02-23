function restartTypewriter() {
  $('.typewriter').addClass('restart');
  setTimeout(function() {
    $('.typewriter').removeClass('restart');
  }, 3000); // wait 3 seconds before removing the .restart class
}

// call restartTypewriter() whenever you want to restart the animation
