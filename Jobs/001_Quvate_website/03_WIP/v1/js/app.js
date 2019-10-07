$(window).on('load', function(){
  $.when(
    $.getScript( "js/horizontalScroll.js" ),
    $.getScript( "js/animation.js" ),
    $.getScript( "js/menu.js" ),
    $.getScript( "js/transition.js" ),
    // $.getScript( "js/zoom.js" ),
    $.getScript( "js/map.js" ),
    // $.getScript( "js/scroll.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
  ).done(function(){
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
    //place your code here, the scripts are all loaded
    preLoader()
    // textBlockAnimation();
    // iphoneAnimation();
    

  });
});