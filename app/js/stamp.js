// Popup close
function popClose(e) {
    if (e.classList.contains('popup'))
        window.onclick  = function(event) {
            if (event.target == e)
                e.style.display = "none"; }
    else if (!(e.classList.contains('popBody')))
        e.closest('.popup').style.display = "none";
    document.body.style.overflow = "scroll"; }

// Popup (Code)
function popCode() {
    document.getElementById("popCode").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Popup (History)
function popHistory() {
    document.getElementById("popHistory").style.display = "flex";
    document.body.style.overflow = "hidden"; }