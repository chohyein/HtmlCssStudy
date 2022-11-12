$(function(){
  /모든 내용을 읽고 난 다음에, jqeury를 실행해! 라는 명령어/ 
  $('.accordion .title').click(function(){
    $(this).siblings('.accordion .content').slideUp()
    $(this).next().stop().slideToggle()
    $(this).toggleClass('active')
    $(this).siblings().removeClass('active')
  })
})
