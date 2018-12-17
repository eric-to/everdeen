// TODO: Diversify query results and obtain unique articles
export const fetchNews = () => {
  // let url = 'http://newsapi.org/v2/everything?';
  // let sources = 'sources=cnbc,the-wall-street-journal';
  // let pageSize = '&pageSize=30';
  // url = url + sources + pageSize + `&apiKey=${window.newsAPIKey}`;
  return $.ajax('http://newsapi.org/v2/everything?sources=the-wall-street-journal&pageSize=30&apiKey=a8591a0bdd2945bea9a91fb46d21dfda');
};
