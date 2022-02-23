// Popup (Privacy)
function popPrivacy() {
    var popPrivacy  = document.getElementById("popPrivacy");
    var close       = popPrivacy.getElementsByClassName("close")[0];
    var submit      = popPrivacy.getElementsByClassName("submit")[0];
    close.onclick   = function() { popPrivacy.style.display = "none"; }
    submit.onclick  = function() { popPrivacy.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popPrivacy) { popPrivacy.style.display = "none"; }}
    popPrivacy.style.display = "flex"; }