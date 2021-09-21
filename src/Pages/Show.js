import React, { useEffect, useState, useContext } from "react";
import { fetchShowStories, fetchNews } from "../api/apicalls";
import { contextNews } from "../context/context";
import { FETCH_SHOWNEWS } from "../context/action.type";

//components
import Navbar from "../Components/Navbar/Navbar";
import News from "../Components/News/News";
import Footer from "../Components/Footer/Footer";

const Show = () => {
  const [newsCount, setNewsCount] = useState(30);
  const [newsStartCount, setNewsStartCount] = useState(0);
  const newsContext = useContext(contextNews);
  const { dispatch } = newsContext;
  const { showStories, showStoriesNews } = newsContext.state;

  useEffect(() => {
    fetchShowStories(dispatch);
  }, []);

  useEffect(() => {
    showStories.map((newsid, i) => {
      if (i + newsStartCount < newsCount) {
        fetchNews(dispatch, newsid, FETCH_SHOWNEWS);
      }
    });
  }, [showStories, newsCount]);

  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        {showStoriesNews.map((news, i) => {
          return <News news={news} index={i} key={i} />;
        })}
        <button
          className="more-btn"
          onClick={() => {
            setNewsCount((prev) => prev + 30);
            setNewsStartCount((prev) => prev + 30);
          }}
        >
          More
        </button>
        <Footer />
      </div>
    </div>
  );
};

export default Show;
