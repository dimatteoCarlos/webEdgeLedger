//GeoLocation

var loc;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  const error = (document.getElementById('mapMsg').innerHTML =
    'Geolocation is not supported by this browser.');
  error.style.display = 'block';
  loc = { lat: 40.361145, lng: -71.057083 }; //PRUEBA
}

function showPosition(position) {
  loc = { lat: position.coords.latitude, lng: position.coords.longitude };
}

// Initialize and add the map
function initMap() {
  // loc for a fixed location
  // loc = { lat: 42.361145, lng: -71.057083 };

  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

//end of Geolocation

//*************** */
