
// 이미지 경로 변경 - 비주얼 영역
const mediaQuery = window.matchMedia('(max-width: 750px)');
const visualSlide = document.querySelectorAll(".swiper1 .swiper-slide");
const imgInfo = [
  {fileName: "visual_1", alt: "22.10.07 ~ 10.17 바베큐 풀드포크 구매 시 유인 아메리카노 증정 & 무인 즉시 할인!"},
  {fileName: "visual_2", alt: "헤이즐넛과 함께 더 진해져서 돌아온 RENEWAL 초코퐁당 샌드위치"}
];

function handleImgSrc(e) {

  visualSlide.forEach((el,index)=>{

    let fileName ="";

    if (e.matches) {
      fileName = `${imgInfo[index].fileName}_m`;
    } else {
      fileName = imgInfo[index].fileName;
    }
    
    const $imgHtml = `<img src="img/main/${fileName}.png" alt="${imgInfo[index].alt}">`;
    el.innerHTML = $imgHtml;
  });

}

mediaQuery.addListener(handleImgSrc);
handleImgSrc(mediaQuery);



// swiper1 - 비주얼 영역
const bullet = ['바베큐 풀드포크', '초코퐁당 샌드위치'];
const swiper1 = new Swiper(".swiper1", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      const slideIdx = String(index+1).padStart(2,"0");
      const htmls = `
      <div class="${className}">
        <span>${slideIdx}</span>
        <span class="icon"></span>
        <span>${bullet[index]}</span>
      </div>  
      `;
      return htmls;
    }
  }
});

// swiper2 - PRODUCT 섹션
const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {

    900: { //900보다 커졌을 때
      slidesPerView: 2
    },

    1200: { //1200보다 커졌을 때
      slidesPerView: 3
    },

    1600: { //1600보다 커졌을 때
      slidesPerView: 4
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// 탭메뉴 - PRODUCT 섹션
const proBtns = document.querySelectorAll(".tab_pro > li");
const proCont = document.querySelectorAll(".tab_pro .tab_cont .swiper-slide");
const proBtns_a = document.querySelectorAll(".tab_pro > li > a");

proBtns_a.forEach((el,index)=>{
    el.addEventListener("focusin",()=>{
        activation(proBtns, index);
        activation(proCont, index);
    });
});

proBtns.forEach((dt,index)=>{
    dt.addEventListener("click",(e)=>{
        e.preventDefault();
        
        activation(proBtns,index);
        activation(proCont,index);
    });
});

function activation(arr,index){
    for(let el of arr){
            el.classList.remove("on");
        }
        arr[index].classList.add("on");
}


// swiper3 - EVENT 섹션
const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {

    900: { //900보다 커졌을 때
      slidesPerView: 2
    },

    1200: { //1200보다 커졌을 때
      slidesPerView: 3
    },

    1600: { //1600보다 커졌을 때
      slidesPerView: 4
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});