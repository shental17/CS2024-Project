window.onload = () => {
  // window.scrollTo(0, 0);
  startAnimations();  // Trigger both animations on page load
};

function startAnimations() {
  // Trigger both animations
  animateLoadingBar();
  increaseNumberAnimation('nbr', 100, 20); // Speed 40, to match the 4s duration
}

function animateLoadingBar() {
  const bar = document.getElementById('loadingBar');
  let startTime = null;

  // Animation function for the loading bar
  function animate(time) {
    if (!startTime) startTime = time;  // Initialize start time

    const elapsedTime = time - startTime; // Calculate elapsed time
    const progress = Math.min(elapsedTime / 2000, 1); // 4 seconds total duration (4000ms)

    // Set the width of the loading bar based on the progress
    bar.style.width = (progress * 100) + '%';

    if (progress < 1) {
      requestAnimationFrame(animate); // Continue the animation
    } else {
      // Add delay before triggering the slide-up (e.g., 1 second after the bar finishes)
      setTimeout(() => {
        slideUpLoadingPage(); // Trigger the slide-up after delay
      }, 800); // 1000ms delay
    }
  }

  // Start the animation
  requestAnimationFrame(animate);
}

function increaseNumberAnimation(elementId, endNumber, speed) {
  const element = document.getElementById(elementId);
  let currentNumber = 0;
  let startTime = null;

  // Animation function for number increment
  function animate(time) {
    if (!startTime) startTime = time;  // Initialize start time

    const elapsedTime = time - startTime; // Calculate elapsed time
    const progress = Math.min(elapsedTime / 2000, 1); // 4 seconds total duration (4000ms)

    // Increment the number based on progress
    currentNumber = Math.floor(progress * endNumber);
    element.innerHTML = currentNumber;

    if (progress < 1) {
      requestAnimationFrame(animate); // Continue the animation
    }
  }

  // Start the animation
  requestAnimationFrame(animate);
}

function slideUpLoadingPage() {
  const loadingPage = document.querySelector('.loading-page');
  
  // Apply CSS transform to slide the loading page up
  loadingPage.style.transition = 'transform 0.5s ease-out'; // Slide duration of 1 second
  loadingPage.style.transform = 'translateY(-100%)'; // Move the page up by its full height
  
  // Optionally, hide it completely after the animation (if you want to completely remove it)
  setTimeout(() => {
    loadingPage.style.display = 'none'; // Hide the element after the animation completes
  }, 500); // Wait for the slide-up animation to finish (1 second)
}
