$(document).ready(function() {
  var logo = $('.logo');
  function runIt() {
    logo.animate({opacity:'+=1'}, 2000);
    logo.animate({opacity:'-=0.5'}, 2000, runIt);
  }
  runIt();



});