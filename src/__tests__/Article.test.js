import React from "react";
import enzyme, { shallow } from "enzyme";
import ConnectedArticle, { Article } from "../scenes/Article/view/Article";

describe("<ArticleList/>", () => {
  it("It should render the article", () => {
    const props = {
      match: {
        params: {
          id: "0"
        }
      },
      articles: [
        {
          title: "Attention title",
          abstract: "Short description",
          media: [{ "media-metadata": [{ url: "/", caption: "alt" }] }]
        }
      ]
    };

    const wrapper = shallow(<Article {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it("It should show loading spinner when there is no article", () => {
    const props = {
      match: {
        params: {
          id: "0"
        }
      },
      articles: [],
      fetchArticles: jest.fn()
    };

    const wrapper = enzyme.mount(<Article {...props} />);
    const title = wrapper.find("h1").at(0);
    expect(title.text()).toEqual("The article is loading");
  });
});
