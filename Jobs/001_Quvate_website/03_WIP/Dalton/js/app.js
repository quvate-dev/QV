$(window).on('load', function(){
  $.when(
    $.getScript( "js/animation.js" ),
    // $.getScript( "js/scroll.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
  ).done(function(){

    //place your code here, the scripts are all loaded
    preLoader()
    iphoneAnimation();
    setTimeout(() => {
      textBlockAnimation();
    }, 750);

  });
});