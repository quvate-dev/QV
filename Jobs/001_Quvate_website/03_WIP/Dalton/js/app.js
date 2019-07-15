(function () {
  // var mainTl = new TimelineLite();
  var iphonesDur = 15;
  var defaultEase = Linear.easeNone;

  var iphonesTl = new TimelineLite({onComplete:function() {
    this.restart()}
  });

  iphonesTl.set(["#iphones-group-3"], {yPercent: -100});
  iphonesTl.set(["#iphones-group-4"], {yPercent: -100});
  iphonesTl.to(["#iphones-group-1"], iphonesDur, {yPercent: -100,ease: defaultEase}, 0);
  iphonesTl.to(["#iphones-group-2"], iphonesDur, {yPercent: -100,ease: defaultEase}, 0);
  iphonesTl.to(["#iphones-group-3"], iphonesDur, {yPercent: 0,ease: defaultEase}, 0);
  iphonesTl.to(["#iphones-group-4"], iphonesDur, {yPercent: 0,ease: defaultEase}, 0);

  iphonesTl.set(["#iphones-group-1"], {yPercent: 0});
  iphonesTl.set(["#iphones-group-2"], {yPercent: 0});
  iphonesTl.set(["#iphones-group-3"], {yPercent: -100});
  iphonesTl.set(["#iphones-group-4"], {yPercent: -100});
})();