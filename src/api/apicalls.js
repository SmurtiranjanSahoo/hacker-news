import { baseapi } from "./baseapi";
import {
  FETCH_TOPSTORIES,
  FETCH_ASKSTORIES,
  FETCH_BESTSTORIES,
  FETCH_JOBSTORIES,
  FETCH_NEWSTORIES,
  FETCH_SHOWSTORIES,
} from "../context/action.type";

export const fetchTopStories = async (dispatch) => {
  await baseapi.get(`topstories.json`).then((response) => {
    dispatch({
      type: FETCH_TOPSTORIES,
      payload: response.data,
    });
  });
};

export const fetchNewStories = async (dispatch) => {
  await baseapi.get(`newstories.json`).then((response) => {
    dispatch({
      type: FETCH_NEWSTORIES,
      payload: response.data,
    });
  });
};

export const fetchAskStories = async (dispatch) => {
  await baseapi.get(`askstories.json`).then((response) => {
    dispatch({
      type: FETCH_ASKSTORIES,
      payload: response.data,
    });
  });
};

export const fetchBestStories = async (dispatch) => {
  await baseapi.get(`beststories.json`).then((response) => {
    dispatch({
      type: FETCH_BESTSTORIES,
      payload: response.data,
    });
  });
};

export const fetchJobStories = async (dispatch) => {
  await baseapi.get(`jobstories.json`).then((response) => {
    dispatch({
      type: FETCH_JOBSTORIES,
      payload: response.data,
    });
  });
};

export const fetchShowStories = async (dispatch) => {
  await baseapi.get(`showstories.json`).then((response) => {
    dispatch({
      type: FETCH_SHOWSTORIES,
      payload: response.data,
    });
  });
};

export const fetchNews = async (dispatch, id, type) => {
  await baseapi.get(`item/${id}.json`).then((response) => {
    dispatch({
      type: type,
      payload: response.data,
    });
  });
};
