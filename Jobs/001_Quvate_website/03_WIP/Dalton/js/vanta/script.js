// JS Script file
// JS Script file

// var element = document.getElementById("percent");

// var tl = new TimelineMax({onUpdate:updatePercentage});
// var tl2 = new TimelineMax();
// const controller = new ScrollMagic.Controller({vertical: false});

// tl.from('blockquote', .5, {x:200, opacity: 0});
// tl.from('span', 1, { width: 0}, "=-.5");
// tl.from('#screen', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
// tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

// tl2.from("#box", 1, {opacity: 0, scale: 0});
// tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})
// tl.from('#screen', 1, {x:200, opacity: 1, ease: Power4.easeInOut}, "=-.7");

// const scene = new ScrollMagic.Scene({
//   triggerElement: "#my-background3",
//             triggerHook: "onLeave",
//             duration: "100%",
//             reverse: true,
//             tweenChanges: true
// })
//   .setPin("#my-background3")
//   .setTween(tl)
//   .addTo(controller)

// const scene2 = new ScrollMagic.Scene({

//   triggerElement: "blockquote"

// })
//   .setTween(tl2)
// 		.addTo(controller);


// function updatePercentage() {
//   var progress = (tl.progress() *100 ).toFixed();
//   percent.innerHTML = progress;

//   tl.progress();
//   // console.log(tl.progress());
// }

// function deviceAnimation(){
//   var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

//   var prevButton = document.querySelector("#prevButton");
//   var nextButton = document.querySelector("#nextButton");
//   var boxes = document.querySelectorAll(".box");

//   var boxWidth = 150;
//   var wrapWidth = (boxes.length - 1) * boxWidth;

//   var animatePrev = animateCarousel.bind(prevButton, -boxWidth);
//   var animateNext = animateCarousel.bind(nextButton,  boxWidth);

//   TweenMax.set(boxes, {
//     x: function(i) {
//       return i * boxWidth;
//     }
//   });

  // prevButton.addEventListener("click", animatePrev);
  // nextButton.addEventListener("click", animateNext);

//   function animateCarousel(delta) {
    
//     TweenMax.to(boxes, 0.8, {
//       x: function(i, target) {
//         var x = Math.round(target._gsTransform.x / boxWidth) * boxWidth;
//         return x + delta;
//       },
//       modifiers: {
//         x: function(x) {
//           return wrap(x, -boxWidth, wrapWidth)
//         }
//       }
//     });
//   }

//   function wrap(value, min, max) {
//     var v = value - min;
//     var r = max - min;

//     return ((r + v % r) % r) + min;
//   }

//   console.log(wrap(800, 0, 700));
// }

// deviceAnimation()

// var generateDevices = function(numberOf) {

//     const item = "string";
//     let html;

//     let test = 5; // Number of phone screens

//     for (let i = 0; i < test; i++) {
//     // some statements
//         html = `<div class='item${i}'>${item}</div>`;

//     }

//     console.log(html);

//     // return width * height;
// }



//   generateDevices();