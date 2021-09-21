import {
  FETCH_TOPSTORIES,
  FETCH_TOPNEWS,
  FETCH_ASKNEWS,
  FETCH_ASKSTORIES,
  FETCH_BESTNEWS,
  FETCH_BESTSTORIES,
  FETCH_JOBNEWS,
  FETCH_JOBSTORIES,
  FETCH_NEWNEWS,
  FETCH_NEWSTORIES,
  FETCH_SHOWNEWS,
  FETCH_SHOWSTORIES,
} from "./action.type";

export default (state, action) => {
  switch (action.type) {
    case FETCH_TOPSTORIES:
      return { ...state, topStories: action.payload };
    case FETCH_TOPNEWS:
      return {
        ...state,
        topStoriesNews: [...state.topStoriesNews, action.payload],
      };

    case FETCH_ASKSTORIES:
      return { ...state, askStories: action.payload };
    case FETCH_ASKNEWS:
      return {
        ...state,
        askStoriesNews: [...state.askStoriesNews, action.payload],
      };

    case FETCH_BESTSTORIES:
      return { ...state, pastStories: action.payload };
    case FETCH_BESTNEWS:
      return {
        ...state,
        pastStoriesNews: [...state.pastStoriesNews, action.payload],
      };

    case FETCH_JOBSTORIES:
      return { ...state, jobsStories: action.payload };
    case FETCH_JOBNEWS:
      return {
        ...state,
        jobsStoriesNews: [...state.jobsStoriesNews, action.payload],
      };

    case FETCH_NEWSTORIES:
      return { ...state, newStories: action.payload };
    case FETCH_NEWNEWS:
      return {
        ...state,
        newStoriesNews: [...state.newStoriesNews, action.payload],
      };

    case FETCH_SHOWSTORIES:
      return { ...state, showStories: action.payload };
    case FETCH_SHOWNEWS:
      return {
        ...state,
        showStoriesNews: [...state.showStoriesNews, action.payload],
      };
    default:
      return state;
  }
};
