//Initialize accessibility
$(window).on('load', function() {
  mainRoles();
  headerAccessibility();
  mainAccessibility();
});

// --------------------------index.html--------------------------

// Define roles for main parts of the page

function mainRoles() {
  $("header").attr("role", "banner").attr("tabindex", "0");
  $("main").attr("role", "main");
  $("footer").attr("role", "contentinfo").attr("tabindex", "0").attr("aria-label", "footer");
}

function headerAccessibility() {
  $("nav").attr("aria-label", "Navigate home").attr("tabindex", "-1");
}

function mainAccessibility() {
// Map
  let mapContainer = $("#map-container");
  let map = $("#map");

  mapContainer.after("<label id=\"mapLabel\" style=\"display: none\">Map of New York restaurants with a review</label>");
  mapContainer.attr("aria-labelledby", "mapLabel");
  mapContainer.attr("role", "application");
  // $("#map").attr("aria-hidden", "true");
  map.find("img").attr("tabindex", "-1").attr("aria-hidden", "true");
  map.find("a").attr("tabindex", "-1").attr("aria-hidden", "true");
  map.find("div").attr("tabindex", "-1").attr("aria-hidden", "true");

// Filter results

  let allNeighbourhoods = $("#neighborhoods-select");
  let allCousines = $("#cuisines-select");

  $(".filter-options").find("h2").after("<label id=\"filterResults\" style=\"display: none\">Filter options</label>");
  allNeighbourhoods.attr("aria-labelledby", "filterResults").attr("role", "combobox");
  allNeighbourhoods.attr("aria-owns", "restaurants-list");
  allCousines.attr("aria-labelledby", "filterResults");
  allCousines.attr("aria-controls", "restaurants-list");

  let restautantsList = $('#restaurants-list');

  restautantsList.attr("aria-live", "polite");
  restautantsList.attr("aria-atomic", "true");

// Restaurants in restaurantsList

  let restautantsInList;
  restautantsInList = $('#restaurants-list').find("li");
  let arrayFromList = restautantsInList.toArray();
  console.log(arrayFromList);

  arrayFromList.forEach(function(elem) {
  $(elem).attr("tabindex", "0").attr("aria-labelledby", `nameOfLi${arrayFromList.indexOf(elem)}`);
  $(elem).find("img").attr("tabindex", "0");
  $(elem).find("p").attr("tabindex", "0");
  $(elem).find("a").attr("tabindex", "0");
  $(elem).find("h1").attr("id", `nameOfLi${arrayFromList.indexOf(elem)}`);
  })




  restautantsList.on("DOMSubtreeModified", function() {
    restautantsInList = $('#restaurants-list').find("li");
    restautantsInList = $('#restaurants-list').find("li");
    let arrayFromList = restautantsInList.toArray();
    console.log(arrayFromList);

    arrayFromList.forEach(function(elem) {
    $(elem).attr("tabindex", "0").attr("aria-labelledby", `nameOfLi${arrayFromList.indexOf(elem)}`);
    $(elem).find("img").attr("tabindex", "0").attr("alt");
    $(elem).find("p").attr("tabindex", "0");
    $(elem).find("a").attr("tabindex", "0");
    $(elem).find("h1").attr("id", `nameOfLi${arrayFromList.indexOf(elem)}`);
    })


  })

}
