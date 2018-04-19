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

    renderEvents()

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

  function renderEvents(params) {
    $.getJSON('assets/data/events.json', function(data) {   
      $.each(data.events, function(key, value) {
        console.log(value);
        
        $('#events-list').append(
          $('<div>', {class: 'item'}).append(
            $('<h2>').append(
              $('<a>', {text: value.title, href: value.link})
            ),
            $('<p>', {text: value.body}),
            $('<div>', {class: 'meta'}).append(
              $('<div>', {class: 'date inline', text: moment.unix(value.date).format('dddd, MMMM Do, YYYY')}),
              $('<div>', {class: 'arrow inline'}).append(
                $('<img>', {src: '/assets/images/arrow-right.svg'})
              )
            )
          )
        )
      });
    });
  }

})();
