import React from "react";
import enzyme from "enzyme";
import NotFound from "../scenes/NotFound/view/NotFound";

describe("<NotFound/>", () => {
  it("should have text 404 Not Found", () => {
    const wrapper = enzyme.mount(<NotFound />);
    const title = wrapper.find("h1").at(0);
    expect(title.text()).toEqual("Error 404");
  });
});
