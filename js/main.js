var map;
var seattle;
var input;

function initMap() {
        seattle = new google.maps.LatLng (47.611429,-122.334493);
        map = new google.maps.Map(document.getElementById('map'), {
          center: seattle,
          zoom: 15
        });
        var defaultBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(-33.8902, 151.1759),
          new google.maps.LatLng(-33.8474, 151.2631));

        input = document.getElementById('mapsearch');
        var searchBox = new google.maps.places.SearchBox(input, {
          bounds: defaultBounds
        });
      }

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < 5; i++) {
            var place = results[i];
            console.log(place);
          }
        }
      }

function cabinet(){
  var request = {
      location: seattle,
      radius: '500',
      query: input.value
    };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  console.log('this button is now working');
}
/*
var map;
var infowindow;

function initMap() {
  var pyrmont = {lat: 47.611429, lng: -122.334493};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    type: ['store']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
*/
