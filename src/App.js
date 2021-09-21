import React, { useReducer } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import newsReducer from "./context/reducer";
import { contextNews } from "./context/context";
import { initialState } from "./context/initialState";
//components
import Home from "./Pages/Home";
import Ask from "./Pages/Ask";
import Comments from "./Pages/Comments";
import Jobs from "./Pages/Jobs";
import New from "./Pages/New";
import Past from "./Pages/Past";
import Show from "./Pages/Show";
import Login from "./Pages/Login";

const App = () => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  return (
    <contextNews.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ask" component={Ask} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/new" component={New} />
          <Route exact path="/past" component={Past} />
          <Route exact path="/show" component={Show} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/submit" component={Login} />
        </Switch>
      </Router>
    </contextNews.Provider>
  );
};

export default App;
