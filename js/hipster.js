;(function($) {


  function fullframe() {
    $(".hipsterframe").height($(window).height());
  }

  function opennavbar() {
    $(".browser").show('100');
    var vp = $(window).height();
    vp -= 64;
    $(".hipsterframe").height(vp);
  }

  $('.hipsterframe').contents().find('form').submit(function(event){
      event.preventDefault();

      var url = $('.hipsterframe').contents().find("#surl").val();

      $("#url", window.parent.document).attr('value',url);
      opennavbar();

      if(url.substr(0,7) !== 'http://'){
          url = 'http://' + url;
      }
      if(url.substr(url.length-1, 1) !== '/'){
          url = url + '/';
      }
      

      $(".hipsterframe").attr('src',url);
      $(".hipsterframe").addClass("go");
  });

  $('.urlform').submit(function(event){
      event.preventDefault();
      var url = $("#url").val();
      document.title = 'Hipsterbrowser | ' + url;

      $("#url").attr('value',url);

      if(url.substr(0,7) !== 'http://'){
          url = 'http://' + url;
      }
      if(url.substr(url.length-1, 1) !== '/'){
          url = url + '/';
      }

      $(".hipsterframe").attr('src',url);
      $(".hipsterframe").addClass("go");


  });

  $('.btn').click(function() {
    $('.urlform').submit();
  });

  $(document).ready(function() {
    opennavbar();
  });
  $(window).resize(function() {
    if($(".browser").is("visible"))
    {
      opennavbar();
    }
    else
    {
      opennavbar();
    }
  });
})(jQuery);