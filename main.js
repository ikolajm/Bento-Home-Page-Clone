//Header Background On Scroll
  var $header = $('#header');

  $(window).scroll(function() {
    if($(window).scrollTop() > 5) {
      $header.fadeIn(function() {
        $(this).css({
          'background' : '#35353596',
          'border-bottom' : 'none',
        });
      });
    } else {
      $header.fadeIn(function() {
        $(this).css({
          'background' : 'transparent',
          'border-bottom' : '2px solid #35353596',
        });
      });
    }
  });
//End Background Scroll

// Nav Menu Slide
  var $nav = $('nav');
  var $dropContainer = $('.drop-container');
  var $dropIcon = $('#icon');

  $dropContainer.click(function() {
    if ($dropIcon.hasClass('fa-bars')) {
      //Change Fontawesome icons w/fade
      $dropIcon.fadeOut(200, function() {
        $(this).removeClass('fa-bars');
        $(this).fadeIn(200, function() {
          $(this).addClass('fa-times');
        });
      });
      //Bring Nav Menu In
      $nav.slideDown(600, function() {
        $(this).css('display', 'block');
      })
    } else {
      //Change Fontawesome icons w/fade
      $dropIcon.fadeOut(200, function() {
        $(this).removeClass('fa-times');
        $(this).fadeIn(200, function() {
          $(this).addClass('fa-bars');
        });
      });
      //Take Nav Menu Out
      $nav.slideUp(600, function() {
        $(this).css('display', 'none');
      })
    }
  });
//End Nav Menu

//Client List Cycle function
var $divs = $('div[class^="client-group"]').hide(),
    i = 0;

(function cycle() {
    $divs.eq(i).fadeIn(400)
              .delay(2000)
              .fadeOut(400, cycle);

    i = ++i % $divs.length;
})();
//

//Testimony Slideshow
var $joe = $('#joe');
var $joeDot = $('.joe-dot')
var $jen = $('#jen');
var $jenDot = $('.jen-dot')
var $joe = $('#joe');
var $joeDot = $('.joe-dot')
var $jen = $('#jen');
var $jenDot = $('.jen-dot')

$jenDot.click(function jenclick() {
  if ($joe.css('display', 'block')) {
    $joe.css('display', 'none');
      $joeDot.removeClass('active');
    };
    $jen.css('display', 'block');
      $jenDot.addClass('active');
});

$joeDot.click(function jenclick() {
  if ($jen.css('display', 'block')) {
    $jen.css('display', 'none');
      $jenDot.removeClass('active');
    };
    $joe.css('display', 'block');
      $joeDot.addClass('active');
});







//
