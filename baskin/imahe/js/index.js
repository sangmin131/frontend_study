
const logoEl = document.querySelector('.main_banner .top_banner'); 

window.addEventListener('scroll', function(){

    if(window.scrollY > 100){
    
        gsap.to(logoEl, 0.2, {
            opacity:0,
            
            display:'none'
                });
    }

});




// 어워즈 섹션 슬라이드 기능
new Swiper('.promotion .swiper', {
    // Optional parameters
    direction: 'horizontal',//수평 슬라이드 (기본 값)
    loop: true, //반복 재생 여부
    autoplay:{delay:3000,//버튼 클릭시 슬라이드 멈춤 해결 딜레이주고 disableOnInteraction: false 주면 댐
    disableOnInteraction: false,},
    slidesPerView: 1,
    spaceBetween:0, //슬라이드 사이 여백 
      navigation: { //이전 다음 슬라이드 버튼 사용
        nextEl: '.promotion .swiper-button-next',
        prevEl: '.promotion .swiper-button-prev',
        
      },
    
});
