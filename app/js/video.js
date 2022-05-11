// Popup close
function popClose(e) {
    e.closest('.popup').style.display = "none";
    document.body.style.overflow = "scroll"; }

// Popup background close
function popBgClose(e) {
    window.onclick  = function(event) { if (event.target == e) {
        e.style.display = "none";
        document.body.style.overflow = "scroll"; }}}

// Popup (關閉)
function popExit() {
    document.getElementById("popExit").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Popup (獲得點數)
function popPoint() {
    document.getElementById("popPoint").style.display = "flex";
    document.body.style.overflow = "hidden"; }