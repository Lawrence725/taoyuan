// Popup close
function popClose(e) {
    e.closest('.popup').style.display = "none";
    document.body.style.overflow = "scroll"; }

// Popup background close
function popBgClose(e) {
    window.onclick  = function(event) { if (event.target == e) {
        e.style.display = "none";
        document.body.style.overflow = "scroll"; }}}

// Popup (獲得點數)
function popPoint() {
    document.getElementById("popPoint").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Popup (無問答)
function popNoQA() {
    document.getElementById("popNoQA").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Popup (上方小通知)
function popNotice() {
    document.getElementById("popNotice").style.display = "flex";
    document.getElementById("popNotice").classList.add("moveIn");
    setTimeout(function (){
        document.getElementById("popNotice").classList.remove("moveIn");
    }, 500); }

function popNoticeClose(e) {
    e.classList.add("moveOut");
    setTimeout(function (){
        e.style.display = "none";
        e.classList.remove("moveOut");
    }, 500);}

    // var elNotice = document.getElementById('popNotice')
    // swipedetect(elNotice, function(swipedir){
    //     // swipedir contains either "none", "left", "right", "up", or "down"
    //     if (swipedir =='up') {
    //         elNotice.classList.add("moveOut");
    //         setTimeout(function (){
    //             elNotice.style.display = "none";
    //             elNotice.classList.remove("moveOut");
    //         }, 500); }})

// Mobile screen fix
const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)}
window.addEventListener('resize', appHeight)
appHeight()

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
function swipedetect(el, callback){
    var touchsurface = el, swipedir, startX, startY, distX, distY, elapsedTime, startTime,
    threshold = 50, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    handleswipe = callback || function(swipedir){}
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }}
        handleswipe(swipedir)
        e.preventDefault()
    }, false)}
var el = document.getElementById('banners')
swipedetect(el, function(swipedir){
    // swipedir contains either "none", "left", "right", "up", or "down"
    if (swipedir =='left')
        plusSlides(1)
    if (swipedir =='right')
        plusSlides(-1) })