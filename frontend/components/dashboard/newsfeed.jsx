import React from "react";

import NewsItem from "./news_item";

class Newsfeed extends React.Component {
  componentDidMount() {
    this.props.fetchNews(this.props.ticker);
  }

  // The NewsAPI is a little funky. Sometimes it gives
  // articles that contain raw html in the description.
  // This helps get rid of those articles.
  containsBogus(description) {
    return description.indexOf("href") > 0;
  }

  // Finds all the unique articles
  filterByTitle(news) {
    const seenTitles = [];
    const uniqueItems = [];
    for (let i = 0; i < news.length; i++) {
      let item = news[i];
      if (seenTitles.indexOf(item.title) === -1) {
        if (item.description) {
          if (!(this.containsBogus(item.description))) {
            seenTitles.push(item.title);
            uniqueItems.push(item);
          }
        }
      }
    }
    return uniqueItems;
  }

  newsHeading() {
    const heading = !this.props.ticker ? "Recent News" : "News";
    return <h2 className="newsfeed-heading">{ heading }</h2>;
  }

  render() {
    const news = this.filterByTitle(this.props.news);
    return (
      <div className="newsfeed-container">
        { this.newsHeading() }
        <ul className="newsfeed">
          {news.map((item) => (
            <NewsItem newsItem={item} key={item.title} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Newsfeed;
