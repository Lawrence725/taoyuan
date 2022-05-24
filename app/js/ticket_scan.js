// Popup close
function popClose(e) {
    if (e.classList.contains('popup'))
        window.onclick  = function(event) {
            if (event.target == e)
                e.style.display = "none"; }
    else if (!(e.classList.contains('popBody')))
        e.closest('.popup').style.display = "none";
    document.body.style.overflow = "scroll"; }

// Popup (Ticket)
function popTicket() {
    document.getElementById("popTicket").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Popup (Stamp)
function popStamp() {
    document.getElementById("popStamp").style.display = "flex";
    document.body.style.overflow = "hidden"; }