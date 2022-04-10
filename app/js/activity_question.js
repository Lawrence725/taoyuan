// Popup (答案錯誤)
function popWrong() {
    var popWrong    = document.getElementById("popWrong");
    var close       = popWrong.getElementsByClassName("close")[0];
    var submit      = popWrong.getElementsByClassName("submit")[0];
    close.onclick   = function() { popClose(); }
    submit.onclick  = function() { popClose(); }
    window.onclick  = function(event) { if (event.target == popWrong) { popClose(); }}
    function popClose() { 
        popWrong.style.display          = "none";
        document.body.style.overflow    = "scroll"; }
    popWrong.style.display              = "flex";
    document.body.style.overflow        = "hidden"; }

// Popup (答案正確)
function popCorrect() {
    var popCorrect  = document.getElementById("popCorrect");
    popCorrect.style.display = "flex"; }