$(document).on('ready', function(){
  //test to always make sure js is working in browser
  console.log('console log functions working');

  //create a function called `searchImages()`. Accept a string value called `tags` as an argument.
  var searchImages = function(tags) {
    //Define the location of the Yelp API.
    var yelpAPI = "https://api.yelp.com/v2/search/?location=Seattle,Wa";
    $('#userSearch').innerHTML = '<li class="search-throbber">Searching...</li>';
    //Construct a `$.getJSON()` call where you send a request object including the tags the user submitted
    $.getJSON( yelpAPI, {
      tags: tags,
      tagmode: "any",
      format: "json"
      //a `done()` handler that displays and refreshes the content appropriately.
    }).done(function( data ) {
      console.log('getting data');
    })
  }
});
