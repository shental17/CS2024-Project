document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lenis
  const lenis = new Lenis({
      duration: 1.1, // duration of the scroll effect
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smooth: true, // enable smooth scrolling
      smoothTouch: true // enable smooth scrolling for touch devices
  });

  // Update function to animate
  function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
