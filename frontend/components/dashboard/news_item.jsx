import React from "react";

const NewsItem = ({ newsItem }) => {
  const MONTHS = {
    "1": "Jan",
    "2": "Feb",
    "3": "Mar",
    "4": "Apr",
    "5": "May",
    "6": "Jun",
    "7": "Jul",
    "8": "Aug",
    "9": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
  }

  const timeAgo = (time) => {
    const timeDiff = (new Date()) - (new Date(time));
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (seconds < 60) {
      return `${seconds}s ago`;
    } else if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}hr ago`;
    } else {
      const date = time.slice(5, 10).split("-");
      const month = MONTHS[date[0]];
      const day = date[1];
      if (day[0] === "0") {
        return `${month} ${day.slice(1)}`;
      }
      return `${month} ${day}`;
    }
  } 

  const description = newsItem.description.split(" ");
  let summary = "";
  for (let i = 0; i < description.length; i++) {
    if (summary.length < 140) {
      summary += (description[i] + " ")
    }
  }
  if (summary.slice(-2) === ", ") {
    summary = summary.slice(0, -2);
  }

  return (
    <li>
      <a className="news-item-container" href={newsItem.url} target="_blank">
        <div className="news-item-image-container">
          <div className="news-item-image" style={{ backgroundImage: `url("${newsItem.urlToImage}")` }} />
        </div>
        <div className="news-item-info">
          <div className="news-item-meta">{`${newsItem.source.name} - ${timeAgo(newsItem.publishedAt)}` }</div>
          <h3 className="news-item-title">{ newsItem.title }</h3>
          <h3 className="news-item-description">{ summary }</h3>
        </div>
      </a>
    </li>
  );
};

export default NewsItem;
