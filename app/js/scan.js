// Popup (Code)
function popCode() {
    var popCode     = document.getElementById("popCode");
    var close       = popCode.getElementsByClassName("close")[0];
    // var submit      = popCode.getElementsByClassName("submit")[0];
    close.onclick   = function() { popClose(); }
    // submit.onclick  = function() { popClose(); }
    window.onclick  = function(event) { if (event.target == popCode) { popClose(); }}
    function popClose() { 
        popCode.style.display = "none";
        document.body.style.overflow = "scroll"; }
    popCode.style.display = "flex";
    document.body.style.overflow = "hidden"; }