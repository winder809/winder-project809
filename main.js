
function fetchNews(event) {
    event.preventDefault(); 
  
    const searchInput = document.getElementById('searchInput').value;
    const quantityInput = document.getElementById('quantityInput').value;
    const resultContainer = document.getElementById('resultContainer');
    const errorContainer = document.getElementById('errorContainer');
  
    
    resultContainer.innerHTML = '';
    errorContainer.innerHTML = '';
  
    
    const apiKey = '6e00add3fdc94bbfa14622a2d21aa904'; 
    const apiUrl = `https://newsapi.org/v2/everything?q=${searchInput}&pageSize=${quantityInput}&apiKey=${apiKey}`;
  
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          
          data.articles.forEach(article => {
            const articleElement = document.createElement('article');
            const titleElement = document.createElement('h2');
            const linkElement = document.createElement('a');
            linkElement.href = article.url;
            linkElement.textContent = article.title;
            titleElement.appendChild(linkElement);
            articleElement.appendChild(titleElement);
            resultContainer.appendChild(articleElement);
          });
        } else {
        
          const errorElement = document.createElement('p');
          errorElement.textContent = 'Failed to fetch news. Please try again later.';
          errorContainer.appendChild(errorElement);
        }
      })
      .catch(error => {
       
        const errorElement = document.createElement('p');
        errorElement.textContent = 'An error occurred. Please try again later.';
        errorContainer.appendChild(errorElement);
      });
  }
  
  
  const form = document.getElementById('searchForm');
  form.addEventListener('submit', fetchNews);
  
  
  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', function() {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
  });
  
  
  const errorButton = document.getElementById('errorButton');
  errorButton.addEventListener('click', function() {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = '';
  });
  
  
  window.addEventListener('DOMContentLoaded', fetchNews);
  