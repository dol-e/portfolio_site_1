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

    1660: { //1660보다 커졌을 때
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

    1660: { //1660보다 커졌을 때
      slidesPerView: 4
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});