const {$,jQuery} = require('jquery');
var b = require('bootstrap');

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;


function plusButtonClicked(){
    console.log("Plus clicked");
}

function minusButtonClicked(){
    console.log("Minus clicked");
}