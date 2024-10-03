$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing'); 
  });


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > window.innerHeight - 100) {
      $('.navbar').removeClass('transparent');
    } else {
      $('.navbar').addClass('transparent');
    }
  });


  $('.carousel-control').on('click', function(e) {
    e.preventDefault();  
  });

  
  $('#proyectosCarrusel').carousel({
    interval: 3000
  });

 
  $('#proyectosCarrusel').on('slide.bs.carousel', function () {
    $('html, body').stop(); 
  });
});
