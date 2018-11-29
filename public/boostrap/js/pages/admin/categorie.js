$(function() {
  $(".expand").on( "click", function() {
    // $(this).next().slideToggle(200);
    $expand = $(this).find(">:first-child");
    
    if($expand.text() == "+") {
      $expand.text("-");
    } else {
      $expand.text("+");
    }
  });
});

function ajoutCategorie(){
    
    $('#popupAjoutCategorie').css({
      'transform':'translateY(0)',
      'z-index':'999'
    });    
    $(this).css({
      'z-index':'-1'
    });    
    $('#popupAjoutCategorie > .closedelvirement').on('click',function(){
        $(this).parent().css({
         'transform':'translateY(-300%)'
        });              
    $(this).parent().siblings('.btn').css({
      'z-index':'1'
    });
      return false;
    });
  
}