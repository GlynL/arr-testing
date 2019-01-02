import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
  it("has the correct type", () => {
    const action = saveComment();
    expect(action.type).toBe(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const comment = "new comment";
    const action = saveComment(comment);
    expect(action.payload).toBe(comment);
  });
});
