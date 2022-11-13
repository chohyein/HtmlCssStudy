$(function(){
  $('.item .title').click(function(){
    $(this).next().stop().slideToggle()
    $(this).toggleClass('active')
  })

  $('.item .content').click(function(){
    $(this).stop().slideUp()
  })
})