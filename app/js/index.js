// const { $, jQuery } = require('jquery');
var b = require('bootstrap');
const ipcRenderer = require('electron').ipcRenderer;
var games = [];
// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;


function plusButtonClicked() {
    console.log("Plus clicked");
}

function minusButtonClicked() {
    console.log("Minus clicked");
}

function sendForm(event) {
    event.preventDefault() // stop the form from submitting
    let gameName = document.getElementById("gameTileInput").value;
    // TODO: get count title

    // example array what the data will look like
    // var testArray = [{name: "sm64", count: 0}, {name: "wow", count: 666}, ];

    // grab the goodies??
    var formCount = $('div.form-row').length - 1;

    for (var i = 0; i < formCount; i++) {

    }

    let gameCount = document.getElementById("countInput").value;
    ipcRenderer.send('form-submission', gameName, gameCount)
}

var inputCount = 0;
function addAnotherFormInput() {
    var original = document.getElementById('countInputDiv' + inputCount);
    var clone = original.cloneNode(true);
    console.log({ clone });
    clone.id = "countInputDiv" + ++inputCount;
    original.parentNode.appendChild(clone);
    console.log("I duplicated");
}

// $(function testing() {
//     var nb = $('div.wrappedDiv').length;
//     console.log(nb);
// })