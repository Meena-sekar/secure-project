$(document).ready(function(){


   $(".menu-icon").click(function() {
    $("nav").slideToggle(function(){
    });
   });

  var $animation_elements = $('.animation-element');

  function check_if_in_view() {
    var window_height = $(window).height();
    var window_top_position = $(window).scrollTop();
    var window_bottom_position = (window_top_position + window_height);
   
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
   
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animate-left');
      } else {
        $element.removeClass('animate-left');
      }
    });
  }

  var $animation_element = $('.animation-right');
  var $window = $(window);

  function check_if_in_view1() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
   
    $.each($animation_element, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
   
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('animate-right');
      } else {
        $element.removeClass('animate-right');
      }
    });
  }
  var $header = $('.header');

  function headerbg(){
    var window_height = $window.height();
    var headerheight = $('header').outerHeight();
    var window_top_position = $window.scrollTop();
    var headerbottom = (window_height - headerheight);
    $.each($header, function() {
      if(headerbottom <= window_top_position){
        $header.addClass('headerbg');
      } else{
        $header.removeClass('headerbg');
      }
    });

  }

  $window.on('scroll resize', headerbg);
  $window.on('scroll resize', check_if_in_view);
  $window.on('scroll resize', check_if_in_view1);

});