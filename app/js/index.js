// Animation (Rotate)
function rotate(e) {
    if (e.classList.contains('rotateF'))
        { e.className = 'icon iconButton fill rotateB'; }
    else { e.className = 'icon iconButton fill rotateF'; }}

// Slideshow
var slideIndex = 1;
showSlides(1);
function plusSlides(n) {
    showSlides(slideIndex += n); }
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("banner");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; }
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); }
    slides[slideIndex-1].style.display = "flex";  
    dots[slideIndex-1].className += " active";
    // setTimeout(plusSlides(1), 2000); // Change image every 2 seconds
}