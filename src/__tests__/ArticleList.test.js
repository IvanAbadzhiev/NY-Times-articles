import React from "react";
import { shallow } from "enzyme";
import ArticleList from "../scenes/Home/components/ArticleList";

describe("<ArticleList/>", () => {
  it("It should render 5 articles", () => {
    const articles = [
      {
        title: "Attention title",
        abstract: "Short description",
        media: [{ "media-metadata": [{ url: "/", caption: "alt" }] }]
      },
      {
        title: "Attention title",
        abstract: "Short description",
        views: 2,
        media: [{ "media-metadata": [{ url: "/", caption: "alt" }] }]
      },
      {
        title: "Attention title",
        abstract: "Short description",
        views: 3,
        media: [{ "media-metadata": [{ url: "/", caption: "alt" }] }]
      },
      {
        title: "Attention title",
        abstract: "Short description",
        media: [{ "media-metadata": [{ url: "/", caption: "alt" }] }]
      },
      {
        title: "Attention title",
        abstract: "Short description",
        media: [{ "media-metadata": [{ url: "/", caption: "alt" }] }]
      }
    ];
    const wrapper = shallow(<ArticleList articles={articles} />);
    expect(wrapper.length).toEqual(5);
  });

  it("It should redirect when you click on article", () => {
    const props = {
      history: {
        push: jest.fn()
      },
      articles: [
        {
          title: "Attention title",
          abstract: "Short description",
          media: [{ "media-metadata": [{ url: "/", caption: "alt" }] }]
        }
      ]
    };

    const mockFunction = jest.fn();

    const wrapper = shallow(<ArticleList {...props} />);
    wrapper.find("div").simulate("click");
    expect(mockFunction.mock.calls.length).toEqual(0);
  });
});
