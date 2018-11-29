$(document).ready(function() {
    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
        $input = $( this );
        $target = $('#'+$input.attr('data-toggle'));
        $target.slideToggle();
    });        
     document.getElementById("detail-1").style.display = "block";    
});

function deleteCard(id){
    document.getElementById("txtVariableId").innerHTML = '<a href  = "/mon-compte/card-delete/'+id+'" class = "btn btn-danger" style = "float:right">EFFACER</a>';
    showComfirmation();
}

function showComfirmation(){
    
    $('#comfirmVir').css({
      'transform':'translateY(0)',
      'z-index':'999'
    });    
    $(this).css({
      'z-index':'-1'
    });    
    $('#comfirmVir > .closedelvirement').on('click',function(){
      $(this).parent().css({
      'transform':'translateY(-300%)'
     });        
      
    $(this).parent().siblings('.btn').css({
      'z-index':'1'
    });
      return false;
    });
  
};