var page = $(window)


// Window Scroll
$(window).scroll(function() {
  if ( page.scrollTop() >= 930 ) {
    headerFadeIn();
  }

  if ( page.scrollTop() < 930 ) {
    headerFadeOut();
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
