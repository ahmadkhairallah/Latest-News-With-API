const apikey = "910985f240a64fa898fe7696e9865fd9";
const pagesSize = 10;

function fetchNews ()  {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apikey=${apikey}&pgeSize=${pagesSize}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
       
        console.log(data);
        displayNews(data.articles);
    })
    .catch((error) => console.log(error));
}


function displayNews (articles) {
    const newsList = document.querySelector(".news-list");
    newsList.innerHTML = "";
    
    articles.forEach((article) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="info">
        <div class="author">
        <span>Author</span>${article.author || "Unknown"}
        </div>
        <div class="publishedAt">${new Date(article.publishedAt).toDateString()}</div>
        </div>
        <img src="${article.urlToImage} ${article.title}">
        <a href="${article.url}" target="_blank">${article.title}</a>
        <p class="description">${article.description}</p>
        <div class="source">
        <span>[source]</span>
        ${article.source.name}
        </div>
        `;
        newsList.appendChild(listItem);
    })
    
}

window.onload = fetchNews;