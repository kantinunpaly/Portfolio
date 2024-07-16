$(document).ready(function(){

    // jQuery methods go here...

  
    $("img").click(function(){
      var img=$(this).attr('src');
        $("#show-img").attr('src',img);
        $("#imgmodal").modal('show');
   });
   jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },2000);
    });
  });
   
  });
