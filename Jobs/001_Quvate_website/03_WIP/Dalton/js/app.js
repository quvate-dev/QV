$(window).on('load', function(){
  $.when(
    $.getScript( "js/horizontalScroll.js" ),
    $.getScript( "js/animation.js" ),
    $.getScript( "js/menu.js" ),
    $.getScript( "js/transition.js" ),
    $.getScript( "js/zoom.js" ),
    // $.getScript( "js/scroll.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
  ).done(function(){

    //place your code here, the scripts are all loaded
    preLoader()
    // textBlockAnimation();
    // iphoneAnimation();
    

  });
});