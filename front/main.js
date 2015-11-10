(function(){
  
  'use strict';

  $(document).ready(main);

  function main(){
    $('.converter').click(post);
  }

  function post(){
    var data = $('textarea').val();
    $.post('/',{markdown:data}).done(function(data){
      $('.render').attr('srcdoc',data);
      console.log(data);
    })
  }
  
})();