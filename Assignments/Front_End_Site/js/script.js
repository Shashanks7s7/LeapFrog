let newsscreen = document.getElementById("news");
let newsarticle = newsscreen.querySelector("#newsarticle");
let newscontents = null;
let news = [];
window.onload = async () => {
  const response = await fetch(
    "https://ExpressJS-API.shashanks7s7.repl.co/news/get",
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
  );
  news = await response.json();

  newscontents = news.map((news) => {
    return `<article class="news-item">
    <h4>${news.title}</h4>
    <p>${news.content}</p>
    <br>
    <hr>
    <br>
    </article>
    `;
  });

  newscontents = newscontents.join("");
  newsarticle.innerHTML = newscontents;
};

const formfield = newsscreen.querySelector("#formfield");
const submitbutn = newsscreen.querySelector(".butn");
let data = {};

submitbutn.addEventListener("click", async (e) => {
  e.preventDefault();
  let titlediv = document.getElementById("title");
  let title = titlediv.value;
  let contentdiv = document.getElementById("content");
  let content = contentdiv.value;
  let rawData = { title, content };
  data = JSON.stringify(rawData);
  const response = await fetch(
    "https://ExpressJS-API.shashanks7s7.repl.co/news/post",
    {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  news = [...news, rawData];

  let f = `<article class="news-item">
    <h4>${title}</h4>
    <p>${content}</p>
    <br>
    <hr>
    <br>
    </article>
    `;

  newscontents = newscontents + f;
  newsarticle.innerHTML = newscontents;
  content = "";
  title = "";
  titlediv.value = null;
  contentdiv.value = null;
});
