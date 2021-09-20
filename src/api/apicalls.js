import { baseapi } from "./baseapi";
import { FETCH_TOPSTORIES, FETCH_NEWS } from "../context/action.type";

export const fetchTopStories = async (dispatch) => {
  await baseapi.get(`topstories.json`).then((response) => {
    // console.log(response.data);
    dispatch({
      type: FETCH_TOPSTORIES,
      payload: response.data,
    });
  });
};

export const fetchNews = async (dispatch, id) => {
  await baseapi.get(`item/${id}.json`).then((response) => {
    // console.log(response.data);
    dispatch({
      type: FETCH_NEWS,
      payload: response.data,
    });
  });
};
