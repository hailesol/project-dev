var i = 0;
var txt = 'Coming soon...';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".typewriter h1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(function() {
      document.querySelector(".typewriter h1").innerHTML = "";
      i = 0;
      typeWriter();
    }, 2000); // delay before restarting the animation (in milliseconds)
  }
}

typeWriter(); // start the animation
setInterval(function() {
  document.querySelector(".typewriter h1").innerHTML = "";
  i = 0;
  typeWriter();
}, 15000); // repeat the animation every 15 seconds (in milliseconds)
