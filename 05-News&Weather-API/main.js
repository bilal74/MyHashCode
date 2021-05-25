// weather api manipulation
const search=document.getElementById('searchWeather');
const form=document.getElementById('formWeather');


async function getInfo(city){
  const resp=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=55faae199e566ff58f3e5eb604626a5f`);
  const respData=await resp.json();
  createWeatherCard(respData);
}
function createWeatherCard(city){

   document.getElementById("icon").setAttribute('src',`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`);
     let apiAttr={desc:`Description: ${city.weather[0].description}`,temp:`Temperature: ${city.main.temp} °C`,cityName:`City: ${city.name}`};
     let apiKeys=Object.keys(apiAttr);
     for(const key of apiKeys){
       console.log(key,apiAttr[key]);
       document.getElementById(key).innerHTML=apiAttr[key];
     }


}
form.addEventListener("submit",c=>{
  c.preventDefault();
  const city=search.value;
  if(city){
    getInfo(city);
     document.getElementById("infoContainer").classList.add('infoContainerStyles');
    // form.classList.add('formWeather');
    search.value='';
  };
});
//news-api-manipulation

const searchNews=document.getElementById('searchNews');
const formNews=document.getElementById('formNews');

async function getNewsInfo(news){
const respNews=await fetch(`https://newsapi.org/v2/everything?q=${news}&apiKey=d9ebf7edbd20473fb659922a585b2659`);
  const respNewsData=await respNews.json();
  console.log(respNewsData);
  createNewsCard(respNewsData);
}
function createNewsCard(news){
// itterate for more articles
  for(let i=0;i<1;i++){
    document.getElementById('newsImg').setAttribute('src',`${news.articles[i].urlToImage}`);
    const newsAttr={title:`${news.articles[i].title}`,newsDate:`Published at:${news.articles[i].publishedAt}`,newsContent:`${news.articles[i].content}`};
     const newsAttrKeys=Object.keys(newsAttr);
     for(const key of newsAttrKeys){
       document.getElementById(key).innerHTML=newsAttr[key];
     };
      };
  };
document.getElementById('formNews').addEventListener('submit',n=>{
  n.preventDefault();
  const news=document.getElementById('searchNews').value;
  if(news){
    getNewsInfo(news);
    document.getElementById('searchNews').value='';
  }
})
