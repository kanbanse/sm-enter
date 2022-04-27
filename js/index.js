$(function(){
    $('.left_1 nav').hover(function(){
        $('.left_1 nav > ul >li >ul').stop().slideDown(400);
        $('.sub_bg').stop().slideDown(500);
    },function(){
        $('.left_1 nav > ul > li >ul').stop().slideUp(500);
        $('.sub_bg').stop().slideUp(500);
    });
    $('.right_1 nav').hover(function(){
        $('.right_1 nav > ul >li >ul').stop().slideDown(600);
        $('.sub_bg').stop().slideDown(500);
    },function(){
        $('.right_1 nav > ul > li >ul').stop().slideUp(400);
        $('.sub_bg').stop().slideUp(500);
    });
    $('.search a').click(function(){
        $('.search_area').stop().slideDown({
            duration:1000,
            easing:"easeOutBounce"
        });
    });
    $('.search_area > a').click(function(){
        $('.search_area').stop().slideUp(400);
    });
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      var num=0;
    $('.main-senten nav ul li').click(function(){
        $('.main-senten nav ul li').removeClass('active');
        $(this).addClass('active');
        num=$(this).index();
        // each li 개수만큼 반복하라
        $('.m_img ul li').each(function(){
            if(num==$(this).index()){
                $('.m_img ul li').hide();
                $(this).fadeIn(300);
            }
        });
    });
    //  e.preventDefault(); a태그의 링크 속성을 막음 무조건 function(e)도 같이 써야한다
      $('.t1').addClass('active');
      $('.t2').removeClass('active');
    $('.buton_box .new').click(function(e){
        e.preventDefault();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
        $('.new').addClass('active');
        $('.best').removeClass('active');        
    });
    $('.buton_box .best').click(function(e){
        e.preventDefault();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
        $('.new').removeClass('active');
        $('.best').addClass('active');        
    });
    var swiper = new Swiper(".mySwiper2", {
      scrollbar: {
          el: ".barb1",
          hide: false,
        },
      navigation: {
        nextEl: ".myNext1",
        prevEl: ".myPrev1",
      },
    });
    var swiper = new Swiper(".mySwiper3", {
      scrollbar: {
          el: ".barb2",
          hide: false,
        },
      navigation: {
        nextEl: ".myNext2",
        prevEl: ".myPrev2",
      },
    });
    // $('.nav_one .aa').hover(function(){
    //   ('.nav_one. ul').fadeIn(500);
    // },function(){
    //   ('.ul').hide();
    // });
    $('.nav_one .aa').hover(function(){
      $('li').slideDown(500).addClass('active');
      // $('span').addClass('active');
    },function(){
      $('li').removeClass('active');
      // $('span').removeClass('active');
    });
    var numm=0;
    var sw=0;
    // $('.out_box2').show();
    $('.nav_one').hover(function(){
        $(this).addClass('active');
        numm=$(this).index();
        $('.nav_one .aa').removeClass('active');
        // each li 개수만큼 반복하라
        $('.out_bg_box').each(function(){
            if(numm==$(this).index()-1){
              $('.out_bg_box').hide();
                $(this).removeClass('active');
                $(this).show(); 
                $(this).addClass('active');
            }
        });
       
    }); 
    $('.hem').click(function(){
      $('.out_wrap').animate({
        right:0
      },500,function(){
        // 함수호출
        navAni();
      });
    });
    $('.x_button_out').click(function(){
      $('.out_wrap').animate({
        right:'-100%'
      },400,function(){
        navAniEnd();
      });
    });
   
    function navAniEnd(){
      $('body').removeClass('active')
      $('.main_top_popup > ul > li').css({
        'opacity':0
        ,'margin-top':'50px'
      });
      $('.main_bottom_popup > ul > li').css({
        'opcity':0, 'margin-top':'620px'
      });
      $('.nav_one').css({
        'opcity':0, 'margin-top':'1100px'
      });
      $('.go_to_site').css({
        'opcity':0, 'margin-top':'2000px'
      });
    }
    navAniEnd();
    function navAni(){
      $('body').addClass('active')
      $('.main_top_popup ul li').each(function(){
        var liNum=$(this).index();
        $(this).delay(100*liNum).animate({
          'opacity':1,
          'margin-top':0
        });
      });
      $('.main_bottom_popup ul li').each(function(){
        var liNum2=$(this).index();
        $(this).delay(300*liNum2).animate({
          'opacity':1,
          'margin-top':0
        });
      });
      $('.nav_one').each(function(){
        var liNum3=$(this).index();
        $(this).delay(500*liNum3).animate({
          'opacity':1,
          'margin-top':0
        });
      });
      $('.go_to_site').each(function(){
        var liNum3=$(this).index();
        $(this).delay(500*liNum3).animate({
          'opacity':1,
          'margin-top':0
        });
      });
    } 
    $('.family_site').click(function(e){
      e.preventDefault();
      $('.click_f_site ul').show();
    });
    $('.f_nav').click(function(e){
      e.preventDefault();
      $('.click_f_site ul').hide();
    })
    $('.top_menu_icon').click(function(){
      $('html').animate({
        scrollTop:0
      });
    });
    $('nav_one .aa').hover(function(){
      $('span').css('width','100%')
    });
    // top 버튼이 아래쪽에서 조금 위쪽에 위치되어 있다가 홈페이지를 위로 올리면 footer 높이만큼 브라우저 오른쪽이라에 고정되도록 하는 코드 
  $(window).scroll(function(){
    if($(window).scrollTop()+$(window).height() >=$('footer').offset().top){
      $('.top_menu_icon').addClass('active');
    }else{
      $('.top_menu_icon').removeClass('active')
    }
  }); 
});
// !:not 논리 연산자
// if(!($this).hasclass('active'))){
  // 수식 적어넣기  (removeClass , addClass imgMove(btnNum) desMove(btnNum))
// }
// imgMive(함수의 매개변수로 넘김 ) desMove 위로 이동하는 기능을 가진 함수로 호출 