console.log('Hello footerScroll!');

$(function(){
    $(window).scroll(function() {    
      $(navbar).css(marginBottom,"200px")            
      $('#footer').toggle.css(display, block);
        });
    })