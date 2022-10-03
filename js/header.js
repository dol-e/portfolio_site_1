const wrap = document.querySelector("#wrap");
const gnb = wrap.querySelector("#gnb");
const gnb_lis = wrap.querySelectorAll("#gnb > li");
const subMenuBg = document.createElement('div');
subMenuBg.className="sub_bg";
wrap.appendChild(subMenuBg);


function mouseOverHandler(){
  for(let el of gnb_lis) {
    el.classList.remove("on");
  }
  this.classList.add("on");
  subMenuBg.classList.add("on");
  
}

function mouseLeaveHandler(){
  for(let el of gnb_lis) {
    el.classList.remove("on");
  }
  subMenuBg.classList.remove("on");
}

for(let el of gnb_lis) {
  el.addEventListener('mouseover',mouseOverHandler);
}

gnb.addEventListener('mouseleave',mouseLeaveHandler);




