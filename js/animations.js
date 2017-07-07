// Global Variables

var page = $(window);

// Window Scroll

$(window).scroll(function() {
  var divTop = $('#block-one').offset().top;
  console.log(page.scrollTop());
  if ( page.scrollTop() >= divTop ) {
    headerFadeIn();
  }

  if ( page.scrollTop() < divTop ) {
    headerFadeOut();
  }
  if ( page.scrollTop() > divTop ) {
    iPhoneSlideIn();
  }
  if ( page.scrollTop() < divTop ) {
    iPhoneSlideOut();
  }

});


// Animations

var headerFadeOut = function() {
  $('.header').fadeOut(900);
};

var headerFadeIn = function() {
  $('.header').fadeIn(900);
};

var thirdAnimation = function() {

};
