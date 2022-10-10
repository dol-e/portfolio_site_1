

/* 메뉴 - PC버전 */
const wrap = document.querySelector("#wrap");
const gnb = wrap.querySelector("#gnb");
const gnb_lis = wrap.querySelectorAll("#gnb > li");


//서브메뉴 배경 넣기
const subMenuBg = document.createElement('div');
subMenuBg.className="sub_bg";
wrap.appendChild(subMenuBg);


//서브메뉴가 있으면 li에 클래스 down붙이기
for(let el of gnb_lis) {
  const isSubMenu = el.querySelector(".sub_menu");
  if(isSubMenu) {
    el.classList.add("down");
  } 
}


//풀다운메뉴

function mouseOverHandler(e){

  for(let el of gnb_lis) {
    el.classList.remove("on");
  }

  const isSubMenu = e.currentTarget.querySelector(".sub_menu");
  if(!isSubMenu) return;

  this.classList.add("on");
  subMenuBg.classList.add("on");
  
}

function mouseLeaveHandler(e){
  for(let el of gnb_lis) {
    el.classList.remove("on");
  }
  subMenuBg.classList.remove("on");
}

for(let el of gnb_lis) {
  el.addEventListener('mouseover',mouseOverHandler);
  el.addEventListener('mouseleave',mouseLeaveHandler);
}

gnb.addEventListener('mouseleave',mouseLeaveHandler);




/* 메뉴 - 모바일 버전 */
const gnb_mo_lis = wrap.querySelectorAll("#gnb_mo > ul > li");
const gnb_mo_sub = wrap.querySelector("#gnb_mo > ul > li .sub_menu");


//서브메뉴가 있으면 li에 클래스 down붙이기
for(let el of gnb_mo_lis) {
  const isSubMenu = el.querySelector(".sub_menu");
  if(isSubMenu) {
    el.classList.add("down");
  } 
}

// 아코디언 메뉴
function mouseClickHandler(){

  const target = this;

  const isSubMenu = target.querySelector(".sub_menu");
  if(!isSubMenu) return;

  const hasClassOn = target.classList.contains("on");

  for(let el of gnb_mo_lis) {
    el.classList.remove("on");
  }

  if(hasClassOn){
    target.classList.remove("on");
  } else {
    target.classList.add("on");
  }

}

gnb_mo_lis.forEach(function(el) {
  el.addEventListener('click',mouseClickHandler);
});





