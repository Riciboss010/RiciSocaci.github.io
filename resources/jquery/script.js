

/* global $ */

/* eslint-env jquery */

$('document').ready(function() {
 
    $('.section-features').waypoint(function(direction) {
 
        if (direction == "down") {
 
            $('nav').addClass('sticky');
 
        } else {
 
            $('nav').removeClass('sticky');
 
 
        }
    }, {
        offset: '60px;'
        

 

 
    });
    
    
    
    /*scroll to buttons*/
    
    $('.btn btn-full').click(function () {
       
        $('html, body').animate({scrollDown: $('.section-plans').offset().top},1000);
        
        
        
    });
    
    
    
    
    
});