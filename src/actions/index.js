export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const FETCH_ARTICLES_PENDING = "FETCH_ARTICLES_PENDING";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAIL = "FETCH_ARTICLES_FAIL";

export function fetchArticlesPending() {
  return {
    type: FETCH_ARTICLES_PENDING
  };
}

export function fetchArticlesSuccess(articles) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    articles: articles
  };
}

export function fetchArticlesError(error) {
  return {
    type: FETCH_ARTICLES_FAIL,
    error: error
  };
}
