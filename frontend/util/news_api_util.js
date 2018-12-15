export const fetchNews = () => {
  // const url = 'https://newsapi.org/v2/everything?' +
  //             'q=Apple&' +
  //             'from=2018-12-14&' +
  //             'sortBy=popularity&' +
  //             'pageSize=30&apiKey=' +
  //             window.newsAPIKey;
  return $.ajax('https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=a8591a0bdd2945bea9a91fb46d21dfda')
}
