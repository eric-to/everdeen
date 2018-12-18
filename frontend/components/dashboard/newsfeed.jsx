import React from 'react';

import NewsItem from './news_item';

class Newsfeed extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
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
        <h2 className="newsfeed-header">Recent News</h2>
        <ul>
          {news.map(item => {
            return <NewsItem newsItem={item} />
          })}
        </ul>
      </div>
    );
  }
}

export default Newsfeed;
