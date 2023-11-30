function initMap() {
  var location = {lat: 41.831300, lng: 87.627270};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4, 
    center: location
  });
}