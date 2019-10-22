window.onload=function()
{    
    $(document).ready(function()
    {
    
        $(".loader").fadeOut(1000,function()
        {
            $(".slide-left,.slide-right").animate({
            "width":"0%"
        },500,function()
        {
            $(".loader-con").fadeOut(1000);
        });
        });
    });
}

$(function()
{
    "use strict";
    $("#menu").slicknav({
        label:'',
        brand:'Suraj Bhadola',
    });
});
/* start big slider*/
$(document).ready(function() {
	"use strict";
  $(".skitter-large").skitter({
      label:false,
      dots:false,
  });
});

/* end big slider*/

$(document).ready(function()
{
    $(".picone-header").slideDown(1000,function()
    {
        $(".picone-btn").fadeIn(2000,function()
        {
            $(".picone-header,.picone-btn").delay(10).fadeOut(function()
            {
                $(".slider-label").css("background-color","rgba(0,0,0,0.5)");
                $(".pictwo-header").fadeIn(1000,function()
                {
                    $(".pictwo-para").show(1500,function()
                    {
                        $(".pictwo-btn").fadeIn(1000,function()
                        {
                            $(".pictwo-header,.pictwo-para,.pictwo-btn").delay(2800).fadeOut(function()
                            {
                                if($(window).width()>992){
                                $(".slider-label").css("background-color","rgba(0,0,0,0)");}
                            });
                        });
                    });
                });
            });
        });
    });
});
/* how to use setinterval function in jquey*/
$(document).ready(function()
{
    setInterval(function()
    {
        $(".picone-header").slideDown(1000,function()
        {
            $(".picone-btn").fadeIn(2000,function()
            {
                $(".picone-header,.picone-btn").delay(1).fadeOut(function()
                {
                    $(".slider-label").css("background-color","rgba(0,0,0,0.5)");
                    $(".pictwo-header").fadeIn(1000,function()
                    {
                        $(".pictwo-para").show(1500,function()
                        {
                            $(".pictwo-btn").fadeIn(1000,function()
                            {
                                $(".pictwo-header,.pictwo-para,.pictwo-btn").delay(2800).fadeOut(function()
                                {
                                    if($(window).width()>992)
                                    {
                                    $(".slider-label").css("background-color","rgba(0,0,0,0)");
                                    }
                                });
                            });
                        });
                    });
                });
            });
        });
    },10500);
});

/*start project slider */
$(document).ready(function(){
	"use strict";
	$(".center").slick({
		dots:false,
		infinite:true,
		centerMode:true,
		slidesToShow:5,
        slidesToScroll:3,
        responsive:[
            {
                breakpoint:768,        /*for tablet  */
                settings:{
                    dots:false,
		            infinite:true,
		            centerMode:true,
		            slidesToShow:3,
                    slidesToScroll:3,
                    centerPadding:'40px',
                }
            },

            {
                breakpoint:480,/*for mobile */
                settings:{
                    arrows:false,
                    dots:false,
		            infinite:true,
		            slidesToShow:1,
                    slidesToScroll:3,
                    centerPadding:'20px',
                }
            },
         ]
	});
});
/*end project slider*/

/*start progrss-bar */
$(document).ready(function(){
    var pone = $('.progress-one').html();
    var ptwo = $('.progress-two').html();
    var pthree = $('.progress-three').html();
	var pfour = $('.progress-four').html();
    var pfive = $('.progress-five').html();
    $(".progress-one").animate({'width':pone},5000,function(){
        $('.progress-two').animate({'width':ptwo},5000,function(){
            $('.progress-three').animate({'width':pthree},5000,function(){
				$('.progress-four').animate({'width':pfour},5000,function(){
					$('.progress-five').animate({'width':pfive},5000);
				});
			});
        });
    });
});







/*end progress bar */

/*start page scroll effect*/

/**start page scroll efffect */
$(document).ready(function(){
    if($(window).width()>1024)
    {
    $(document).scroll(function(){
        var x = window.pageYOffset;
        if(x>400){
            $(".my-pic,.about-text").slideDown(2000);
        }
        else{
            $(".my-pic,.about-text").slideUp(1000);
        }

        if(x>779)
        {
            $(document).ready(function(){
                var pone = $('.progress-one').html();
                var ptwo = $('.progress-two').html();
                var pthree = $('.progress-three').html();
                var pfour = $('.progress-four').html();
                var pfive = $('.progress-five').html();
                $(".progress-one").animate({'width':pone},500,function(){
                    $('.progress-two').animate({'width':ptwo},500,function(){
                        $('.progress-three').animate({'width':pthree},500,function(){
                            $('.progress-four').animate({'width':pfour},500,function(){
                                $('.progress-five').animate({'width':pfive},500);
                            });
                        });
                    });
                });
            });
        }
    });
}
});


/**end page scroll effect */