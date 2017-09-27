$(function() {

  $(window).load(function(){
        $('#loading').addClass('Active');
        $('.Main1').delay(300).animate({
        	opacity: 1},
        	1500);
      });   

      $("#DiorBtn").click(function() {
      	$(".LightboxBg,.LightboxMain,.LightboxX").fadeIn(600);
      });

	  $(".LightboxBg,.LightboxX").click(function() {
	  	$(".LightboxBg,.LightboxMain,.LightboxX").fadeOut(600);
	  });


    $(".ArticleBtn,.Work").click(function() {
      $(".LoadingBg").fadeIn(500);
      setTimeout(function(){window.location.href="works.html";},500);
    });

    $(".Index").click(function() {
      $(".LoadingBg").fadeIn(500);
      setTimeout(function(){window.location.href="index.html";},500);
    });

    $(window).scroll(function() {
      console.log($(window).scrollTop());
        if($(window).scrollTop()>=2500 && $(window).scrollTop()<=9000){
          $("ul.Nav li a").addClass('Active');
        }else{
          $("ul.Nav li a").removeClass('Active');
        }
    });

});
