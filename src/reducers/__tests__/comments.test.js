import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const comment = "new comment";
  const action = {
    type: SAVE_COMMENT,
    payload: comment
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual([comment]);
});

// not hte most useful test
it("handles actions of type unknown", () => {
  const newState = commentsReducer([], { type: "adkjafldak" });
  expect(newState).toEqual([]);
});
