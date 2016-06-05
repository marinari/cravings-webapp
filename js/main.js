//these variables have to be defined outside the scope of the functions
var map;
var seattle;
var input;
//this is an init function I don't need to use document ready
function initMap() {
  //custom styles for the map must be defined before map is loaded
  var stylesArray = [
        {
            "featureType":"landscape",
            "stylers":[
              {"hue":"#FFBB00"},
              {"saturation": 43.400000000000006},
              {"lightness":37.599999999999994},
              {"gamma":1}
          ]
          },{
            "featureType": "road.highway",
              "stylers":[
                {"hue":"#FFC200"},
                {"saturation":-61.8},
                {"lightness":45.599999999999994},
                {"gamma":1}
              ]
          },
          {
            "featureType": "road.arterial",
            "stylers": [
              {"hue":"#FF0300"},
              {"saturation":-100},
              {"lightness":51.19999999999999},
              {"gamma":1}
          ]
        },{
          "featureType":"road.local",
          "stylers": [
            {"hue":"#FF0300"},
            {"saturation":-100},
            {"lightness":52},
            {"gamma":1}
          ]
        },{
          "featureType":"water",
          "stylers": [
            {"hue":"#0078FF"},
            {"saturation":-13.200000000000003},
            {"lightness":2.4000000000000057},
            {"gamma":1}
          ]
        },{
          "featureType":"poi",
          "stylers":[
            {"hue":"#00FF6A"},
            {"saturation":-1.0989010989011234},
            {"lightness":11.200000000000017},
            {"gamma":1}
          ]
        }
      ];
        //draws the map using custom lat and long
        seattle = new google.maps.LatLng (47.611429,-122.334493);
        //defines the map settings and placement within the html document
        map = new google.maps.Map(document.getElementById('map'), {
          center: seattle,
          zoom: 13
        });
        //changes map styles to custom map styles
        map.setOptions({styles: stylesArray });

        //these are default settings from google places api, afraid to break the code by changing or removing them
        var defaultBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(-33.8902, 151.1759),
          new google.maps.LatLng(-33.8474, 151.2631));

        //defines the input variable for the search box input field in the html document
        input = document.getElementById('mapsearch');
        var searchBox = new google.maps.places.SearchBox(input, {
          bounds: defaultBounds
        });
      }

//runs when the user clicks the submit button
function cabinet(){
  var request = {
      location: seattle,
      radius: '500',
      //makes the query whatever text string the user enters instead of something static
      query: input.value,
      //filter results, the Places api also includes non-food related places, the results will not include them
      types: ['grocery_or_supermarket'|'restaurant'|'meal_delivery'],
      openNow: true
    };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  console.log('the go button works');
  //defines how the results are shown
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      //made the results limit 10 instead of infinte loop
      for (var i = 0; i < 10; i++) {
        var place = results[i];
        console.log(place);
      }
    }
  }
}
