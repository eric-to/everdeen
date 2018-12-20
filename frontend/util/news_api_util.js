export const fetchNews = (ticker) => {
  // To access my own hidden APIKey use: window.newsAPIKey
  // TODO:
  //  1. Filter by domain
  //  2. Only select uniquely titled articles, preferably with a heading image
  //  3. Limit description, yet keep it helpful
  //  4. Diversify the query results (note: use sources)
  if (ticker === "NOTATICKER") {
    return $.ajax("https://newsapi.org/v2/everything?sources=business-insider,cnbc,the-wall-street-journal&pageSize=30&apiKey=a8591a0bdd2945bea9a91fb46d21dfda");
  } else {
    return $.ajax(`https://newsapi.org/v2/everything?q=${ticker}&apiKey=a8591a0bdd2945bea9a91fb46d21dfda&language=en`);
  }
};
