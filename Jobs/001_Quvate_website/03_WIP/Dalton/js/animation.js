  /*------------------------------------*\
    Animation
  \*------------------------------------*/
  var textObj = {
    "home": {
      "knockout-text": {
        0: "We are a",
        1: "Lorem ips",
      },
      "subline-text": {
        0: "Marketing agency for brands that want more",
        1: "Lorem ipsum dolor sit amet consecte elit",
      },
      "aside-text": {
        0: "Who are we",
        1: "Lorem ipsu",
      }
    },
    "about": {
      "knockout-text": {
        0: "We're sweet at",
        1: "We love making",
      },
      "subline-text": {
        0: "Beautiful digital ads, emails & landing pages",
        1: "Lorem ipsum dolor sit amet consecte elit",
      },
      "aside-text": {
        0: "Innovation",
        1: "Creativity",
      }
    },
    "contact": {
      "knockout-text": {
        0: "interested in us?",
        1: "text-two",
      },
      "subline-text": {
        0: "Lets work together",
        1: "text-two",
      }
    }
  }

  function textSwap(page, element, text) {
    document.querySelector("." + page).querySelector("." + element).innerHTML = textObj[page][element][text];
  }

  /* Text Block */
  function textBlockAnimation() {
    var ctrl = new ScrollMagic.Controller({
      vertical: false
    });
    var sections = document.getElementsByTagName("section");
    var sectionsArray = Array.from(sections);

    sectionsArray.forEach(function (element) {
      var knockOutText = element.querySelector(".knockout-text");
      var sublineText = element.querySelector(".subline-text");
      var asideText = element.querySelector(".aside-text");

      // Break out of function if no element found
      if (!knockOutText) return;      

      var tl = new TimelineMax();

      tl.to(knockOutText, 0.5, {y: 0});
      if (asideText) {
        tl.to(asideText, 0.2, {y: 0,});
      }
      tl.to(sublineText, 0.5, {y: 0}, "-=0.25");
      
      tl.to(knockOutText, 0.5, {y: 500}, "+=3");
      if (asideText) {
        tl.to(asideText, 0.2, {y: 50,});
      }      
      tl.to(sublineText, 0.5, {y: 500}, "-=0.25");

      tl.set(knockOutText, { text: textObj[element.getAttribute("id")]["knockout-text"][1] });
      tl.set(sublineText, { text: textObj[element.getAttribute("id")]["subline-text"][1] });
      if (asideText) {
        tl.set(asideText, { text: textObj[element.getAttribute("id")]["aside-text"][1] });
      }
      
      tl.to(knockOutText, 0.5, {y: 0}, "+=0.25");
      if (asideText) {
        tl.to(asideText, 0.2, {y: 0,});
      }
      tl.to(sublineText, 0.5, {y: 0}, "-=0.25");      

      new ScrollMagic.Scene({
          triggerElement: element,
          triggerHook: 0.4
        })
        .setTween(tl)
        .addIndicators({
          colorTrigger: "white",
          colorStart: "white",
          colorEnd: "white",
          indent: 40
        })
        .addTo(ctrl);
    });
  }
  var body = document.querySelector("body");
  

// http://www.dte.web.id/2013/02/event-mouse-wheel.html

(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.documentElement.scrollLeft -= (delta*30); // Multiplied by 30
      document.body.scrollLeft -= (delta*30); // Multiplied by 40
      e.preventDefault();
  }
  if (window.addEventListener) {
      // IE9, Chrome, Safari, Opera
      window.addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
      // IE 6/7/8
      window.attachEvent("onmousewheel", scrollHorizontally);
  }
})();


  /* iPhone */
  function iphoneAnimation() {
    var iphonesTl = new TimelineLite({
      onComplete: function () {
        this.restart()
      }
    });
    var dur = 25;
    var defaultEase = Linear.easeNone;

    iphonesTl.set(["#iphones-group-3"], { yPercent: -100 });
    iphonesTl.set(["#iphones-group-4"], { yPercent: -100 });
    iphonesTl.to(["#iphones-group-1"], dur, { yPercent: -100, ease: defaultEase }, 0);
    iphonesTl.to(["#iphones-group-2"], dur, { yPercent: -100, ease: defaultEase }, 0);
    iphonesTl.to(["#iphones-group-3"], dur, { yPercent: 0, ease: defaultEase }, 0);
    iphonesTl.to(["#iphones-group-4"], dur, { yPercent: 0, ease: defaultEase }, 0);
    iphonesTl.set(["#iphones-group-1"], { yPercent: 0 });
    iphonesTl.set(["#iphones-group-2"], { yPercent: 0 });
    iphonesTl.set(["#iphones-group-3"], { yPercent: -100 });
    iphonesTl.set(["#iphones-group-4"], { yPercent: -100 });
  }

  function preLoader() {
    var preloaderTl = new TimelineMax({onComplete:quvateAnimation});
    // mainTl.to([window], 0.5, {scrollTo: {y: 0, x: "max", autoKill: false }, ease: Linear.easeNone}, "+=1");
    // TweenLite.to(["#pre-loader"], 2, {scrollTo:{x:1200}, ease:Power2.easeOut});
    // TweenLite.to(window, 1, {scrollTo:{x:"#home", autoKill:false}});
    // mainTl.to(["#pre-loader"], 0.5, {
    //   autoAlpha: 0,
    //   ease: Linear.easeNone
    // }, "+=1");
    // mainTl.set(["#pre-loader"], {
    //   display: "none"
    // });
    preloaderTl.to([".preloader"], 0.25, {
      opacity: 1,
      ease: Linear.easeNone
    }, "+=1");
    preloaderTl.from(".preloader", 0.5, {width: "0", ease: Expo.easeOut}, "+=" + 0.2);
    preloaderTl.to(".content", 1.2, {height:"100px", marginBottom: "20px", ease:Elastic.easeOut}, "-=" + 0.5);
  }

  function logoAnimation() {
    var logoTL = new TimelineMax();

    logoTL.to(".logo-underline", 0.25, {width: "100%"}, "+=" + 0.5);
    logoTL.to("#logo", 0.25, {top: "0"});
    logoTL.to(".logo-underline", 0.25, {width: "0%"}, "+=" + 0.5);
  }
  logoAnimation();
function quvateAnimation(){
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
    
  var end_anim = function(){
    var preloaderTl = new TimelineMax({onComplete:textBlockAnimation});
    var dur = 1;
    // preloaderTl.delay(0.25)
    preloaderTl.to(".content", 1.1, {height:"0", ease:Expo.easeOut});
    preloaderTl.to("#pre-loader-logo", 1, { y: "100px", ease:Expo.easeOut}, "-=1");
    preloaderTl.to(".preloader", 0.5, {width: "0", ease: Expo.easeOut}, "-=" + 0.8);
    preloaderTl.to(["#pre-loader-container"], 0.5, { autoAlpha: 0, ease: Linear.easeNone }, "+=0.5");
    preloaderTl.set(["#pre-loader-container"], { display: "none" });
    preloaderTl.set(["body"], { overflow: "scroll" });
    // preloaderTl.from(["#home"], 0.5, { autoAlpha: 0, ease: Linear.easeNone }, "+=0.2");

  }

  var letterMorphTiming = 250;
    
  var e_anim = function(){
    letter_q.animate({ d: e_path }, letterMorphTiming, mina.backout, end_anim);  
  }

  var t_anim = function(){
    letter_q.animate({ d: t_path }, letterMorphTiming, mina.elastic, e_anim);  
  }

  var a_anim = function(){
    letter_q.animate({ d: a_path }, letterMorphTiming, mina.elastic, t_anim);  
  }

  var v_anim = function(){
    letter_q.animate({ d: v_path }, letterMorphTiming, mina.elastic, a_anim);  
  }

  var u_anim = function(){
    letter_q.animate({ d: u_path }, letterMorphTiming, mina.elastic, v_anim);  
  }

  var q_anim = function(){
    letter_q.animate({ d: q_path }, letterMorphTiming, mina.elastic, u_anim); 
  }

q_anim();
  
}

// Menu functions
var navTL = new TimelineMax({paused:true, reversed:true})
navTL.to("#nav-icon", 0.25, {backgroundColor: "#14213d", rotation:45,ease:Power1.easeOut});
navTL.to("#nav-items", 0.5, {width: "50%"}, "-=0.25");
    
function menuIn() {
  navTL.reversed() ? navTL.play() : navTL.reverse(); 
}

$('a[href^="#"]').on('click', function(event) {

  var target = $(this.getAttribute('href'));

  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollLeft: target.offset().left
      }, 500);
  }

});

// function navOpen() {
//   var navTL = new TimelineMax();

//   navTL.to("#nav-items", 0.5, {width: "50%"});
// }
