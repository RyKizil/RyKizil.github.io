$(document).ready(function() {
  $(".carousel").carousel(); //materialize.js function for moving gallery in my portfolio

  //making navbar sticky after scrolldown
  var stickyNavTop = $(".myNavbar").offset().top;

  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $(".myNavbar").addClass("sticky");
    } else {
      $(".myNavbar").removeClass("sticky");
    }
  };

  /*stickyNav();*/

  //calling function everytie on scroll for check height
  $(window).scroll(function() {
    stickyNav();
  });

  //for smooth scroll to target element on same page after clicking
  $("#learn").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".myNavbar").offset().top
      },
      1500
    );
  });
  $(".learn").click(function(e) {
    $("html, body").animate(
      {
        scrollTop: $(".aboutMe").offset().top
      },
      1500
    );
    e.preventDefault();
  });

  $(".toPorto").click(function(e) {
    $("html, body").animate(
      {
        scrollTop: $("#porto").offset().top
      },
      1500
    );
    e.preventDefault();
  });
  $(".toContact").click(function(e) {
    $("html, body").animate(
      {
        scrollTop: $(".contact-me").offset().top
      },
      1500
    );
    e.preventDefault();
  });

  $(".material-icons").on("click", function() {
    $(".myNav li").fadeToggle("slow", "linear");
  });

  $(window).on("resize", function() {
    if ($(window).width() > 768) {
      $(".myNav li").show();
    } else $(".myNav li").hide();
  });

  window.sr = ScrollReveal({ reset: false });
  sr.reveal(".post", { duration: 2000 });
  sr.reveal(".story", { duration: 2500 });
});
