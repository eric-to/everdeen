import React from 'react';

import NewsItem from './news_item';

class Newsfeed extends React.Component {
  componentWillMount() {
    this.props.fetchNews(this.props.ticker);
  }

  newsHeading() {
    if (this.props.ticker === "NOTATICKER") {
      return (
        <h2 className="newsfeed-header">Recent News</h2>
      );
    } else {
      return (
        <h2 className="newsfeed-header">News</h2>
      );
    }
  }

  // Kudos to Dwayne Charrington for sharing
  // Find him on Github @ Vheissu
  filterNews(news, prop) {
    return news.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  render() {
    const news = this.filterNews(this.props.news, "title");
    return (
      <div className="newsfeed">
        { this.newsHeading() }
        <ul className="all-news-container">
          {news.map(item => {
            return <NewsItem newsItem={item} />
          })}
        </ul>
      </div>
    );
  }
}

export default Newsfeed;
