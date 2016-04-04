//business logic
function Location(location, landmark, season) {
  this.newLocation = location;
  this.newLandmark = landmark;
  this.newSeason = season;
}
Location.prototype.fullDescript = function() {
  return this.newLocation + " " + this.newLandmark + " " + this.newSeason;
}

// user interface logic
$(document).ready(function() {
  $("form#new-places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedSeason = $("input:radio[name=season]:checked").val();

    var newPlace = new Location(inputtedLocation, inputtedLandmark, inputtedSeason);

      $("ul#locations").append("<li><span class='location'>" + newPlace.fullDescript() + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-season").val("");



    $(".location").last().click(function() {
    $("#show-locations").show();
    $("#show-locations h2").text(newPlace.newLocation);
    $(".newLocation").text(newPlace.newLocation);
    $(".newLandmark").text(newPlace.newLandmark);
    $(".newSeason").text(newPlace.newSeason);
    });
  });
});
