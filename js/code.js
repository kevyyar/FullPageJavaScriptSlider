let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  currentImg = 0;

// Clear All Images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// The SlideStart
function startSlider() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show Previous Image
function sliderLeft() {
  reset();
  sliderImages[currentImg - 1].style.display = "block";
  currentImg--;
}

// Show Next Image
function sliderRight() {
  reset();
  sliderImages[currentImg + 1].style.display = "block";
  currentImg++;
}

// Left Arrow Click Event
arrowLeft.addEventListener("click", function () {
  console.log("btn clicked");
  if (currentImg === 0) {
    currentImg = sliderImages.length;
  }

  sliderLeft()
})

// Right Arrow Click Event
arrowRight.addEventListener("click", function () {
  console.log("btn clicked");
  if (currentImg === sliderImages.length - 1) {
    currentImg = -1;
  }

  sliderRight()
})


startSlider();