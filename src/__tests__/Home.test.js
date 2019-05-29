import React from "react";
import enzyme from "enzyme";
import ConnectedHome, { Home } from "../scenes/Home/view/Home";

import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("<Home/>", () => {
  it("should render connected HomePage", () => {
    const mockStore = configureStore([thunk]);
    let store = mockStore({ allArticles: { articles: [] }, article: {} });
    let wrapper = enzyme.mount(
      <Provider store={store}>
        <ConnectedHome />
      </Provider>
    );
    expect(wrapper.length).toEqual(1);
  });
});
