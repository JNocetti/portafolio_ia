document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.container, .carousel, footer');
  elements.forEach(element => {
      element.style.opacity = 0;
      element.style.transition = "opacity 1.5s ease";
      setTimeout(() => {
          element.style.opacity = 1;
      }, 200);
  });
});
