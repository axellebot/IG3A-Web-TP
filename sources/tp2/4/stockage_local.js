var KEY_FIRST_NAME = "firstName";
var KEY_LAST_NAME = "lastName";
var KEY_POST_CODE = "postCode";

function initialize() {
    var bSupportsLocal = (('localStorage' in window) && window['localStorage'] !== null);
    console.log("Test 1");

    if (!bSupportsLocal) {
        document.getElementById('infoform').innerHTML = "<p>Désolé, ce navigateur ne supporte pas l’API Web Storage du W3C.</p>"
        return;
    }
    console.log("Test 2");
    if (window.localStorage.length !== 0) {
        console.log("Input replace");
        document.getElementById(KEY_FIRST_NAME).value = window.localStorage.getItem(KEY_FIRST_NAME);
        document.getElementById(KEY_LAST_NAME).value = window.localStorage.getItem(KEY_LAST_NAME);
        document.getElementById(KEY_POST_CODE).value = window.localStorage.getItem(KEY_POST_CODE);
    }
}

function storeLocalContent(fName, lName, pCode) {
    window.localStorage.setItem(KEY_FIRST_NAME, fName);
    window.localStorage.setItem(KEY_LAST_NAME, lName);
    window.localStorage.setItem(KEY_POST_CODE, pCode);
}

function clearLocalContent() {
    //window.localStorage.clear(); // Suppression des autres clés utilisés par d'autres scripts donc attention
    window.localStorage.removeItem(KEY_FIRST_NAME);
    window.localStorage.removeItem(KEY_LAST_NAME);
    window.localStorage.removeItem(KEY_POST_CODE);
}

document.addEventListener('DOMContentLoaded', function() {
    initialize();
});


