import { FETCH_TOPSTORIES, FETCH_NEWS } from "./action.type";

export default (state, action) => {
  switch (action.type) {
    case FETCH_TOPSTORIES:
      return { ...state, topStories: action.payload };

    case FETCH_NEWS:
      return {
        ...state,
        topStoriesNews: [...state.topStoriesNews, action.payload],
      };
    default:
      return state;
  }
};
