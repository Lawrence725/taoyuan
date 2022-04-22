// Popup (Invite)
function popInvite() {
    var popInvite   = document.getElementById("popInvite");
    var close       = popInvite.getElementsByClassName("close")[0];
    close.onclick   = function() { popClose(); }
    window.onclick  = function(event) { if (event.target == popInvite) { popClose(); }}
    function popClose() { 
        popInvite.style.display = "none";
        document.body.style.overflow = "scroll"; }
    popInvite.style.display = "flex";
    document.body.style.overflow = "hidden"; }