const { $, jQuery } = require('jquery');
var b = require('bootstrap');
const ipcRenderer = require('electron').ipcRenderer;

var games = [];
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


function plusButtonClicked() {
    console.log("Plus clicked");
}

function minusButtonClicked() {
    console.log("Minus clicked");
}

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let gameName = document.getElementById("gameTileInput").value;
    let gameCount = document.getElementById("countInput").value;
    ipcRenderer.send('form-submission', gameName, gameCount)
}