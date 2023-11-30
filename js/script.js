function initMap() {
  var location = {lat: 41.831300, lng: 87.627270};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, 
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}