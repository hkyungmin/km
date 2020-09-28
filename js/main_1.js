$(function(){
  
                                          
 
	  $(window).scroll(function(){
		
	     if($(document).scrollTop()>= 950){
		 $('#header').css({background:'rgba(255,255,255,0.5)'}); 
         $('#header p').css({'background-image':'url(images/logo_c.png)'})
              $('#header ul li').css({color:'#092f3c'})
           
         } 
		 else {
		$('#header').css({background: 'rgba(255,255,255,0)'})
           $('#header p').css({'background-image':'url(images/logo.png)'})
            $('#header ul li').css({color:'#fff'})
         }; 
          
          
		 });
    
})