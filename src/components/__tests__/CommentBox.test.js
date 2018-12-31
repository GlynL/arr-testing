import React from "react";
// uses full DOM rendering just for practice - woulnd't use normally
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area & button", () => {
  expect(wrapped.find("textarea").length).toBe(1);
  expect(wrapped.find("button").length).toBe(1);
});

describe("textarea & form events", () => {
  const value = "test comment";
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value, name: "comment" } });
    wrapped.update();
  });

  it("handles text input", () => {
    expect(wrapped.find("textarea").prop("value")).toBe(value);
  });

  it("handles form submission", () => {
    wrapped.find("form").simulate("submit", { preventDefault: () => {} });
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toBe("");
  });
});
