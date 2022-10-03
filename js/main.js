// swiper1 - 비주얼 영역
var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

// swiper2 - PRODUCT 섹션
var swiper2 = new Swiper(".swiper2", {
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
const tab_btns = document.querySelectorAll(".tab_pro > li");
const tab_cont = document.querySelectorAll(".tab_cont .swiper-slide");
const tab_btns_a = document.querySelectorAll(".tab_pro > li > a");

tab_btns_a.forEach((el,index)=>{
    el.addEventListener("focusin",()=>{
        activation(tab_btns, index);
        activation(tab_cont, index);
    })
})

tab_btns.forEach((dt,index)=>{
    dt.addEventListener("click",(e)=>{
        e.preventDefault();
        
        activation(tab_btns,index);
        activation(tab_cont,index);
    })
})

function activation(arr,index){
    for(let el of arr){
            el.classList.remove("on");
        }
        arr[index].classList.add("on");
}


// swiper3 - EVENT 섹션
var swiper3 = new Swiper(".swiper3", {
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
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});