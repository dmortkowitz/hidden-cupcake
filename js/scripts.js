$(document).ready(function() {
  $(".clickable").click(function() {
    $("#image-hidden").fadeIn();
  });
  $(".click1").click(function() {
    $("#image-hidden").fadeIn().toggle();
    $("#image-showing").toggle();
  });

});
