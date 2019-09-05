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

  // var count = 0;
  // setInterval(() => {
  //   if(count == 0){
  //     count =+ 1;
  //   } else {
  //     count = 0;
  //   }
  //   console.log("count = " + count);
  // }, 3000);
  // /* Text Swap */
  // function textSwap() {
  //   if(count > 0) {
  //     $(".text-one").hide();
  //     $(".text-two").show();
  //     count = 0;
  //   } else {
  //     $(".text-one").show();
  //     $(".text-two").hide();
  //     count ++;
  //   }
  // }
  
  var textObj = {
    "home" : {
      "knockoutText" : {
        "text-one" : "text-one",
        "text-two" : "text-two",
      },
      "sublineText" : {
        "text-one" : "lorem",
        "text-two" : "lorem2",
      },
      "asideText" : {
        "text-one" : "lorem",
        "text-two" : "lorem2",
      }
    }    
  }

  var homeKnockout = document.getElementById("home").querySelector(".knockout-text");
  // var home = document.getElementById('home').querySelector('.text-one');
  // console.log(homeKnockout);

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
      } else {
        // TODO need to do something like like but triggered with greensock
        // if(count > 0) {
        //   knockOutText.innerHTML = textObj.home.knockoutText["text-one"];          
        // } else {
        //   knockOutText.innerHTML = textObj.home.knockoutText["text-two"];
        // }        
      }
      console.log(element);
      console.log(1);

      var tl = new TimelineMax();
      tl.play();

      // todo try to swap text with gsap
      // tl.set(knockOutText,{text:"rtest"});
      // TweenLite.to(knockOutText, 1, {text:{value:"Your new text"}});
      tl.set(knockOutText, {text:"This is the new text"}, 0);

      tl.from(knockOutText, 0.5, { y: 500, text:"This is the new text"});
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