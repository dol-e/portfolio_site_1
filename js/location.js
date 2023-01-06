
var container = document.getElementById('map');
const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];
const branch_btns = document.querySelectorAll(".branch li");

let zoom = true;


var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.58078, 127.0705739), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var markerOptions =[
  {
    title:"휘경점",
    latlag: new kakao.maps.LatLng(37.58078, 127.0705739),
    button : branch_btns[0]
  },
  {
    title:"청구역점",
    latlag: new kakao.maps.LatLng(37.5596114, 127.0136569),
    button : branch_btns[1]
  },
  {
    title:"교대점",
    latlag: new kakao.maps.LatLng(37.49394, 127.0155322),
    button : branch_btns[2]
  },
  {
    title:"미아점",
    latlag: new kakao.maps.LatLng(37.6201631, 127.0162909),
    button : branch_btns[3]
  },
  {
    title:"신도림점",
    latlag: new kakao.maps.LatLng(37.5093957, 126.8877258),
    button : branch_btns[4]
  },

]

for(let i=0; i<markerOptions.length; i++){
    new kakao.maps.Marker({
        map : map,
        position : markerOptions[i].latlag,
        title : markerOptions[i].title,
    })

    markerOptions[i].button.addEventListener("click",e=>{
        e.preventDefault();

        for(let k=0; k<markerOptions.length; k++){
            markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add('on');
        moveTo(markerOptions[i].latlag);
    })
}

t_on.addEventListener("click",e=>{
    e.preventDefault();
    if(t_on.classList.contains("on")) return;

    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    t_on.classList.add("on");
    t_off.classList.remove("on");
})

t_off.addEventListener("click",e=>{
    e.preventDefault();
    if(t_off.classList.contains("on")) return;
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
    t_off.classList.add("on");
    t_on.classList.remove("on");
})

window.onresize =()=>{
    let active_btn = document.querySelector(".branch li.on");
    let active_index = active_btn.getAttribute("data-index");

    map.setCenter(markerOptions[active_index].latlag);
}


function moveTo(target){
    var moveLatlon = target;
    map.setCenter(moveLatlon);
}


var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);


var zoomControl = new kakao.maps.ZoomControl();

setZoomable(zoom);
function setZoomable(zoom){
    map.setZoomable(zoom)
}



// 아코디언 메뉴
// function mouseClickHandler(){

//   const target = this;

//   const isSubMenu = target.querySelector(".branch_sub");
//   if(!isSubMenu) return;

//   const hasClassOn = target.classList.contains("on");

//   for(let el of branch_btns) {
//     el.classList.remove("on");
//   }

//   if(hasClassOn){
//     target.classList.remove("on");
//   } else {
//     target.classList.add("on");
//   }

//   if(hasClassOn){
//     target.classList.remove("on");
//   } else {
//     target.classList.add("on");
//   }

// }

// branch_btns.forEach(function(el) {
//   el.addEventListener('click',mouseClickHandler);
// });
