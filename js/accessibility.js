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
  $("#map-container").attr("aria-label", "map application");
  $("#map").attr("role", "application");
}
