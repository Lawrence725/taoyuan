// Popup close
function popClose(e) {
    if (e.classList.contains('popup'))
        window.onclick  = function(event) {
            if (event.target == e) {
                e.children[0].style.animationName = "popdown";
                setTimeout(function(){
                    e.style.display = "none";
                    e.children[0].style.animationName = "popup";
                }, 500); }}
    else if (!(e.classList.contains('popBody'))) {
        e.closest('.popup').children[0].style.animationName = "popdown";
        setTimeout(function(){
            e.closest('.popup').style.display = "none";
            e.closest('.popup').children[0].style.animationName = "popup";
        }, 500); }
    document.body.style.overflow = "scroll"; }

// Popup (獲得點數)
function popDetail() {
    document.getElementById("popDetail").style.display = "flex";
    document.body.style.overflow = "hidden"; }

// Popup (下拉選單)
function popDropdown() {
    var popDropdown = document.getElementById("popDropdown");
    var close       = popDropdown.getElementsByClassName("close")[0];
    close.onclick   = function() { popClose(this); }
    popDropdown.onclick  = function() { popClose(this); }
    popDropdown.style.display           = "flex";
    document.body.style.overflow        = "hidden"; }

// Popup (Time)
function popTime() {
    var popTime     = document.getElementById("popTime");
    var close       = popTime.getElementsByClassName("close")[0];
    var submit      = popTime.getElementsByClassName("submit")[0];
    var cancel      = popTime.getElementsByClassName("cancel")[0];
    close.onclick   = function() { popClose(this); }
    submit.onclick  = function() { popClose(this); }
    cancel.onclick  = function() { popClose(this); }
    popTime.onclick  = function() { popClose(this); }
    // function popClose() { 
    //     popTime.style.display           = "none";
    //     document.body.style.overflow    = "scroll"; }
    popTime.style.display               = "flex";
    document.body.style.overflow        = "hidden"; }