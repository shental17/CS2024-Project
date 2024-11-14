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


document.addEventListener("scroll", function() {

  const navbar = document.getElementById("navbar");
  const scrollHeight = 50;

  if (window.scrollY > scrollHeight) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
  
});

document.addEventListener("DOMContentLoaded", () => {
  const shiftElement = document.getElementsByClassName("cart-link")[0];
  const offcanvasNavbar = document.getElementById("offcanvasDarkNavbar");

  // When the offcanvas is shown, shift the top position
  offcanvasNavbar.addEventListener("show.bs.offcanvas", () => {
    shiftElement.style.top = "76px"; // Adjust as needed
  });

  // When the offcanvas is hidden, reset the top position
  offcanvasNavbar.addEventListener("hide.bs.offcanvas", () => {
    shiftElement.style.top = "0";
  });
});

