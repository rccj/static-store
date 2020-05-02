(function(){
  function menuHandler(){
    $('.mobile-bar li').stop().slideToggle()
  }
  $('.hamburger').click(menuHandler)
})()