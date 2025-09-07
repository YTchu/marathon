$(function(){

    $('.point:nth-child(1)').on('click', function(){
    $('.point:nth-child(2)').removeClass('js-point');
    $(this).addClass('js-point');
    $('.selectNow').text('5');
  })
  
  $('.point:nth-child(2)').on('click', function(){
    $('.point:nth-child(1)').removeClass('js-point');
    $(this).addClass('js-point');
    $('.selectNow').text('10');
  })
  
});