const text = document.querySelector(".typewriter h1");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
var i = 0;
var txt = 'Coming soon...';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("coming-soon").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(function() {
      document.getElementById("coming-soon").innerHTML = "";
      i = 0;
      typeWriter();
    }, 2000); // delay before restarting the animation (in milliseconds)
  }
}

typeWriter(); // start the animation
setInterval(function() {
  document.getElementById("coming-soon").innerHTML = "";
  i = 0;
  typeWriter();
}, 15000); // repeat the animation every 15 seconds (in milliseconds)
