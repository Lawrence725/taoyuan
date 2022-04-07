// Popup (餘額不足)
function popNotice() {
    var popNotice   = document.getElementById("popNotice");
    var close       = popNotice.getElementsByClassName("close")[0];
    var submit      = popNotice.getElementsByClassName("submit")[0];
    close.onclick   = function() { popNotice.style.display = "none"; }
    submit.onclick  = function() { popNotice.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popNotice) { popNotice.style.display = "none"; }}
    popNotice.style.display = "flex"; }