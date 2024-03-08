//$ : 제이쿼리
//document : 문서(<body> ~ </body>를 가리킴)
//ready() : 문서가 준비되면 ...이라는 뜻의 이벤트
//function() {} : 함수, ready 이벤트가 발생하면 실행되는 문장들
$(document).ready(function(){
  //pc버전 header의 검색 버튼  
  $(".search_btn").click(function(){
    //단위를 붙이면 ""필수 단위 안붙이면 그냥 숫자 기본단위가 px임
    //.search_area의 가로길이가 180px로 늘어남
    $(".search_area").animate({"width":180});
    //top_menu의 input입력란의 가로길이가 143px로 늘어남
    $(".topMenu input").animate({"width":"143px"});
    //.top_menu ul 영역의 오른쪽 여백이 180px로 늘어남
    $(".topMenu ul").animate({"margin-right":180});
  });
  //pc버전 글로벌 내비게이션 주메뉴에 마우스 오버하면 서브메뉴 슬라이드다운
  $(".menu nav > ul > li").mouseenter(function(){
    //0.5초동안 슬라이드다운 밀리세컨드 단위 사용 (1/1000초)
    //find()메서드는 자식객체를 탐색함
    //$(this)는 nav > ul > li 중 마우스 오버된 객체만 가리킴
    //stop()은 stack(메모리의 일종)에 쌓여있는 명령어 실행 중지
    $(this).find(".sub").stop().slideDown(300);
  });
  //pc버전 글로벌 내비게이션 주메뉴에서 마우스 아웃하면 서브메뉴 슬라이드업
  $(".menu nav > ul > li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp(300);
  });

  //header영역의 모바일 버전 글로벌 내비게이션
  //모바일 메뉴 버튼을 클릭하면 메뉴 영역이 오른쪽에서 나타남
  $(".mobile_menu_btn").click(function(){
    $(".mobile_menu").animate({
      "right":0
    });
    // X버튼 회전
    $(".close_btn i").addClass("active");
  });
  //모바일 메뉴의 X(닫기)버튼을 클릭하면 메뉴 영역이 오른쪽으로 들어감
  $(".close_btn i").click(function(){
    $(".mobile_menu").animate({
      "right":"-100vw"
    });
    // X버튼 회전
    $(".close_btn i").removeClass("active");
  });
  //모바일 네비게이션 아코디언 메뉴(accordion menu)
  $('.mobile_menu_box nav ul li a').click(function(){
    $(this).next().slideToggle();
    //화살표 방향 변경
    $(this).toggleClass("active");
    // 클릭할때 위로 올라가지 말라는 의미
    return false;
  });

  //html문서의 가로길이가 660px이하라면
  if($("html, body").width() <= 660){
    //$(".sitemap_list > ul > li > a") : 선택자
    //click() : 클릭이벤트
    $(".sitemap_list > ul > li > a").click(function(){
      //만약 클릭한 a태그에 active클래스가 추가되어 있지 않다면
      if($(this).attr("class") != "active"){            
          //not(this) : 클릭한 메뉴 이외의 객체들
          //slideUp() : 객체를 접음.
          $(".sitemap_list > ul > li > a").next().slideUp();
          //$(this) : 클릭이벤트가 발생한 객체를 가리킴
          //next() : 클릭이벤트가 발생한 객체의 다음 형제객체
          $(this).next().slideDown();
          //removeClass("active") : active 클래스를 제거함
          $(".sitemap_list > ul > li > a").removeClass("active");
          //addClass("active") : active 클래스를 추가함
          $(this).addClass("active");                    
          //a태그를 클릭할 때 맨 위로 이동하는 것을 방지함.
          return false;

      //클릭한 a태그에 active가 이미 추가되어 있는 상태라면    
      }
      else{
          //다시 클릭한 주메뉴의 서브메뉴 들어감
          $(this).next().slideUp();
          //다시 클릭한 주메뉴에서 active클래스 제거
          $(this).removeClass("active");
          //a태그를 클릭할 때 맨 위로 이동하는 것을 방지함.
          return false;
      }        
    });
  } //if문

    //swiper slide
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        //자동 슬라이드
        autoplay:{
            delay:2000      //2초 (millisecond 단위 1/1000초)
        },
        breakpoints: {
          //when window width is >= 1024px
          //윈도우의 가로길이가 1024px이상
          1024: {
            slidesPerView:3,
            slidesPerGroup:3
          },
          //윈도우의 가로길이가 768px이상~1024px미만
          768: {
            slidesPerView:3,
            slidesPerGroup:3
          },
          //윈도우의 가로길이가 480px이상~768px미만
          480: {
            slidesPerView:1,
            slidesPerGroup:1
          },
          360: {
            slidesPerView:1,
            slidesPerGroup:1
          }
        }
      });
      //swiper 슬라이드 버튼
      $(".fa-pause").click(function(){
        //클릭한 객체를 숨김 css의 display:none;과 동일한 역할
        $(this).hide();
        //.fa-play객체 보임(인라인+블록 요소)
        //제이쿼리로 .css 명령어를 수행하게 함
        $(".fa-play").css("display","inline-block");
        //swiper 자동 슬라이드 멈춤
        swiper.autoplay.stop();
      });
      $(".fa-play").click(function(){
        //클릭한 객체(.fa-play)를 숨김
        $(this).hide();
        //.fa-pause 보임(인라인+블록 요소)
        $(".fa-pause").css("display","inline-block");
        //swiper 자동 슬라이드 시작
        swiper.autoplay.start();
      });

      //화면이 scroll되면 각 section의 자식 컨텐츠(.ani) 애니메이션
      $('section.s1 .ani').addClass('active');
      $('section.s1 .ani').addClass('delay');    
      //$(window).scroll() : 윈도우에 scroll이벤트 설정
      $(window).scroll(function(){
        //윈도우($(this))의 scrollTop값을 winTop변수에 저장
        let winTop=$(this).scrollTop();
        //section개수만큼 반복
        $('section').each(function(){
          //section($(this))의 맨위(top)-300 계산한 값을 secTop변수에 저장
          let secTop=$(this).offset().top-300;
          //만약 secTop값이 winTip값보다 작으면
          if(secTop < winTop) {
            //section($(this))의 자식객체 .ani에 active클래스와 delay클래스 추가
            $(this).find('.ani').addClass('active')
            $(this).find('.ani').addClass('delay')
          }
        });    //each
      });     //scroll
});