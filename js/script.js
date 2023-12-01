function initMap() {
  var location = {lat: 41.8349609375, lng: -87.62698364257812};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, 
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}