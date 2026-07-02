let controller;
let signal;
async function fetchUser(url) {
  try {
    const response = await fetch(url,{ signal });
    if (!response.ok) {
      if(response.status===404){
        throw new Error("USER NOT FOUND")
      }
      if(response.status===403 || response.status===429){
        throw new Error("rate limit exceeded")
      }
      throw new Error("failed to fetch")
    }
    const data = await response.json();
    return data
  } catch (err) {
    return Promise.reject(err);
  }
}


async function search(e) {
  try{
    if(controller){
      controller.abort()
    }
    controller=new AbortController()
    signal = controller.signal
  }
  catch(error){
    return
  }
  const searchinput = e.target.previousElementSibling.value;
  const newsearch = `https://api.github.com/users/${searchinput.trim()}`;
  try{
    const data = await fetchUser(newsearch);
    console.log(data)
    document.querySelector(".all").style.display="flex"
    document.querySelector(".image img").src = data.avatar_url;
    document.querySelector(".realname").textContent = data.name;
    document.querySelector(".username").textContent = data.login;
    document.querySelector(".followercount").textContent = ` ${data.followers} followers`;
    document.querySelector(".following").textContent = ` · ${data.following} following`;
    document.querySelector(".locationname").textContent = data.location;
    document.querySelector(".bio").textContent = data.bio;
    const searchrepo = newsearch + `/repos`;
    const repodata = await fetchUser(searchrepo);
    const sortedrepos = repodata.sort(
      (a, b) => b.stargazers_count - a.stargazers_count,
    );
    const par=document.querySelector(".repos")
    par.innerHTML=""
    for(let i = 0; i < 6; i++){
      if (sortedrepos[i]===undefined)break;
      const card = document.createElement("div");
      card.classList.add("card")
      const reponame = document.createElement("a");
      reponame.href=""
      reponame.textContent=sortedrepos[i].name
      reponame.classList.add("repo-name")
      const repodesc = document.createElement("div");
      repodesc.textContent=sortedrepos[i].description
      repodesc.classList.add("repo-desc")
      const foot = document.createElement("div");
      foot.classList.add("foot")
      const repolang = document.createElement("div");
      repolang.textContent=sortedrepos[i].language
      repolang.classList.add("repo-lang")
      const star = document.createElement("div");
      star.classList.add("star")
      const starsvg=document.createElement("div")
      starsvg.classList.add("starsvg")
      starsvg.innerHTML = ` <svg
                    aria-label="star"
                    role="img"
                    data-component="Octicon"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    fill="rgba(142, 152, 161, 1)"
                    data-view-component="true"
                    class="octicon octicon-star"
                  >
                    <path
                      d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"
                    ></path>
                  </svg>`;
      const starcount=document.createElement("span")
      starcount.classList.add("starcount")
      starcount.textContent=sortedrepos[i].stargazers_count;
      star.appendChild(starsvg)
      star.appendChild(starcount)
      foot.appendChild(repolang)
      foot.appendChild(star)
      card.appendChild(reponame)
      card.appendChild(repodesc)
      card.appendChild(foot)
      par.appendChild(card)
    }
    controller=null
  }
  catch(err){
    alert(err)
  }
}
