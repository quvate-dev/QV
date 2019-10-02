  /*------------------------------------*\
    Animation
  \*------------------------------------*/
  var textObj = {
    "home": {
      "knockout-text": {
        0: "We are a",
        1: "We design, build and ",
      },
      "subline-text": {
        0: "Marketing agency for brands that want more",
        1: "operate solutions and digital strategies and together we can bring your ideas to life.",
      },
      "aside-text": {
        0: "Who are we",
        1: "What we do",
      }
    },
    "about": {
      "knockout-text": {
        0: "We're sweet at",
        1: "Strong campaigns that",
      },
      "subline-text": {
        0: "Beautiful digital ads, emails & landing pages",
        1: "work & look great across all platforms including mobile devices.",
      },
      "aside-text": {
        0: "What we do",
        1: "What we do",
      }
    },
    "projects": {
      "knockout-text": {
        0: "We specialise in",
        1: "Our values are both",
      },
      "subline-text": {
        0: "Beautiful digital ads, emails & landing pages",
        1: "our identity and our promise defining and motivating our every interaction with you",
      },
      "aside-text": {
        0: "What we do",
        1: "Creativity",
      }
    },
    "contact": {
      "knockout-text": {
        0: "Lets get a coffee",
        1: "GET IN TOUCH",
      },
      "subline-text": {
        0: "Or if you'd prefer",
        1: "WE WOULD LOVE TO HEAR ABOUT YOUR PROJECT!",
      },
      "aside-text": {
        0: "Contact Us",
        1: "Contact Us",
      }
    }
  }

  // Text Swap Function
  function textSwap(page, element, text) {
    document.querySelector("." + page).querySelector("." + element).innerHTML = textObj[page][element][text];
  }

  /* scrollMagic */
  function scrollMagic() {

    var ctrl = new ScrollMagic.Controller({
      vertical: false,
      refreshInterval: 1, // set to 0 to disable
    });
    // Scene 1 - 
    var phoneTl = new TimelineMax();
    var aboutEl = document.getElementById('about');
    var dur = 5;
    var defaultEase = Linear.easeNone;

    new ScrollMagic.Scene({
      duration: 5000,
      reverse: true,
      triggerElement: '#phone-slider',
      triggerHook: 'onEnter',
      pushfollowers: false
    })

    .setTween(phoneTl)
    .addTo(ctrl);

    phoneTl.set(["#iphones-group-3"], { yPercent: -100 });

    phoneTl.set(["#iphones-group-4"], { yPercent: -100 });

    phoneTl.to(["#iphones-group-1"], dur, { yPercent: -100, ease: defaultEase }, 0);
    phoneTl.to(["#iphones-group-2"], dur, { yPercent: -100, ease: defaultEase }, 0);
    phoneTl.to(["#iphones-group-3"], dur, { yPercent: 0, ease: defaultEase }, 0);
    phoneTl.to(["#iphones-group-4"], dur, { yPercent: 0, ease: defaultEase }, 0);

    phoneTl.set(["#iphones-group-1"], { yPercent: 0});
    phoneTl.set(["#iphones-group-2"], { yPercent: 0});
    phoneTl.set(["#iphones-group-3"], { yPercent: -100});
    phoneTl.set(["#iphones-group-4"], { yPercent: -100});

    // *******************************
    //  Scene 2 - Values animation
    // *******************************

    var valuesTl = new TimelineMax();
    var valuesEl = document.getElementById('square');
    var dur = 10;
    var defaultEase = Linear.easeNone;

    new ScrollMagic.Scene({
      duration: 500,
      reverse: true,
      triggerElement: valuesEl,
      triggerHook: 'onCenter',
      pushfollowers: false
    })

    //  .setPin('#square')
    .setTween(valuesTl)
    // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    .addTo(ctrl);

    valuesTl.from(["#square"], 2, {height: 0,ease: defaultEase}, "+=0");
    valuesTl.from("#square2", 4, {height: 0,ease: defaultEase}, "+=3");
    valuesTl.from("#square3", 4, {height: 0,ease: defaultEase}, "+=3");

        // *******************************
    //  Scene 3 - Video animation
    // *******************************

    var videoTl = new TimelineMax();
    var videoEl = document.getElementById('video');
    var dur = 10;
    var defaultEase = Linear.easeNone;

    // If viewing site on desktop open the video slowley 
    // If viewed on a smaller screen width then open quicker
  
    if(window.innerWidth <= 481){
      var openWidthDur = 200;
    } else{
      var openWidthDur = 1000;
    }

    new ScrollMagic.Scene({
      duration: openWidthDur,
      reverse: true,
      triggerElement: videoEl,
      triggerHook: 'onEnter',
      offset: 200,
      pushfollowers: false
    })

    .setTween(videoTl)
    .addTo(ctrl);
    videoTl.from(["#video"],10, {width: 0,ease: defaultEase}, "+=0");

    // *******************************
    //  Scene 4 - Map animation
    // *******************************
    var mapTl = new TimelineMax();
    var mapEl = document.getElementById('map');
    var dur = 10;
    var defaultEase = Linear.easeNone;
    new ScrollMagic.Scene({
      duration:openWidthDur,
      reverse: true,
      triggerElement: mapEl,
      triggerHook: 'onEnter',
      offset: 200,
      pushfollowers: false
    })
    .setTween(mapTl)
    .addTo(ctrl);
    mapTl.from(["#map"],10, {width: 0,ease: defaultEase}, "+=0");
      
    // *******************************
    //  Scene 5 - Text Knockout Slideup Animation
    // *******************************
    
    var sections = document.getElementsByTagName("section");
    var sectionsArray = Array.from(sections);

    sectionsArray.forEach(function (element) {
      var knockOutText = element.querySelector(".knockout-text");
      var sublineText = element.querySelector(".subline-text");
      var asideText = element.querySelector(".aside-text");
      var headlineText = element.querySelector(".cb-title__name");

      // Break out of function if no element found
      if (!knockOutText || !sublineText) return;

      var tl = new TimelineMax({  });

      tl.to(knockOutText, 0.5, {y: 0});
      if (asideText) {
        tl.to(asideText, 0.2, {y: 0});
      }
      tl.to(sublineText, 0.5, {y: 0}, "-=0.25");

      tl.to(knockOutText, 0.5, {y: 500}, "+=5");
      if (asideText) {
        tl.to(asideText, 0.2, {y: 50});
      }
      tl.to(sublineText, 0.5, {y: 500}, "+=0.25");
      
      tl.set(knockOutText, {text: textObj[element.getAttribute("id")]["knockout-text"][1]});
      
      tl.set(sublineText, {text: textObj[element.getAttribute("id")]["subline-text"][1]});
      
      if (asideText) {
        tl.set(asideText, {text: textObj[element.getAttribute("id")]["aside-text"][1]});
      }

      tl.to(knockOutText, 0.5, {y: 0}, "+=0.25");
      if (asideText) {
        tl.to(asideText, 0.2, {y: 0});
      }
      tl.to(sublineText, 0.5, {y: 0}, "-=0.25");

      new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.5
      })
      .setTween(tl)
      // .addIndicators({
      //   colorTrigger: "white",
      //   colorStart: "white",
      //   colorEnd: "white",
      //   indent: 40
      // })
      .addTo(ctrl);
    });
  }

  function preLoader() {
    var preloaderTl = new TimelineMax({
      onComplete: quvateAnimation
    });
    preloaderTl.to([".preloader"], 0.25, {
      opacity: 1,
      ease: Linear.easeNone
    }, "+=0");
    preloaderTl.from(".preloader", 0.5, {
      width: "0",
      ease: Expo.easeOut
    }, "+=" + 0.2);
    preloaderTl.to(".content", 1.2, {
      height: "100px",
      marginBottom: "20px",
      ease: Elastic.easeOut
    }, "-=" + 0.5);
  }

  function logoAnimation() {
    var logoTL = new TimelineMax({
      onComplete: function () {
        scrollMagic()
        menuAnimation();        
      }
    });
    logoTL.to("#logo", 0, {y: "80px"});
    logoTL.to(".logo-underline", 0.25, {width: "100%"});
    logoTL.to("#logo", 0.25, {opacity: "1"});
    logoTL.to("#logo", 0.25, {y: "0"}, "+=0.5");
    logoTL.to(".logo-underline", 0.25, {width: "0%"});
  }

  function menuAnimation() {
    var menuTL = new TimelineMax();
    menuTL.to("#nav", 1, {opacity: "1"}, "+=2");
  }

  function quvateAnimation() {
    var svg = document.getElementById("svg");
    var s = Snap(svg);

    var letter_q = Snap.select('#letter_q');
    var letter_u = Snap.select('#letter_u');
    var letter_v = Snap.select('#letter_v');
    var letter_a = Snap.select('#letter_a');
    var letter_t = Snap.select('#letter_t');
    var letter_e = Snap.select('#letter_e');

    var q_path = letter_q.node.getAttribute('d');
    var u_path = letter_u.node.getAttribute('d');
    var v_path = letter_v.node.getAttribute('d');
    var a_path = letter_a.node.getAttribute('d');
    var t_path = letter_t.node.getAttribute('d');
    var e_path = letter_e.node.getAttribute('d');

    var end_anim = function () {
      var preloaderTl = new TimelineMax({
        onComplete: function () {          
          logoAnimation();          
        }
        // onComplete: scrollMagic
      });
      // preloaderTl.delay(0.25)
      preloaderTl.to(".content", 1, { height: "0", ease: Expo.easeOut}, "+=1");
      preloaderTl.to("#pre-loader-logo", 1, { y: "100px", ease: Expo.easeOut }, "-=1");
      preloaderTl.to(".preloader", 0.5, { width: "0", ease: Expo.easeOut }, "-=" + 0.8);
      preloaderTl.to(["#pre-loader-container"], 0.5, { autoAlpha: 0, ease: Linear.easeNone }, "+=0.35");
      preloaderTl.set(["#pre-loader-container"], { display: "none" });
      preloaderTl.set(["body"], { overflow: "scroll" });
    }

    var letterMorphTiming = 250;

    var e_anim = function () {
      letter_q.animate({
        d: e_path
      }, letterMorphTiming, mina.backout, end_anim);
    }

    var t_anim = function () {
      letter_q.animate({
        d: t_path
      }, letterMorphTiming, mina.elastic, e_anim);
    }

    var a_anim = function () {
      letter_q.animate({
        d: a_path
      }, letterMorphTiming, mina.elastic, t_anim);
    }

    var v_anim = function () {
      letter_q.animate({
        d: v_path
      }, letterMorphTiming, mina.elastic, a_anim);
    }

    var u_anim = function () {
      letter_q.animate({
        d: u_path
      }, letterMorphTiming, mina.elastic, v_anim);
    }

    var q_anim = function () {
      letter_q.animate({
        d: q_path
      }, letterMorphTiming, mina.elastic, u_anim);
    }

    q_anim();

  }

 // Cursor 
 const $bigBall = document.querySelector('.cursor__ball--big');
 const $smallBall = document.querySelector('.cursor__ball--small');
 const $hoverables = document.querySelectorAll('.hoverable');
 
 // Listeners
 document.body.addEventListener('mousemove', onMouseMove);
 for (let i = 0; i < $hoverables.length; i++) {
   $hoverables[i].addEventListener('mouseenter', onMouseHover);
   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
 }
 
 // Move the cursor
 function onMouseMove(e) {
   TweenMax.to($bigBall, .4, {
     x: e.pageX - 15,
     y: e.pageY - 15
   })
   TweenMax.to($smallBall, .1, {
     x: e.pageX - 5,
     y: e.pageY - 7
   })
 }
 
 // Hover an element
 function onMouseHover() {
   TweenMax.to($bigBall, .3, {
     scale: 4
   })
 }
 function onMouseHoverOut() {
   TweenMax.to($bigBall, .3, {
     scale: 1
   })
 }