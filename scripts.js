
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.container, .carousel, footer');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = "opacity 1.5s ease";
        setTimeout(() => {
            element.style.opacity = 1;
        }, 200);
    });

    const mainImage = document.querySelector('.main-image');
    mainImage.addEventListener('mouseover', () => {
        mainImage.style.transform = "scale(1.05)";
        mainImage.style.transition = "transform 0.3s ease";
    });
    mainImage.addEventListener('mouseout', () => {
        mainImage.style.transform = "scale(1)";
    });
});
