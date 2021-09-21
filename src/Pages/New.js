import React, { useEffect, useState, useContext } from "react";
import { fetchNewStories, fetchNews } from "../api/apicalls";
import { contextNews } from "../context/context";
import { FETCH_NEWNEWS } from "../context/action.type";

//components
import Navbar from "../Components/Navbar/Navbar";
import News from "../Components/News/News";
import Footer from "../Components/Footer/Footer";

const New = () => {
  const [newsCount, setNewsCount] = useState(30);
  const [newsStartCount, setNewsStartCount] = useState(0);
  const newsContext = useContext(contextNews);
  const { dispatch } = newsContext;
  const { newStories, newStoriesNews } = newsContext.state;

  useEffect(() => {
    fetchNewStories(dispatch);
  }, []);

  useEffect(() => {
    newStories.map((newsid, i) => {
      if (i + newsStartCount < newsCount) {
        fetchNews(dispatch, newsid, FETCH_NEWNEWS);
      }
    });
  }, [newStories, newsCount]);

  return (
    <div className="wrapper">
      <div className="container">
        <Navbar />
        {newStoriesNews.map((news, i) => {
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

export default New;
