document.addEventListener("DOMContentLoaded", () => {
  const testimonies = document.getElementsByClassName('testimonies');

  for (let i = 0; i < testimonies.length; i++) {
    const testimony = testimonies[i];
    if (testimony) {
      testimony.addEventListener('mouseenter', () => {
        for (let j = 0; j < testimonies.length; j++) {
          testimonies[j].style.animationPlayState = 'paused';
        }
      });

      testimony.addEventListener('mouseleave', () => {
        for (let j = 0; j < testimonies.length; j++) {
          testimonies[j].style.animationPlayState = 'running';
        }
      });
    }
  }
});
