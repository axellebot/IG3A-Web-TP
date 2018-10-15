function geoSuccess(positionInfo) {
/*
 * Recupere toutes les informations possibles sur la position de l'utilisateur:
 * - Longitude
 * - Latitude
 * - Precision
 * - Altitude
 * - Precision Altitude
 * - Cap
 * - Vitesse
 * - Distance de l'ESIREM
 */

	document.getElementById("longitude").innerHTML = positionInfo.coords.longitude;
	document.getElementById("latitude").innerHTML = positionInfo.coords.latitude;
	document.getElementById("precision").innerHTML = positionInfo.coords.accuracy;
	document.getElementById("altitude").innerHTML = positionInfo.coords.altitude;
	document.getElementById("precisionAltitude").innerHTML = positionInfo.coords.altitudeAccuracy;
	document.getElementById("cap").innerHTML = positionInfo.coords.heading;
	document.getElementById("vitesse").innerHTML = positionInfo.coords.speed;
	document.getElementById("distance").innerHTML = calculDistance(
			{latitude : positionInfo.coords.latitude ,
			 longitude : positionInfo.coords.longitude },
			{latitude : 47.3121519, /*Position de l'esirem*/
			 longitude : 5.0039326 });
}


function geoError(positionError) {
//Donne un message d'erreur a afficher a l'utilisateur pour qu'il regle l'erreur
/*Erreur sur positionError.code qui existe pas*/
	if (positionError.code === 1)
		alert("L’utilisateur ne souhaite pas partager sa position");
	else if (positionError.code === 2)
		alert("Impossible de déterminer une position");
	else if (positionError.code === 3)
		alert("Délai de recherche de position trop long");
}


function getLocation() {
	if (Modernizr.geolocation) { //Envoie true si geoLocation est supporte
		navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
	}
}


function calculDistance(startCoords, destCoords) {
	var startLatRads = degreesEnRadians(startCoords.latitude);
	var startLongRads = degreesEnRadians(startCoords.longitude);
	var destLatRads = degreesEnRadians(destCoords.latitude);
	var destLongRads = degreesEnRadians(destCoords.longitude);
	var Radius = 6371; // rayon de la Terre en km
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
	Math.cos(startLatRads) * Math.cos(destLatRads) *
	Math.cos(startLongRads - destLongRads)) * Radius;
	return distance;
}

function degreesEnRadians(degrees) {
	radians = (degrees * Math.PI)/180;
	return radians;
}


window.onload = getLocation();
//getLocation est appele au chargement de la page}
