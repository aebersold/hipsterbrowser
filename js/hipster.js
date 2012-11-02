;(function($) {


  function fullframe() {
    $(".hipsterframe").height($(window).height());
  }

  function opennavbar() {
    $(".browser", window.parent.document).show('100');
    var vp = $(window, window.parent.document).height();
    console.log(vp);
    vp -= 64;
    $(".hipsterframe", window.parent.document).height(vp);
  }

  $('.start').submit(function(event){
      event.preventDefault();
      var url = $("#surl").val();
      document.title = 'Hipsterbrowser | ' + url;

      $("#url", window.parent.document).attr('value',url);
      opennavbar();

      if(url.substr(0,7) != 'http://'){
          url = 'http://' + url;
      }
      if(url.substr(url.length-1, 1) != '/'){
          url = url + '/';
      }

      $(".hipsterframe", window.parent.document).attr('src',url);
  });

  $('.urlform').submit(function(event){
      event.preventDefault();
      var url = $("#url").val();
      document.title = 'Hipsterbrowser | ' + url;

      $("#url").attr('value',url);

      if(url.substr(0,7) != 'http://'){
          url = 'http://' + url;
      }
      if(url.substr(url.length-1, 1) != '/'){
          url = url + '/';
      }

      $(".hipsterframe").attr('src',url);
  });

  $('.btn').click(function() {
    $('.urlform').submit();
  });

  $(document).ready(function() {
    fullframe();
  });
  $(window).resize(function() {
    if($(".browser").is("visible"))
    {
      opennavbar();
    }
    else 
    {
      fullframe();
    }
  });
})(jQuery);