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
  $("nav").attr("tabindex", "-1").attr("aria-hidden", "true");
  $("nav").find("a").attr("tabindex", "-1");
  $("#breadcrumb").attr("tabindex", "0").attr("aria-label", "navigation");
}

function mainAccessibility() {
// Map
  let mapContainer = $("#map-container");
  let map = $("#map");

  mapContainer.after("<label id=\"mapLabel\" style=\"display: none\">Map of New York with the restaurant's location</label>");
  mapContainer.attr("aria-labelledby", "mapLabel");
  mapContainer.attr("role", "application");
  // $("#map").attr("aria-hidden", "true");
  map.find("img").attr("tabindex", "-1").attr("aria-hidden", "true");
  map.find("a").attr("tabindex", "-1").attr("aria-hidden", "true");
  map.find("div").attr("tabindex", "-1").attr("aria-hidden", "true");

//Restaurant container

let restaurantContainer = $("#restaurant-container");
restaurantContainer.attr("tabindex", "0").attr("aria-label", "restaurant info");
restaurantContainer.find("h1").attr("tabindex", "0");
restaurantContainer.find("img").attr("tabindex", "0");
restaurantContainer.find("#restaurant-cuisine").attr("tabindex", "0");
restaurantContainer.find("#restaurant-address").attr("tabindex", "0");
restaurantContainer.find("#restaurant-hours").attr("tabindex", "0").attr("aria-label", "Table of restaurant hours");

//Hours tables

let restaurantHours = $("#restaurant-hours");
restaurantHours.find("tr").attr("tabindex", "0");

// Reviews Container
let reviewsContainer = $("#reviews-container");
reviewsContainer.find("h2").attr("tabindex", "0");
reviewsContainer.find("#reviews-list").find("li").attr("tabindex", "0");

}
