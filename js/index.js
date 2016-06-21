
$(document).ready(function(){
  $(".down-arrow").on('click', function() {
    var nextSectionId = $(this).attr("next");
    var nextSection = $('#' + nextSectionId);
    $(window).scrollTo(nextSection, {duration:800});
    return false;
  });

var waypoint = new Waypoint({
  element: $('.content')[0],
  handler: function(direction) {
    console.log(direction);
    $('.sidebar').addClass('menu-fixed');
  }
});

var waypoint = new Waypoint({
  element: $('.stripes')[0],
  handler: function(direction) {
    console.log(direction);
    $('.sidebar').removeClass('menu-fixed');
    }
  });
});

// var waypoint = new Waypoint({
//   element: $('attr-section-id')[0],
//   handler: function() {
//     console.log();
//
//   });
// });
// Update each menu item on the right to have an element parameter attr-section-id that has a value of the id of the section you want to target.

// create new waypoint
// element should be content
// handler function should trigger sidebar becoming fixed
