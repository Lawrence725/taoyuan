// Popup (餘額不足)
function popNotice() {
    var popNotice   = document.getElementById("popNotice");
    var close       = popNotice.getElementsByClassName("close")[0];
    var submit      = popNotice.getElementsByClassName("submit")[0];
    close.onclick   = function() { popClose(); }
    submit.onclick  = function() { popClose(); }
    window.onclick  = function(event) { if (event.target == popNotice) { popClose(); }}
    function popClose() { 
        popNotice.style.display         = "none";
        document.body.style.overflow    = "scroll"; }
    popNotice.style.display             = "flex";
    document.body.style.overflow        = "hidden"; }