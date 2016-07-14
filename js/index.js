
$(document).ready(function(){
  // $('#validate').css({'visibility': 'hidden'});
    var sEmail = $('#txtEmail').val();

      function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

      return filter.test(sEmail);
      }



    $('#btnValidate').on('click', function(event) {
          var sEmail = $('#txtEmail').val();
            if (validateEmail(sEmail)){
            $('#validate').css({'visibility': 'visible'});
            $('#validate').addClass('warning').css({'visibility': 'visible','background-color':'rgb(22, 160, 133)', 'background-image': 'none'});
            $('#validate').text("'" + sEmail + "'" + ' has been added!');
            event.preventDefault();
          }
          else {
          // $('#validate').css({'visibility': 'hidden'});
          $('#validate').addClass('alert warning').css({'visibility': 'visible','background-color':'#f26c4f'});
          $('#validate').text("'" + sEmail + "'" + ' is not a valid email address.');
          console.log("bye");
        }
    });
  ;


// .addClass('#warning')
// Scroll and .active
  $(".down-arrow").on('click', function() {
    var nextSectionId = $(this).attr("next");
    var nextSection = $('#' + nextSectionId);
    $(window).scrollTo(nextSection, {duration:800});
    return false;
  });
  // create new waypoint
  // element should be content
  // handler function should trigger sidebar becoming fixed/unfixed
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
    $('.menu li').removeClass('active')
    }
  });


          // LOREM
var waypoint = new Waypoint({
  element: $('#main')[0],
  handler: function(direction) {
  console.log(direction);
    $('.menu li').removeClass('active');
      // remove the .active class from all menu items
    $('#lorem').addClass('active');
  }
});
  $("#lorem").on('click', function(down) {
    $(window).scrollTo('#main', {duration:800});
    $('menu li').removeClass('active');
    $(this).addClass('active');
    return false;
  });
  $("#lorem").on('click', function(up) {
    $(window).scrollTo('.iphone', {duration:800});
    $('.menu li').removeClass('active');
    $(this).addClass('active');
    return false;
  });

          // GRAVIDA
var waypoint = new Waypoint({
  element: $('#secondmain')[0],
  handler: function(direction) {
  console.log(direction);
    $('.menu li').removeClass('active');
    $('#gravida').addClass('active');
  }
});
$("#gravida").on('click', function() {
  $(window).scrollTo('#secondmain', {duration:800});
  $('.menu li').removeClass('active');
  $(this).addClass('active');
  // $(window).scrollTo('#secondmain', {duration:800});
  return false;
});


          // UT
var waypoint = new Waypoint({
  element: $('#featured')[0],
  handler: function(direction) {
  console.log(direction);
    $('.menu li').removeClass('active');
    $('#ut').addClass('active');
  }
});
$("#ut").on('click', function() {
  $(window).scrollTo('#featured', {duration:800});
  $('.menu li').removeClass('active');
  $(this).addClass('active');
  // $(window).scrollTo('#featured', {duration:800});
  return false;
});

var waypoint = new Waypoint({
  element: $('#form')[0],
  handler: function(direction) {
    console.log(direction);
      $('.menu li').removeClass('active');
      $('#signup').addClass('active');
  }
});
$("#signup").on('click', function() {
  $(window).scrollTo('#form', {duration:800});
  $('.menu li').removeClass('active');
  $(this).addClass('active');
  // $(window).scrollTo('#form', {duration:800});
  return false;
});

var waypoint = new Waypoint({
  element: $('#featured2')[0],
  handler: function(direction) {
    console.log(direction);
      $('.menu li').removeClass('active');
      $('#vel').addClass('active');
    }
  });
  $("#vel").on('click', function() {
    $(window).scrollTo('#featured2', {duration:800});
    $('.menu li').removeClass('active');
    $(this).addClass('active');
    // $(window).scrollTo('#featured2', {duration:800});
    return false;
  });
});
