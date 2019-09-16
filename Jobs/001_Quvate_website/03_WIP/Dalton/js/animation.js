  /*------------------------------------*\
    Animation
  \*------------------------------------*/


  var count = 0;

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
    document.getElementById(page).querySelector("." + element).innerHTML = textObj[page][element][text];
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
      if (!knockOutText) {
        return;
      } else {
        // TODO need to do something like like but triggered with greensock
      }

      setInterval(() => {
        count == 0 ? count = +1 : count = 0;
    
        textSwap("home", "knockout-text", count);
        textSwap("home", "subline-text", count);
        textSwap("home", "aside-text", count);
        textSwap("about", "knockout-text", count);
        textSwap("about", "subline-text", count);
        textSwap("about", "aside-text", count);
        textSwap("contact", "knockout-text", count);
        textSwap("contact", "subline-text", count);
      }, 6000);

      var tl = new TimelineMax();
      // tl.play();

      // todo try to swap text with gsap
      // tl.set(knockOutText,{text:"rtest"});
      // TweenLite.to(knockOutText, 1, {text:{value:"Your new text"}});
      // tl.set(knockOutText, {text:"This is the new text"}, 0);

      tl.from(knockOutText, 0.5, {y: 500});
      tl.from(sublineText, 0.5, {y: 500}, 0.25);
      if (asideText) {
        tl.from(asideText, 0.2, {y: 50,}, "-=0.5");
      }
      // tl.reverse();  

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

  // Prevent scrolling triggering back or forward
  document.querySelector("main").addEventListener('mousewheel', function(event) {
    // We don't want to scroll below zero or above the width and height 
    var maxX = this.scrollWidth - this.offsetWidth;
    var maxY = this.scrollHeight - this.offsetHeight;

    // If this event looks like it will scroll beyond the bounds of the element, prevent it and set the scroll to the boundary manually 
    if (this.scrollLeft + event.deltaX < 0 || 
      this.scrollLeft + event.deltaX > maxX || 
      this.scrollTop + event.deltaY < 0 || 
      this.scrollTop + event.deltaY > maxY) {

      event.preventDefault();

      // Manually set the scroll to the boundary
      this.scrollLeft = Math.max(0, Math.min(maxX, this.scrollLeft + event.deltaX));
      this.scrollTop = Math.max(0, Math.min(maxY, this.scrollTop + event.deltaY));
    }
  }, false);

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
    // TODO make it scroll to next section
    // mainTl.to(["#pre-loader"], 0.5, {
    //   autoAlpha: 0,
    //   ease: Linear.easeNone
    // }, "+=1");
    // mainTl.set(["#pre-loader"], {
    //   display: "none"
    // });
    preloaderTl.to([".preloader"], 0.5, {
      opacity: 1,
      ease: Linear.easeNone
    }, "+=1");
    preloaderTl.from(".preloader", 0.5, {width: "0", ease: Expo.easeOut}, "+=" + 0.2);
    preloaderTl.to(".content", 1.2, {height:"230px", marginBottom: "20px", ease:Elastic.easeOut}, "-=" + 0.5);
  }


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
    preloaderTl.delay(1)
    preloaderTl.to(".content", 1.1, {height:"0", ease:Expo.easeOut});
    preloaderTl.to("#pre-loader-logo", 1, { y: "100px", ease:Expo.easeOut}, "-=1");
    preloaderTl.to(".preloader", 1, {width: "0", ease: Expo.easeOut}, "-=" + 0.5);
    preloaderTl.to(["#pre-loader-container"], 0.5, { autoAlpha: 0, ease: Linear.easeNone }, "+=0.5");
    preloaderTl.set(["#pre-loader-container"], { display: "none" });
    preloaderTl.set(["body"], { overflow: "auto" });
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

// init();
