const kickBtn = document.getElementById("kickBtn");
const kickSound = new Audio("/sounds/kick.mp3");
const hihatBtn = document.getElementById("hihatBtn");
const hiHatSound = new Audio("/sounds/hihat.mp3");
const snareBtn = document.getElementById("snareBtn");
const snareSound = new Audio("/sounds/snare.mp3");

window.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "A") {
    kickSound.currentTime = 0;
    kickSound.play();
    kickBtn.classList.add("glow");
  } else if (e.key === "s" || e.key === "S") {
    hiHatSound.play();
    hiHatSound.currentTime = 0;
    hihatBtn.classList.add("glow");
  } else if (e.key === "d" || e.key === "D") {
    snareSound.play();
    snareSound.currentTime = 0;
    snareBtn.classList.add("glow");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "a" || e.key === "A") {
    kickBtn.classList.remove("glow");
  } else if (e.key === "s" || e.key === "S") {
    hihatBtn.classList.remove("glow");
  } else if (e.key === "d" || e.key === "D") {
    snareBtn.classList.remove("glow");
  }
});
