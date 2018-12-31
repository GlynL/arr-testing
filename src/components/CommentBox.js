import React from "react";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    // TODO: call an action creator
    // add todo
    this.setState({ comment: "" });
  };

  render() {
    return (
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
    );
  }
}

export default CommentBox;
