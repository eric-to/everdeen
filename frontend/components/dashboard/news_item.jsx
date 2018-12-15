import React from 'react';

const NewsItem = ({ newsItem }) => {
  return (
    <li>
      <a className="news-item-container" href={newsItem.url} target="_blank">
        <a className="news-item" href={newsItem.url} target="_blank">
          <div className="news-item-image" style={{ backgroundImage: `url("${newsItem.urlToImage}")` }} />
        </a>
        <div className="news-item-info">
          <h3 className="news-item-title">{newsItem.title}</h3>
          <h3 className="news-item-description">{newsItem.description.slice(0, 120)}</h3>
        </div>
      </a>
    </li>
  );
};

export default NewsItem;
