import React, { useReducer, useEffect, useState } from "react";
import "./App.css";
import newsReducer from "./context/reducer";
import { contextNews } from "./context/context";
import { fetchTopStories, fetchNews } from "./api/apicalls";
//components
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [newsCount, setNewsCount] = useState(30);
  const [newsStartCount, setNewsStartCount] = useState(0);
  const initialState = {
    topStories: [],
    topStoriesNews: [],
  };
  const [state, dispatch] = useReducer(newsReducer, initialState);
  const { topStories, topStoriesNews } = state;

  useEffect(() => {
    fetchTopStories(dispatch);
  }, []);

  useEffect(() => {
    topStories.map((newsid, i) => {
      if (i + newsStartCount < newsCount) {
        fetchNews(dispatch, newsid);
      }
    });
  }, [topStories, newsCount]);

  return (
    <contextNews.Provider value={{ state, dispatch }}>
      <div className="wrapper">
        <div className="container">
          <Navbar />
          {topStoriesNews.map((news, i) => {
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
    </contextNews.Provider>
  );
};

export default App;
