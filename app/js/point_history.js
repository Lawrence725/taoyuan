// Popup (Time)
function popTime() {
    var popTime     = document.getElementById("popTime");
    var close       = popTime.getElementsByClassName("close")[0];
    var submit      = popTime.getElementsByClassName("submit")[0];
    var cancel      = popTime.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popTime.style.display = "none"; }
    submit.onclick  = function() { popTime.style.display = "none"; }
    cancel.onclick  = function() { popTime.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popTime) { popTime.style.display = "none"; }}
    popTime.style.display = "flex"; }