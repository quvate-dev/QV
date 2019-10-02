var ctrl = new ScrollMagic.Controller();
var sections = document.getElementsByTagName("section");
var sectionsArray = Array.from(sections);

sectionsArray.forEach(function(element) {
    var outer = element.querySelector(".outer");
    var inner = element.querySelector(".inner");
  
    new ScrollMagic.Scene({ 
      triggerElement: element,
      triggerHook: 0.15
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