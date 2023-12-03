function initMap() {
  var location = {lat: 41.8349609375, lng: -87.62698364257812};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15, 
    center: location
  });
  
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  
  var description =
  '<div id="info">' +
  "</div>" +
  '<h1 id="infohead">Illinois Institute of Technology</h1>'
  
  var infowindow = new google.maps.InfoWindow({
    content: description,
    ariaLabel: "IIT",
  });
  
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map: map
    });
  });
  
  
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}
window.initMap = initMap;