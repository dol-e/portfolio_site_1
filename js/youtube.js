// key = AIzaSyA0C3aA8cMRxJJZIUWlvMLx31Q18dTaxGY


const vidList = document.querySelector(".vidList");
const key = "AIzaSyA0C3aA8cMRxJJZIUWlvMLx31Q18dTaxGY";
const playList = "PL8WLjueTcbcbgt4NHxXWsLC0EZPzBWaYj"
const num = 6;

const url =`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

fetch(url)
  .then(data=>{ // 매개변수에 괄호 없애도 된다.
    return data.json();
  })

  .then(json=>{
    let items = json.items; 

    let result = "";
    items.map(item=>{ 

    let title = item.snippet.title;
    
    if(title.length >= 30){
      title = `${title.slice(0,30)}...`
      //title = title.substr(0,30) + "...";
    }
    let con = item.snippet.description;

    if(con.length >= 100){
      con = `${con.slice(0,100)}...`
    }

    let date = item.snippet.publishedAt;
    date = date.split("T")[0];
     
      result += `
        <article>
          <a href="${item.snippet.resourceId.videoId}" class="pic">
            <img src="${item.snippet.thumbnails.medium.url}">
            <div class="cover">
              <button type="button"></button>
            </div>
          </a>
          <div class="con">
            <h2>${title}</h2>
            <p>${con}</p>
            <span>${date}</span>
          </div>
        </article>
      `;
    });
    vidList.innerHTML = result;
  });


  vidList.addEventListener("click", (e)=>{
    e.preventDefault();

    if(!e.target.closest("a")) return; // 모든 e.target에 적용하고 싶은게 아니라면 이런 식으로 예외사항을 넣어줄 수 있다.
    const vidId = e.target.closest("a").getAttribute("href");

    let pop = document.createElement("figure");
    pop.classList.add("pop");

    pop.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="70%" height="70%" allowfullscreen>
      이 브라우저는 iframe을 지원하지 않습니다.
      </iframe>
      <span class="btnClose">Close</span>
    `;

    vidList.append(pop);

  });


  // 위에서 pop을 만들고 나서 아래 이벤트리스너를 연결한 것이다. 합칠 수 없다.
  vidList.addEventListener("click", (e)=>{

    const pop = vidList.querySelector(".pop");
    if(pop) { //pop이 존재한다면
      const close = pop.querySelector('span'); 
      if(e.target == close) pop.remove(); // close를 클릭했다면 pop을 삭제(닫기)
    }


  });

