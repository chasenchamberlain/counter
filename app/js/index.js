// const { $, jQuery } = require('jquery');
var b = require('bootstrap');
const { nodeName } = require('jquery');
const ipcRenderer = require('electron').ipcRenderer;
var games = [];

// this is what gives our cloned form inputs correct ids
var inputCount = 0;
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
    // var formCount = $('div.form-row').length - 1;
    for (var i = 0; i <= inputCount; i++) {
        let countInputTitle = document.getElementById("countTitle" + i).value;
        let countInputCount = document.getElementById("countInput" + i).value;

        var count = { [countInputTitle]: countInputCount };
        games.push(count);
    }
    console.log({ games });
    // let gameCount = document.getElementById("countInput").value;
    // ipcRenderer.send('form-submission', gameName, gameCount)
}

function addAnotherFormInput() {
    var original = document.getElementById('countInputDiv0');
    var clone = original.cloneNode(true);
    console.log({ clone });
    clone.id = "countInputDiv" + ++inputCount;

    // Testing weird things.
    let kids = clone.childNodes;
    console.log("NUMBER===" + inputCount)
    $(clone).find("#countTitle0").attr("id", 'countTitle' + inputCount);
    $(clone).find("#countInput0").attr("id", 'countInput' + inputCount);
    original.parentNode.appendChild(clone);
    console.log("-------");
    console.log(kids[1]);
    console.log(kids[3]);
}

// $(function testing() {
//     var nb = $('div.wrappedDiv').length;
//     console.log(nb);
// })