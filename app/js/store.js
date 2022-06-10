// Scroll to top
document.getElementById('main').onscroll = function() {
    var top = document.getElementById('main').scrollTop == 0;
    document.getElementById('toTop').style.display = top ? 'none' : 'flex';
};
function toTop() {
    document.getElementById("main").scrollTo({top: 0, behavior: 'smooth'}); }