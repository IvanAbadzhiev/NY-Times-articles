import reducers from "../reducers/reducers";
import * as actions from "../actions";

describe("ArticlesReducer", () => {
  let articles = [
    { title: "Title 1" },
    { title: "Title 2" },
    { title: "Title 3" }
  ];

  let action = {
    type: actions.FETCH_ARTICLES_SUCCESS,
    articles: articles
  };

  it("It should update the articles", () => {
    let state = reducers({}, action);
    expect(state.allArticles.articles).toStrictEqual(articles);
  });
});
