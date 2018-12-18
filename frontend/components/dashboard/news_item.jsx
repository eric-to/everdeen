import React from 'react';

const NewsItem = ({ newsItem }) => {
  const description = () => {
    // if (newsItem.description !== null) {
    //   const sentences = newsItem.description.match( /[^\.!\?]+[\.!\?]+/g );
    //   if (sentences !== null) {
    //     return `${sentences[0]} ${sentences[1]}`;
    //   } else {
    //     return newsItem.description;
    //   }
    // }
    if (newsItem.description !== null) {
      return newsItem.description.slice(0, 120);
    }
  };

  return (
    <li>
      <a className="news-item-container" href={newsItem.url} target="_blank">
        <a className="news-item" href={newsItem.url} target="_blank">
          <div className="news-item-image" style={{ backgroundImage: `url("${newsItem.urlToImage}")` }} />
        </a>
        <div className="news-item-info">
          <h3 className="news-item-title">{newsItem.title}</h3>
          <h3 className="news-item-description">{description()}</h3>
        </div>
      </a>
    </li>
  );
};

export default NewsItem;
