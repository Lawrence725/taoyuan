// Popup (Time)
function popTime() {
    var popTime     = document.getElementById("popTime");
    var close       = popTime.getElementsByClassName("close")[0];
    var submit      = popTime.getElementsByClassName("submit")[0];
    var cancel      = popTime.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popClose(); }
    submit.onclick  = function() { popClose(); }
    cancel.onclick  = function() { popClose(); }
    window.onclick  = function(event) { if (event.target == popTime) { popClose(); }}
    function popClose() { 
        popTime.style.display           = "none";
        document.body.style.overflow    = "scroll"; }
    popTime.style.display               = "flex";
    document.body.style.overflow        = "hidden"; }