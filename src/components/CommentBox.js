import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

import requireAuth from "components/requireAuth";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetchCommentsBtn" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));
