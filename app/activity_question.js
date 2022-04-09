// Popup (答案錯誤)
function popWrong() {
    var popWrong    = document.getElementById("popWrong");
    var close       = popWrong.getElementsByClassName("close")[0];
    var submit      = popWrong.getElementsByClassName("submit")[0];
    close.onclick   = function() { popWrong.style.display = "none"; }
    submit.onclick  = function() { popWrong.style.display = "none"; }
    window.onclick  = function(event) { if (event.target == popWrong) { popWrong.style.display = "none"; }}
    popWrong.style.display = "flex"; }

// Popup (答案正確)
function popCorrect() {
    var popCorrect  = document.getElementById("popCorrect");
    popCorrect.style.display = "flex"; }