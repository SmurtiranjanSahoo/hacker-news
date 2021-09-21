import React, { useEffect, useState, useContext } from "react";
import { fetchBestStories, fetchNews } from "../api/apicalls";
import { contextNews } from "../context/context";
import { FETCH_BESTNEWS } from "../context/action.type";
//components
import Navbar from "../Components/Navbar/Navbar";
import News from "../Components/News/News";
import Footer from "../Components/Footer/Footer";

const Past = () => {
  const [newsCount, setNewsCount] = useState(30);
  const [newsStartCount, setNewsStartCount] = useState(0);
  const newsContext = useContext(contextNews);
  const { dispatch } = newsContext;
  const { pastStoriesNews, pastStories } = newsContext.state;

  useEffect(() => {
    fetchBestStories(dispatch);
  }, []);

  useEffect(() => {
    pastStories.map((newsid, i) => {
      if (i + newsStartCount < newsCount) {
        fetchNews(dispatch, newsid, FETCH_BESTNEWS);
      }
    });
  }, [pastStories, newsCount]);

  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        {pastStoriesNews.map((news, i) => {
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

export default Past;
