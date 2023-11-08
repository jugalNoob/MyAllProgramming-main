function toggleAnimation() {
    var animationButton = document.getElementById("animation-button");
    var allIone = document.querySelector(".all-ione");
  
    if (allIone.classList.contains("animation-paused")) {
      allIone.classList.remove("animation-paused");
      animationButton.textContent = "Pause";
    } else {
      allIone.classList.add("animation-paused");
      animationButton.textContent = "Play";
    }
  }
  