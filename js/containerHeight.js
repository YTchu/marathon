$(function(){

  function containerHeight(){
    var H = $(window).height() - $('.topBar').height() - $('.focus').height() - $('.footerBar').height() - 60;
    $('.container').css('min-height', H); 
    console.log('bbb')
  }

  containerHeight();
  $(window).resize(containerHeight);

});