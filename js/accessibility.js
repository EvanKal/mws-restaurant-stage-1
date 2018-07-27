//Initialize accessibility

function initAccessibility() {


  mainRoles();
  headerAccessibility();
  mainAccessibility();
}


// --------------------------index.html--------------------------

// Define roles for main parts of the page

function mainRoles() {
  $("header").attr("role", "banner");
  $("main").attr("role", "main");
  $("footer").attr("role", "contentinfo");
}

function headerAccessibility() {
  $("nav").attr("aria-label", "Navigate home");
}

function mainAccessibility() {
// Map
  $("#map-container").after("<label id=\"mapLabel\">Map of New York restaurants with a review</label>");
  $("#map-container").attr("aria-labelledby", "mapLabel");
  $("#map-container").attr("role", "application");
  $("#map").find().attr("aria-hidden", "true");
  $("#map").find().removeAttr("tabindex");
}
