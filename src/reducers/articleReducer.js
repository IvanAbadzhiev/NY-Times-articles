import {
  FETCH_ARTICLES_PENDING,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL
} from "../actions/index";

const initialState = {
  pending: false,
  articles: [],
  error: null
};

export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_PENDING:
      return {
        ...state,
        pending: true
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        pending: false,
        articles: action.articles
      };

    case FETCH_ARTICLES_FAIL:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const getArticles = state => state.allArticles.articles;
export const getArticlesPending = state => state.allArticles.pending;
export const getArticlesError = state => state.allArticles.error;
