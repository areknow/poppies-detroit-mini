// ====================================================================
// Common - js
// 
// Scripts for the entire app
// ====================================================================

(function() {

  // ============================================
  // Document ready
  // ============================================
  $(function() {

    // Anchor scrolling
    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });

  });// end document ready

  // ============================================
  // Window on load - hide page loader animation
  // ============================================
  $(window).on('load', function(){
    setTimeout(function() {
      $( ".page-loader-cover" ).fadeOut(500, function() {
        $( ".page-loader-cover" ).remove();
      });  
    }, 2000);
  });

  // function renderEvents(params) {
  //   $.getJSON('assets/data/events.json', function(data) {   
  //     $.each(data, function(key, value) {
  //       console.log(data);
        
  //       // $("#parent").append("<div>");
  //     });
  //   });
  // }

})();
