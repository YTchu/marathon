$(function(){

  $('.more').on('click',function(){
    $('.menu').css('left', 0);
    $('body').css('overflow', 'hidden');
    $('.close').css({
      right: '0'
    });
  });

  $('.menu').on('click',function(){
    $(this).css('left', '');
    $('body').css('overflow', '');
    $('.close').css({
      right:''
    });
  });
});