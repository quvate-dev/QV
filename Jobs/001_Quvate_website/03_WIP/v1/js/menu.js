  /*------------------------------------*\
    menu
  \*------------------------------------*/
  var navTL = new TimelineMax({
    paused: true,
    reversed: true
  })
  navTL.to("#nav-icon", 0.25, {
    backgroundColor: "#14213d",
    rotation: 45,
    ease: Power1.easeOut
  });
  if(window.innerWidth < 600) {
    navTL.to("#nav-items", 0.5, {
      width: "100%"
    }, "-=0.25");
  } else {
    navTL.to("#nav-items", 0.5, {
      width: "50%"
    }, "-=0.25");
  }
  

  function menuIn() {
    navTL.reversed() ? navTL.play() : navTL.reverse();
  }

  // Scroll to function
  // $('a[href^="#"]').on('click', function (event) {
  //   var target = $(this.getAttribute('href'));

  //   if (target.length) {
  //     event.preventDefault();
  //     $('html, body').stop().animate({
  //       scrollLeft: target.offset().left
  //     }, 500);
  //   }
  // });