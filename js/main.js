//these variables have to be defined outside the scope of the functions
var map;
var seattle;
var input;
//this is an init function I don't need to use document ready
function initMap() {
        seattle = new google.maps.LatLng (47.611429,-122.334493);
        //defines the map settings and placement within the html document
        map = new google.maps.Map(document.getElementById('map'), {
          center: seattle,
          zoom: 13
        });

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
//runs when the user clicks the submit button
function cabinet(){
  var request = {
      location: seattle,
      radius: '500',
      //makes the query whatever text string the user enters instead of something static
      query: input.value,
      //filter results, the Places api also includes non-food related places, the results will not include them
      types: ['grocery_or_supermarket'|'restaurant'|'meal_delivery']
    };
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  console.log('the go button works');
}
