(function () {

  /*------------------------------------*\
    Pre-loader 
  \*------------------------------------*/
  function preLoader() {
    var mainTl = new TimelineLite();
    mainTl.to(["#pre-loader svg"], 1, {autoAlpha: 0, ease: Linear.easeNone}, "+=1");
    mainTl.to(["#pre-loader"], 1, {autoAlpha: 0, ease: Linear.easeNone}, "-=0.75");    
  }
  /*------------------------------------*\
    Animation
  \*------------------------------------*/
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
    preLoader()
    // Run iPhone animation
    iphoneAnimation();
  });

})();