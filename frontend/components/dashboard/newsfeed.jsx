import React from 'react';

import NewsItem from './news_item';

class Newsfeed extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div className="newsfeed">
        <h2 className="newsfeed-header">Recent News</h2>
        <ul>
          {this.props.news.map(item => {
            return <NewsItem newsItem={item} />
          })}
        </ul>
      </div>
    );
  }
}

export default Newsfeed;
