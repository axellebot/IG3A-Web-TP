function testFonctionnalites() {
    document.querySelector("#geoloc").innerHTML = Modernizr.geolocation ? "pris en charge" : "non pris en charge";
    document.querySelector("#touch").innerHTML = Modernizr.touch ? "pris en charge" : "non pris en charge";
    document.querySelector("#svg").innerHTML = Modernizr.svg ? "pris en charge" : "non pris en charge";
    document.querySelector("#canvas").innerHTML = Modernizr.canvas ? "pris en charge" : "non pris en charge";
}

window.onload = testFonctionnalites;