(function () {
  /*------------------------------------*\
    Pre-loader 
  \*------------------------------------*/
  function preLoader() {
    // var mainTl = new TimelineMax({repeat: -1});
    var mainTl = new TimelineMax();
    // mainTl.to(["#pre-loader svg"], 1, {autoAlpha: 0, ease: Linear.easeNone}, "+=1");
    // mainTl.to(["#pre-loader"], 1, {autoAlpha: 0, ease: Linear.easeNone}, "-=0.75");    
    // mainTl.set(["#pre-loader"], {display: "none"});
    mainTl.from(["#pre-loader-logo"], 0.75, {autoAlpha: 0, ease: Linear.easeNone}, "+=1");
    mainTl.to(["#pre-loader-logo"], 0.75, {autoAlpha: 0, ease: Linear.easeNone});
    mainTl.to(["#u"], 0.15, {display: "block", ease: Linear.easeNone});
    mainTl.to(["#u"], 0.15, {display: "none", ease: Linear.easeNone});
    mainTl.to(["#v"], 0.15, {display: "block", ease: Linear.easeNone});
    mainTl.to(["#v"], 0.15, {display: "none", ease: Linear.easeNone});
    mainTl.to(["#a"], 0.15, {display: "block", ease: Linear.easeNone});
    mainTl.to(["#a"], 0.15, {display: "none", ease: Linear.easeNone});
    mainTl.to(["#t"], 0.15, {display: "block", ease: Linear.easeNone});
    mainTl.to(["#t"], 0.15, {display: "none", ease: Linear.easeNone});
    mainTl.to(["#e"], 0.15, {display: "block", ease: Linear.easeNone});
    mainTl.to(["#e"], 0.15, {display: "none", ease: Linear.easeNone}, "+=0.5");
    mainTl.to(["#pre-loader"], 1.5, {autoAlpha: 0, ease: Linear.easeNone}, "+=1");
    mainTl.set(["#pre-loader"], {display: "none"});
  }
  /*------------------------------------*\
    Animation
  \*------------------------------------*/
  /* Text Block */
  function textBlockAnimation() {
        
    var staggerTL = new TimelineMax();

    staggerTL
      // .staggerFrom(".text", 0.5, { y: 100}, 0.1)
      .staggerFrom(".text", 0.7, { y: 500}, 0.25)
      .from(".aside-text", 0.25, { y: 50,}, "-=0.5")
      // .staggerFrom(".text", 0.5, { x: 150}, 0.1);

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


  document.addEventListener("DOMContentLoaded", () => {
    preLoader();
    textBlockAnimation();
    // Run iPhone animation
    iphoneAnimation();
  });

})();