$(function () {
  "use strict";

  let owl = $("#carousel"),
    customDots = $(".single-dots-item");

  owl.owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    autoplay: true,
    smartSpeed: 750,
    autoplayTimeout: 5500,
    dots: false,
  });

  $("#mobile-dots").owlCarousel({
    loop: true,
    items: 2,
    center: true,
    nav: false,
    autoplay: true,
    smartSpeed: 750,
    autoplayTimeout: 5500,
    dots: false,
  });

  customDots.each(function (index) {
    $(this).on("click", function (e) {
      e.preventDefault();
      owl.trigger("to.owl.carousel", [index, 300]);
    });
  });

  owl.on("changed.owl.carousel", function (event) {
    let currentSlideIndex =
      event.item.index - event.relatedTarget._clones.length / 2;
    customDots.each(function (index) {
      if (index === currentSlideIndex) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
}); //end of document ready=====

// $(window).on("load resize", function () {
//   let wnWidth = $(window).width();

//   if (wnWidth < 1025) {
//     $(".custom-dot-wrapper").removeClass("desktop-code");
//     $(".custom-dot-wrapper").addClass("owl-carousel");
//     $(".single-dots-item").removeClass("active");
//     $(".single-dots-item").addClass("");
//     $("#carousel-2").owlCarousel({
//       loop: true,
//       items: 5,
//       nav: false,
//       autoplay: true,
//       smartSpeed: 750,
//       autoplayTimeout: 5500,
//       dots: false,
//     });
//   } else {
//     $(".custom-dot-wrapper").addClass("desktop-code");
//     $(".single-dots-item").addClass("active");
//     $(".custom-dot-wrapper").removeClass("owl-carousel");
//   }
// });
