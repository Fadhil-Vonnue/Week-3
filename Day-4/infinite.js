async function fetchPosts(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error while fetching");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}
let num = 0;
const target = document.querySelector(".sentinel");
async function onLoad(i = num) {
  try {
    document.querySelector(".retry").style.display = "none";
    document.querySelector(".spintop").style.display = "flex";
    const data = await fetchPosts(
      `https://jsonplaceholder.typicode.com/posts?_start=${i}&_limit=10`,
    );
    loadCards(data);
    num += 10;
    target.style.display = "flex";
  } catch (err) {
    document.querySelector(".retry").style.display = "flex";
    document.querySelector(".spintop").style.display = "none";
    target.style.display = "none";
    console.log(num);
  }
}

const container = document.body;

const callBack = (entries) => {
  if (entries[0].intersectionRatio < 1) {
    return;
  }

  if (num === 100) {
    target.textContent = "END OF FEED";
    document.querySelector(".spintop").style.display = "none";
  } else {
    loadnext(num);
  }
};
const observer = new IntersectionObserver(callBack);
observer.observe(target);
function loadnext(i) {
  onLoad(i);
}
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("div");
  title.textContent = data.title;
  const userid = document.createElement("span");
  userid.textContent = data.userId;
  const id = document.createElement("span");
  id.textContent = data.id;
  const body = document.createElement("div");
  body.textContent = data.body;
  card.appendChild(title);
  card.appendChild(userid);
  card.appendChild(id);
  card.appendChild(body);
  return card;
}

function loadCards(data) {
  const par = document.querySelector(".cards");
  data.forEach((element) => {
    const card = createCard(element);
    par.appendChild(card);
  });
}
