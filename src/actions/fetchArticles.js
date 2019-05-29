import {
  fetchArticlesPending,
  fetchArticlesSuccess,
  fetchArticlesError
} from "./index";

// TODO: add in environment
const API_KEY = "ayPEsoWf0w58kNVt0qvnHvAXVcIpSTNU";

function fetchArticles() {
  return dispatch => {
    dispatch(fetchArticlesPending());
    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=${API_KEY}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.error) {
          throw res.error;
        }

        dispatch(fetchArticlesSuccess(res.results));
        return res.results;
      })
      .catch(error => {
        dispatch(fetchArticlesError(error));
      });
  };
}

export default fetchArticles;
