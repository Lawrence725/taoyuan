// All Popup (Click outside popup close)
window.onclick = function(event) {
    if (event.target == popResult) {
        popResult.style.display = "none"; }}

// Popup (Result)
var popResult    = document.getElementById("popResult");

function result() { popResult.style.display = "flex"; }

function ani() {
    document.getElementById('pockets').className = 'hide pockets itemH width height middle';
    document.getElementById('buttons').className = 'hide buttons itemH width middle';
    document.getElementById('pocketH').className = 'animation pocketH itemH height middle';
    setTimeout( function () { 
        popResult.style.display = "flex";
        document.getElementById('pockets').className = 'pockets itemH width height middle';
        document.getElementById('buttons').className = 'buttons itemH width middle';
        document.getElementById('pocketH').className = 'pocketH itemH height middle';
    }, 1500 ); }