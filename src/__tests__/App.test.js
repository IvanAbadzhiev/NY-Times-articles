import React from "react";
import enzyme, { shallow } from "enzyme";
import App from "../App.js";

describe("<App/>", () => {
  it("It should render the component", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
