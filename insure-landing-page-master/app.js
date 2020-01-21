$(document).ready(function() {
  $(".toggle-label").click(function() {
    $(".nav-list").toggleClass("nav-active");
    $(".nav-bar").toggleClass("bar-active");
    $(".toggle-label").toggleClass("close");
  });
});
