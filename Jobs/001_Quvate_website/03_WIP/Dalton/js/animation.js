 /*------------------------------------*\
    Animation
  \*------------------------------------*/
  function preLoader() {
    var mainTl = new TimelineMax();
    // mainTl.to([window], 0.5, {scrollTo: {y: 0, x: "max", autoKill: false }, ease: Linear.easeNone}, "+=1");
    // TweenLite.to(["#pre-loader"], 2, {scrollTo:{x:1200}, ease:Power2.easeOut});
    // TweenLite.to(window, 1, {scrollTo:{x:"#home", autoKill:false}});
    // TODO make it scroll to next section
    mainTl.to(["#pre-loader"], 0.5, {autoAlpha: 0, ease: Linear.easeNone}, "+=1");
    mainTl.set(["#pre-loader"], {display: "none"});
  }
  
  /* Text Block */
  function textBlockAnimation() {      
    var ctrl = new ScrollMagic.Controller({vertical: false});
    var sections = document.getElementsByTagName("section");
    var sectionsArray = Array.from(sections);

    sectionsArray.forEach(function(element) {
      var knockOutText = element.querySelector(".knockout-text");
      var sublineText = element.querySelector(".subline-text");
      var asideText = element.querySelector(".aside-text");

      // Break out of function if no element found
      if (!knockOutText) {
        return;
      }

      var tl = new TimelineMax();
      tl.play();  
      tl.from(knockOutText, 0.5, { y: 500});
      tl.from(sublineText, 0.5, { y: 500}, 0.25);
      if (asideText){
        tl.from(asideText, 0.2, { y: 50,}, "-=0.5");
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

  /* iPhone */
  function iphoneAnimation() {
    var iphonesTl = new TimelineLite({onComplete:function() {
      this.restart()}
    });
    var dur = 25;
    var defaultEase = Linear.easeNone;

    iphonesTl.set(["#iphones-group-3"], {yPercent: -100});
    iphonesTl.set(["#iphones-group-4"], {yPercent: -100});
    iphonesTl.to(["#iphones-group-1"], dur, {yPercent: -100,ease: defaultEase}, 0);
    iphonesTl.to(["#iphones-group-2"], dur, {yPercent: -100,ease: defaultEase}, 0);
    iphonesTl.to(["#iphones-group-3"], dur, {yPercent: 0,ease: defaultEase}, 0);
    iphonesTl.to(["#iphones-group-4"], dur, {yPercent: 0,ease: defaultEase}, 0);

    iphonesTl.set(["#iphones-group-1"], {yPercent: 0});
    iphonesTl.set(["#iphones-group-2"], {yPercent: 0});
    iphonesTl.set(["#iphones-group-3"], {yPercent: -100});
    iphonesTl.set(["#iphones-group-4"], {yPercent: -100}); 
  }