import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetch #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // attempt to render whole app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find(".fetchCommentsBtn").simulate("click");

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toBe(2);
    done();
    wrapped.unmount();
  });
});
