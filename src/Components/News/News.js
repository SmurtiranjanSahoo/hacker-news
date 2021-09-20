import React from "react";
import "./News.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

const News = ({ index, news }) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  return (
    <div className="news-container">
      <div className="news-no">
        <span>{index + 1}.</span>
      </div>
      <div className="news">
        <a target="_blank" href={news.url} className="news-title">
          {news.title}{" "}
          <span className="news-website">
            ({`https://${news.url?.slice(8).split("/")[0]}`})
          </span>
        </a>
        <p className="news-details">
          {" "}
          {news.score} points by {news.by}{" "}
          {timeAgo.format(new Date() - new Date(news.time))}| hide |{" "}
          {news.descendants} comments
        </p>
      </div>
    </div>
  );
};

export default News;
